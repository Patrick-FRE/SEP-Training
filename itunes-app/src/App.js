import React, { Component } from 'react'
import Layout from './components/Layout/Layout'
import Display from './components/Display/Display'
import WithItunesData from './components/WithItunesData/WithItunesData'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<WithItunesData>
				{(albums, searchAlbum) => (
					<Layout albums={albums} searchAlbum={searchAlbum}>
						<Display albums={albums}></Display>
					</Layout>
				)}
			</WithItunesData>
		)
	}
}

export default App
