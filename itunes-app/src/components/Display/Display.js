import React, { Component } from 'react'

import Album from '../Album/Album'

class Display extends Component {
	constructor(props) {
		super(props)
		this.state = {
			albums: [],
		}
	}

	componentDidUpdate(prevProps) {
		if (prevProps.albums !== this.props.albums) {
			console.log('not equal')
			this.setState({
				albums: this.props.albums,
			})
			console.log(this.props.albums)
		}
	}

	render() {
		const { albums } = this.state
		return (
			<section className="section-albumlist">
				<div className="album-container">
					{albums
						? albums.map((album) => (
								<Album key={album.collectionId} album={album}></Album>
						  ))
						: null}
				</div>
			</section>
		)
	}
}

export default Display
