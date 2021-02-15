import React, { Component } from 'react'
import { getAllAlbums } from '../../apis/albums.api'

class WithItunesData extends Component {
	constructor(props) {
		super(props)
		this.state = {
			albums: [],
		}
	}

	componentDidMount() {}

	handleSearchAlbum = (singer) => {
		getAllAlbums(singer).then((data) => {
			this.setState({
				albums: data.results,
			})
		})
	}

	render() {
		if (typeof this.props.children === 'function') {
			return this.props.children(this.state.albums, this.handleSearchAlbum)
		}
	}
}

export default WithItunesData
