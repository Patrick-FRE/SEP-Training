import React, { Component } from 'react'
import { store, actionCreater } from '../../Redux/Redux'

import './Count.scss'

class Count extends Component {
	constructor(props) {
		super(props)
		this.state = {
			count: 0,
			singer: '',
		}
	}

	componentDidMount() {
		store.subscribe(() => {
			this.forceUpdate()
			this.setState({
				count: store.getState().albums.length,
				singer: store.getState().singer,
			})
		})
	}

	render() {
		return (
			<div className="count-container">
				{this.state.count === 0 ? (
					<div className="title">Search Albums by ArtistName:</div>
				) : (
					<div className="title">
						{this.state.count} results for {this.state.singer}
					</div>
				)}
			</div>
		)
	}
}

export default Count
