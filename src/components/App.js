import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import LoadingBar from 'react-redux-loading'
import NewTweet from './NewTweet'
import TweetPage from './TweetPage'

class App extends Component {
  componentDidMount() {
     this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <div>
        <LoadingBar/>
        {/* this is a check to make sure that initial data was loaded before rendering*/ }
        {this.props.loading === true
          ? null
          : <TweetPage match={{params: {id: '5c9qojr2d1738zlx09afby'}}}/>}
      </div>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)