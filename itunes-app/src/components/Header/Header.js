import React, { Component } from 'react'
import './Header.scss'

class Header extends Component {
	constructor(props) {
		super(props)
		this.state = {
			singer: '',
		}
	}

	handleSingerInputChange = (e) => {
		this.setState({
			singer: e.target.value,
		})
	}

	handleSubmitInput = (e) => {
		e.preventDefault()
		this.props.searchAlbum(this.state.singer)
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
