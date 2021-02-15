import React, { Component } from 'react'

import Header from '../../components/Header/Header'

class Layout extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<div className="app-container">
				<header className="app-header">
					<Header></Header>
				</header>
				<main className="app-content">{this.props.children}</main>
			</div>
		)
	}
}

export default Layout
