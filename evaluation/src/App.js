import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import PageContainer from './components/PageContainer'
import React from 'react'
import { connect } from 'react-redux'
import { ChangeKeyword, AddAlbums } from './actions/actions'
import { useHistory } from 'react-router-dom'
import { getTodos } from './API/apis'

function App(props) {


  let history = useHistory();
  const { state, Add_Albums } = props

  const handleChange = (e) => {

    // console.log(e.target.value, 'in handlerApp');
    props.ChangeKW(e.target.value)

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // use history.push('/some/path') here
    getTodos(state.keyword).then(res => {
      console.log(res.results)
      Add_Albums(res.results)
      let trackgoback = history.location.search.slice(7)
      props.ChangeKW(trackgoback)
    })



    history.push(
      {
        pathname: '/albumlist',
        search: '?query=' + `${state.keyword}`,  // query string
        state: {  // location state
          update: true,
        },


      })
  }
  console.log('state', props.state);


  return (


    <div className="App">
      {/* Nav */}
      <nav className="nav container">

        {/* Input */}
        <div className="container" id="searchBar" >
          <form onSubmit={handleSubmit}>
            <div className="ui icon input">
              {/* input */}
              <input type="text" placeholder="Search user by name..."
                value={state.keyword/* keyword */}
                onChange={e => handleChange(e)}
              />
              {/* icon */}

              <i
                onClick={handleSubmit}
                aria-hidden="true" className="search circular link icon"></i>
            </div>
          </form>
        </div>
      </nav>
      <div>

        <Switch>
          <Route path="/albumlist" render={(props) => <PageContainer {...props} />} />
        </Switch>

      </div>


    </div>
  );
}


const mapStateToProps = state => ({ state: state })
const mapDispatchToProps = dispatch => ({
  ChangeKW: (keyword) => dispatch(ChangeKeyword(keyword)),
  Add_Albums: (Albums) => dispatch(AddAlbums(Albums)),



})

export default connect(mapStateToProps, mapDispatchToProps)(App);

