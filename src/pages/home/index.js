import React, { Component } from 'react'
import { HomeWrapper, HomeLeft, HomeRight } from './style'
import Topic from './components/Topic'
import Recommend from './components/Recommend'
import List from './components/List'
import Writer from './components/Writer'
import Download from './components/Download'
import { connect } from 'react-redux'
import { actionCreator } from './store'

class Home extends Component {
  componentDidMount() {
    this.props.getList()
  }

  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            className="banner-img"
            alt="banner"
            src="//upload.jianshu.io/admin_banners/web_images/4590/7f1edd154f90446a038d6ecd10bebf6e8929fbf5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
          />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Download />
          <Writer />
        </HomeRight>
      </HomeWrapper>
    )
  }
}

const mapStateToProps = state => ({
  topicList: state.get('home').get('topicList')
})

const mapDispatchToProps = dispatch => ({
  getList() {
    dispatch(actionCreator.getList())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
