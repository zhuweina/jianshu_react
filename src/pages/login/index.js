import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { LoginWrapper, LoginBox, Input, Button } from './style'
import { actionCreators } from './store'
import { Redirect } from 'react-router-dom'

class Login extends PureComponent {
  componentDidMount() {}
  render() {
    const { handleClick, login } = this.props
    if (!login) {
      return (
        <LoginWrapper>
          <LoginBox>
            {/* 因为组件都是styled-component，所以使用ref的话，获取不到真实的DOM，styled-component提供了innerRef获取真实额DOM */}
            <Input
              placeholder="account"
              ref={input => {
                this.account = input
              }}
            />
            <Input
              placeholder="password"
              type="password"
              ref={input => {
                this.password = input
              }}
            />
            <Button
              onClick={() => {
                handleClick(this.account, this.password)
              }}
            >
              登陆
            </Button>
          </LoginBox>
        </LoginWrapper>
      )
    } else {
      return <Redirect to={'/'} />
    }
  }
}

const mapState = state => ({
  login: state.getIn(['login', 'login'])
})

const mapDispatch = dispatch => ({
  handleClick(accDom, passDom) {
    dispatch(actionCreators.login(accDom.vale, passDom.value))
  }
})

export default connect(
  mapState,
  mapDispatch
)(Login)
