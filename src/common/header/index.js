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

class Header extends Component {
  getAreaList() {
    if (this.props.focused) {
      return (
        <SearchInfo>
          <SearchInfoTitle>
            热门搜索<SearchInfoSwitch>换一批</SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {/* 这个map是immutable的map，不是普通的map ，因为imuutable对象也提供了这样的方法*/}
            {this.props.list.map((item, index) => (
              <SearchItem key={index}>{item}</SearchItem>
            ))}
          </SearchInfoList>
        </SearchInfo>
      )
    }
  }
  render() {
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登陆</NavItem>
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              timeout={300}
              in={this.props.focused}
              classNames="slide"
            >
              <NavSearch
                className={this.props.focused ? 'focused' : ''}
                onFocus={() => {
                  this.props.handleInputFocusChange(true)
                }}
                onBlur={() => {
                  this.props.handleInputFocusChange(false)
                }}
              />
            </CSSTransition>
            <i className={this.props.focused ? 'focused iconfont' : 'iconfont'}>
              &#xe60c;
            </i>
            {this.getAreaList()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="writing">
            <i className="iconfont">&#xe624;</i>
            写文章
          </Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    focused: state.getIn(['header', 'focesed']),
    list: state.get('header').get('list')
  }
}
const mapDispatchToProps = dispatch => {
  return {
    handleInputFocusChange(focused) {
      dispatch(actionCreators.changeSearchFocused(focused))
      if (focused) {
        dispatch(actionCreators.getList())
      }
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
