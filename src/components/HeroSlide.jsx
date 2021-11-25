import { useState, useEffect, useRef } from 'react'

import SwiperCore, { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import tmdbApi, { category, movieType } from '../api/tmdbApi'
import apiConfig from '../api/apiConfig'

const HeroSlide = () => {
	SwiperCore.use([Autoplay])

	const [movieItems, setMovieItems] = useState([])

	useEffect(() => {
		const getMovies = async () => {
			const params = { page: 1 }
			try {
				const response = await tmdbApi.getMoviesList(movieType.popular, {
					params,
				})
				setMovieItems(response.results.slice(1, 4))
				console.log(response)
			} catch {
				console.log('error')
			}
		}
		getMovies()
	}, [])

	return (
		<div className='hero-slide'>
			<Swiper
				modules={[Autoplay]}
				grabCursor={true}
				spaceBetween={0}
				slidesPerView={1}
				// autoplay={{ delay: 3000 }}
			>
				{movieItems.map((item, i) => (
					<SwiperSlide key={i}>
						{({ isActive }) => (
							<img
								src={apiConfig.originalImage(item.backdrop_path)}
								alt={`${item.title} poster`}
							/>
						)}
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

const HeroSlideItem = (props) => {
	let history = useHistory()
}

export default HeroSlide