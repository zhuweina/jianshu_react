import styled from 'styled-components'
import logoPic from '../../static/logo.png'
export const HeaderWrapper = styled.div`
  width: 100%;
  position: relative;
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
`
export const Logo = styled.a.attrs({ href: '/' })`
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 56px;
  background: url(${logoPic});
  background-size: contain;
`
export const Nav = styled.div`
  width: 960px;
  padding-right: 70px;
  height: 100%;
  margin: 0 auto;
  box-sizing: border-box;
`

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
  }
  &.active {
    color: #ea6f5a;
  }
`

export const NavSearch = styled.input.attrs({ placeholder: '搜索' })`
  width: 160px;
  height: 38px;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  margin-top: 9px;
  padding: 0 35px 0 20px;
  box-sizing: border-box;
  font-size: 14px;
  margin-left: 20px;
  color: #666;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 240px;
  }
  &.slide-enter {
    width: 160px;
  }
  &.slide-enter-active {
    width: 240px;
    transition: all 0.3s ease-in;
  }
  &.slide-enter-done {
    width: 240px;
  }
  &.slide-exit {
    width: 240px;
  }
  &.slide-exit-active {
    width: 160px;
    transition: all 0.3s ease-in;
  }
  &.slide-exit-done {
    width: 160px;
  }
`
export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 56px;
  width: 240px;
  padding: 0 20px;
  background: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
`
export const SearchInfoTitle = styled.div`
  margin: 20px 0 15px 0;
  width: 240px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
  overflow: hidden;
`
export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
`
export const SearchItem = styled.a`
  display: block;
  float: left;
  padding: 0 5px;
  line-height: 20px;
  color: #787878;
  border: 1px solid #ddd;
  border-radius: 3px;
  font-size: 14px;
  margin-right: 10px;
  margin-bottom: 10px;
`
export const SearchInfoList = styled.div`
  overflow: hidden;
`

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`

export const Button = styled.div`
  float: right;
  margin-top: 9px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  margin-right: 15px;
  padding: 0 20px;
  font-size: 14px;
  &.reg {
    color: #ec6149;
  }
  &.writing {
    color: #fff;
    background: #ec6149;
  }
`
export const SearchWrapper = styled.div`
  float: left;
  position: relative;
  .iconfont {
    position: absolute;
    right: 5px;
    bottom: 4px;
    width: 30px;
    line-height: 30px;
    font-size: 24px;
    border-radius: 50%;
    text-align: center;
    &.focused {
      background: #777;
      color: #fff;
    }
  }
`
