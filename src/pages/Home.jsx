import React from 'react'
import { Link } from 'react-router-dom'

import HeroSlide from '../components/HeroSlide'
import MovieList from '../components/MovieList'
import { OulineButton } from '../components/Button'

import { category, movieType, tvType } from '../api/tmdbApi'

const Home = () => {
	return (
		<>
			<HeroSlide />
			<div className='container'>
				<div className='section mb-3'>
					<div className='section__header mb-2'>
						<h2>Trending Movies</h2>
						<Link to='/'>
							<OulineButton className='small'>View More</OulineButton>
						</Link>
					</div>
					<MovieList category={category.movie} type={movieType.popular} />
				</div>

				<div className='section mb-3'>
					<div className='section__header mb-2'>
						<h2>Top Rated Movies</h2>
						<Link to='/movie'>
							<OulineButton className='small'>View More</OulineButton>
						</Link>
					</div>
					<MovieList category={category.movie} type={movieType.top_rated} />
				</div>

				<div className='section mb-3'>
					<div className='section__header mb-2'>
						<h2>Trending TV</h2>
						<Link to='/tv'>
							<OulineButton className='small'>View More</OulineButton>
						</Link>
					</div>
					<MovieList category={category.tv} type={tvType.popular} />
				</div>

				<div className='section mb-3'>
					<div className='section__header mb-2'>
						<h2>Trending TV</h2>
						<Link to='/tv'>
							<OulineButton className='small'>View More</OulineButton>
						</Link>
					</div>
					<MovieList category={category.tv} type={tvType.top_rated} />
				</div>
			</div>
		</>
	)
}

export default Home
