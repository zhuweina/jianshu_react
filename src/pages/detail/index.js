import React, { PureComponent } from 'react'
import { DetailWrapper, Header, Content } from './style'
import { connect } from 'react-redux'
import { actionCreator } from './store'
import { withRouter } from 'react-router-dom'

class Detail extends PureComponent {
  componentDidMount() {
    this.props.getDetail()
  }
  render() {
    console.log(this.props)
    return (
      <DetailWrapper>
        <Header>{this.props.title}</Header>
        <Content dangerouslySetInnerHTML={{ __html: this.props.content }} />
      </DetailWrapper>
    )
  }
}

const mapState = state => {
  return {
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
  }
}

const mapDispatch = dispatch => ({
  getDetail() {
    dispatch(actionCreator.getDetail())
  }
})

export default connect(
  mapState,
  mapDispatch
)(withRouter(Detail))
//必须使用withRouter才能获取到路由信息，否则只有title，content，getDetail！！！！
