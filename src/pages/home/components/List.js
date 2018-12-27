import React, { Component } from 'react'
import { ListWrapper, ListItem, ListInfo } from '../style'
import { connect } from 'react-redux'
import { actionCreator } from '../store'
class List extends Component {
  render() {
    const { list } = this.props
    return (
      <ListWrapper>
        <div>
          {list.map(item => (
            <ListItem key={item.get('id')}>
              <ListInfo>
                <h3 className="title">{item.get('title')}</h3>
                <p className="desc">{item.get('desc')}</p>
              </ListInfo>
              <img src={item.get('imgUrl')} alt="aa" />
            </ListItem>
          ))}
        </div>
      </ListWrapper>
    )
  }
}

const mapState = state => ({
  list: state.getIn(['home', 'acticleList'])
})

const mapDispatch = dispatch => ({})

export default connect(
  mapState,
  mapDispatch
)(List)
