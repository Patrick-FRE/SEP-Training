import React, { useEffect } from 'react'
import './PageContainer.css'
import { connect } from 'react-redux'
import { AddAlbums, ChangeKeyword } from '../actions/actions'
import { getTodos } from '../API/apis'
import './PageContainer.css'
import { useHistory } from 'react-router-dom'



function PageContainer(props) {
    const { state, Add_Albums } = props
    let history = useHistory();
    let trackgoback = history.location.search.slice(7)


    console.log(trackgoback, 'im history');
    let currentPost = state.albums

    useEffect(() => {


        getTodos(trackgoback).then(res => {
            console.log(res.results)
            Add_Albums(res.results)
        })
        props.ChangeKW(trackgoback)
    }, [])



    // console.log(currentPost, 'in PCOntainer');





    // console.log(total,'total');
    return (<div className="pagecon">
        <div className="display">
            <div id="grid">
                {
                    currentPost.length ? currentPost.map((post, idx) => {
                        return (<div className="item" key={idx}>
                            <img src={post.artworkUrl60} alt="" />
                            <h3>{post.artistName}</h3>
                        </div>)
                    }
                    ) : <div>"Not Found"</div>
                }

            </div>
        </div>



    </div>)


}

const mapStateToProps = state => ({ state: state })
const mapDispatchToProps = dispatch => ({
    ChangeKW: (keyword) => dispatch(ChangeKeyword(keyword)),

    Add_Albums: (Albums) => dispatch(AddAlbums(Albums)),

})

export default connect(mapStateToProps, mapDispatchToProps)(PageContainer);
