import React, { Component } from 'react'
import './Header.scss'

import { store, actionCreater } from '../../Redux/Redux'
import { getAllAlbums } from '../../apis/albums.api'

class Header extends Component {
	constructor(props) {
		super(props)
		this.state = {
			singer: '',
		}
	}

	componentDidMount() {
		store.subscribe(() => {
			this.forceUpdate()
		})
	}

	handleSingerInputChange = (e) => {
		this.setState({
			singer: e.target.value,
		})
	}

	handleSubmitInput = (e) => {
		e.preventDefault()
		getAllAlbums(this.state.singer).then((data) => {
			store.dispatch(
				actionCreater.searchAlbums(data.results, this.state.singer)
			)
		})
	}

	render() {
		return (
			<div className="header">
				<form className="itunes-form" onSubmit={this.handleSubmitInput}>
					<input
						className="itunes-searchbar"
						type="text"
						placeholder="Search..."
						value={this.state.singer}
						onChange={this.handleSingerInputChange}
					></input>
				</form>
			</div>
		)
	}
}

export default Header
