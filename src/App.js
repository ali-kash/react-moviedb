import 'swiper/swiper.min.css'

import './styles/global.scss'

import { Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

// import Home from './pages/Home'
// import Catelog from './pages/Catelog'
// import Detail from './pages/Detail'

import Routes from './config/Routes'

const App = () => {
	return (
		<>
			<Route
				render={(props) => (
					<>
						<Header {...props} />
						<Routes />
						<Footer />
					</>
				)}
			/>
		</>
	)
}

export default App
