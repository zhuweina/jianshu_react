import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Write extends PureComponent {
  render() {
    const { login } = this.props
    if (!login) {
      return <Redirect to={'/login'} />
    } else {
      return <div>写文章</div>
    }
  }
}

const mapState = state => ({
  login: state.getIn(['login', 'login'])
})

const mapDispatch = dispatch => ({})

export default connect(
  mapState,
  mapDispatch
)(Write)
