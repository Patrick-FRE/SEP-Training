import React, { Component } from 'react'

import Header from '../../components/Header/Header'

class Layout extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		const { albums, searchAlbum } = this.props
		return (
			<div className="app-container">
				<header className="app-header">
					<Header albums={albums} searchAlbum={searchAlbum}></Header>
				</header>
				<main className="app-content">{this.props.children}</main>
			</div>
		)
	}
}

export default Layout
