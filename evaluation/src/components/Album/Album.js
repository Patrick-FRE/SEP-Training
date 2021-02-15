import React, { Component } from 'react'

import './Album.scss'

class Album extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		const { album } = this.props
		return (
			<div className="album-item">
				<div className="album-img">
					<img src={album.artworkUrl100}></img>
				</div>
				<div className="album-name">{album.collectionName}</div>
			</div>
		)
	}
}

export default Album
