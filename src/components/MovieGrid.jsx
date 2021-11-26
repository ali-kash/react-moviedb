import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import tmbdApi, { category, movieType, tvType } from '../api/tmdbApi'

import MovieCard from './MovieCard'
import { OulineButton } from './Button'

const MovieGrid = (props) => {
	const [items, setItems] = useState([])
	const [page, setPage] = useState(1)
	const [totalPage, setTotalPage] = useState(0)

	const { keyword } = useParams()

	useEffect(() => {
		const getList = async () => {
			let response = null

			if (keyword === undefined) {
				const params = {}
				switch (props.category) {
					case category.movie:
						response = await tmbdApi.getMoviesList(movieType.upcoming, {
							params,
						})
						break
					default:
						response = await tmbdApi.getTvList(tvType.popular, { params })
				}
			} else {
				const params = {
					query: keyword,
				}
				response = await tmbdApi.search(props.category, { params })
			}
			setItems(response.results)
			setTotalPage(response.total_pages)
		}
		getList()
	}, [props.category, keyword])

	const loadMore = async () => {
		let response = null

		if (keyword === undefined) {
			const params = {
				page: page + 1,
			}
			switch (props.category) {
				case category.movie:
					response = await tmbdApi.getMoviesList(movieType.upcoming, {
						params,
					})
					break
				default:
					response = await tmbdApi.getTvList(tvType.popular, { params })
			}
		} else {
			const params = {
				page: page + 1,
				query: keyword,
			}
			response = await tmbdApi.search(props.category, { params })
		}
		setItems([...items, ...response.results])
		setPage(page + 1)
	}

	return (
		<>
			<div className='movie-grid'>
				{items.map((item, i) => (
					<MovieCard category={props.category} item={item} key={i} />
				))}
			</div>
			{page < totalPage ? (
				<div className='movie-grid__loadmore'>
					<OulineButton className='small' onClick={loadMore}>
						Load More
					</OulineButton>
				</div>
			) : null}
		</>
	)
}

export default MovieGrid
