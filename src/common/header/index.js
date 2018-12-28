import React, { Component } from 'react'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchItem,
  SearchInfoList
} from './style'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { actionCreators } from './store/'
import { Link } from 'react-router-dom'
import { actionCreators as loginCreator } from '../../pages/login/store'

class Header extends Component {
  getAreaList() {
    const {
      focused,
      list,
      page,
      totalPage,
      mouseIn,
      handleMouseEnter,
      handlePageChange
    } = this.props
    let showItems
    const newList = list.toJS()
    if (newList.length) {
      showItems = []
      for (let i = (page - 1) * 10; i < Math.min(page * 10, list.size); i++) {
        showItems.push(<SearchItem key={newList[i]}>{newList[i]}</SearchItem>)
      }
    } else {
      showItems = <span>暂无推荐</span>
    }
    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={() => {
            handleMouseEnter(true)
          }}
          onMouseLeave={() => {
            handleMouseEnter(false)
          }}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch
              onClick={() => {
                handlePageChange(page, totalPage, this.spinIcon)
              }}
            >
              <i
                className="iconfont spin"
                ref={icon => {
                  this.spinIcon = icon
                }}
              >
                &#xe858;
              </i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {/* 这个map是immutable的map，不是普通的map ，因为imuutable对象也提供了这样的方法*/}
            {showItems}
          </SearchInfoList>
        </SearchInfo>
      )
    }
  }
  render() {
    const {
      focused,
      handleInputFocusChange,
      recommendGot,
      login,
      logout
    } = this.props

    return (
      <HeaderWrapper>
        <Link to="/">
          <Logo />
        </Link>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          {login ? (
            <NavItem className="right" onClick={logout}>
              退出
            </NavItem>
          ) : (
            <Link to={'/login'}>
              <NavItem className="right">登陆</NavItem>
            </Link>
          )}

          <NavItem className="right">
            <i className="iconfont zoom">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition timeout={300} in={focused} classNames="slide">
              <NavSearch
                className={focused ? 'focused' : ''}
                onFocus={() => {
                  handleInputFocusChange(true, recommendGot)
                }}
                onBlur={() => {
                  handleInputFocusChange(false, recommendGot)
                }}
              />
            </CSSTransition>
            <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>
              &#xe60c;
            </i>
            {this.getAreaList()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Link to="/write">
            <Button className="writing">
              <i className="iconfont zoom">&#xe624;</i>
              写文章
            </Button>
          </Link>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    focused: state.get('header').get('focused'), //getIn????
    list: state.get('header').get('list'),
    page: state.get('header').get('page'),
    totalPage: state.get('header').get('totalPage'),
    mouseIn: state.get('header').get('mouseIn'),
    recommendGot: state.get('header').get('recommendGot'),
    login: state.get('login').get('login')
  }
}
const mapDispatchToProps = dispatch => {
  return {
    handleInputFocusChange(focused, recommendGot) {
      dispatch(actionCreators.changeSearchFocused(focused))
      if (focused) {
        !recommendGot && dispatch(actionCreators.getList())
      }
    },
    handleMouseEnter(entered) {
      dispatch(actionCreators.changeMouseEnter(entered))
    },
    handlePageChange(page, totalPage, spinIcon) {
      let originAngle = spinIcon.style.transform.replace(/[^0-9]/g, '')
      if (originAngle) {
        originAngle = parseInt(originAngle, 10)
      } else {
        originAngle = 0
      }
      spinIcon.style.transform = `rotate(${originAngle + 360}deg)`
      let newPage
      if (page < totalPage) {
        newPage = page + 1
      } else {
        newPage = 1
      }
      dispatch(actionCreators.changePage(newPage))
    },
    logout() {
      console.log(loginCreator)
      dispatch(loginCreator.changeLogin(false))
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
