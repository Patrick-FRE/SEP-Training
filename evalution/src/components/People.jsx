import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import {connect} from 'react-redux'
import {addPerson} from '../redux/actions/People'
import '../style/People.css'

class People extends Component {


addPerson = () => {
    const name = this.name.value;
    const personObj ={id:nanoid(),name}
    this.props.addPerson(personObj)
    this.name.value=''

}

    render() {
        console.log(this.props)

        return (
            <div className="people-container">
                <input type="text" placeholder="keyword" ref={c=>this.name=c}/>
                <button onClick={this.addPerson}>Search</button>
                <ul>{
                    this.props.persons.map((p)=>{
                        return <li key={p.id}>name: {p.name}
                     </li>
                 
                    })
                }</ul>
                
          
                <hr/>
            </div>
        )
    }
}

export default connect(
   state=>({
       persons:state.persons,
       artist:state.artist
   }),
   {addPerson})(People)