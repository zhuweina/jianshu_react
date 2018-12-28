import React, { PureComponent } from 'react'
import { TopicWrapper, TopicItem } from '../style'
import { connect } from 'react-redux'
class Topic extends PureComponent {
  render() {
    const { topicList } = this.props
    return (
      <TopicWrapper>
        {topicList.map((item, index) => (
          <TopicItem key={item.get('id')}>
            <img src={item.get('imgUrl')} alt={item.get('id')} />
            {item.get('title')}
          </TopicItem>
        ))}
      </TopicWrapper>
    )
  }
}
const mapStateToProps = state => ({
  topicList: state.getIn(['home', 'topicList'])
})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Topic)
