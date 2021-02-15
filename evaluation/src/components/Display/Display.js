import React, { Component } from 'react'
import { store, actionCreater } from '../../Redux/Redux'
import Album from '../Album/Album'

import './Display.scss'

class Display extends Component {
	constructor(props) {
		super(props)
		this.state = {
			albums: [],
		}
	}
	componentDidMount() {
		store.subscribe(() => {
			this.forceUpdate()
			this.setState({
				albums: store.getState().albums,
			})
		})
	}

	render() {
		const { albums } = this.state
		return (
			<section className="section-albumlist">
				<div className="album-container">
					{albums ? albums.map((album) => <Album album={album}></Album>) : null}
				</div>
			</section>
		)
	}
}

export default Display
