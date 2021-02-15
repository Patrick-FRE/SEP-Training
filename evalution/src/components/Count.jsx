import React, { Component } from 'react'
import {connect} from 'react-redux'
import { createLogicalAnd } from 'typescript'
import {getartist} from '../redux/actions/Count'
import '../style/Count.css'

class Count extends Component {


    componentDidMount() {
   
        let ARTIS_NAME = this.props.persons[0].name
        // console.log(this.props.persons[0].name)
            fetch(
                `https://itunes.apple.com/search?term=${ARTIS_NAME}&media=music&entity=album&attribute=artistTerm&limit=50`
                ).then(function (response) {
                response.json().then((data)=>
                this.props.getartist(data.results)  //problems
                // console.log(data.results)
                );
                });

    }
     

    render() {
        return (
            <div className="count-container">
            <br/>
            <ul >
                {
                    this.props.artist.map((c)=>{
                        return <li key={c.id}>the company name is {c.artistId}</li>})
                }
                
            </ul>
     
            </div>
        )
    }
}

export default connect(state=>({
    artist:state.artist,
    persons:state.persons
}),{getartist})(Count)