import React, { PureComponent } from 'react'
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style'
import Topic from './components/Topic'
import Recommend from './components/Recommend'
import List from './components/List'
import Writer from './components/Writer'
import Download from './components/Download'
import { connect } from 'react-redux'
import { actionCreator } from './store'

class Home extends PureComponent {
  //PureComponent在底层内置了shouldComponentUpdate，所以不用再自己写shouldComponentUpdate了
  //但是使用PureComponent一定要使用immutablejs，否则可能会有坑
  //如果不使用immutablejs，就继续使用Component，自己写shouldComponentUpdate即可
  componentDidMount() {
    this.props.getList()
    this.bindEvents()
  }

  componentWillUnmount() {
    this.removeEvents()
  }

  handleScrollTop() {
    window.scrollTo(0, 0)
  }

  bindEvents() {
    window.addEventListener('scroll', () => {
      this.props.changeScrollShow(this.props.showScroll)
    })
  }
  removeEvents() {
    window.removeEventListener('scroll', () => {
      this.props.changeScrollShow(this.props.showScroll)
    })
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
        {this.props.showScroll ? (
          <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop>
        ) : null}
      </HomeWrapper>
    )
  }
}

const mapStateToProps = state => ({
  showScroll: state.get('home').get('showScroll')
})

const mapDispatchToProps = dispatch => ({
  getList() {
    dispatch(actionCreator.getList())
  },
  changeScrollShow(prevScroll) {
    let nowScroll = false
    if (document.documentElement.scrollTop > 100) {
      nowScroll = true
    }
    if (prevScroll !== nowScroll) {
      dispatch(actionCreator.changeScrollShow(nowScroll))
    }
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
