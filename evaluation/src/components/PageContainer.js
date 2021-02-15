import React, { useEffect } from 'react'
import './PageContainer.css'
import { connect } from 'react-redux'
import { AddAlbums } from '../actions/actions'
import { getTodos } from '../API/apis'
import './PageContainer.css'

function PageContainer(props) {
    const { state, Add_Albums } = props

    let currentPost = state.albums
    useEffect(() => {


        getTodos(state.keyword).then(res => {
            console.log(res.results)
            Add_Albums(res.results)
        })

    }, [])



    console.log(currentPost, 'in PCOntainer');





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
    Add_Albums: (Albums) => dispatch(AddAlbums(Albums)),

})

export default connect(mapStateToProps, mapDispatchToProps)(PageContainer);
