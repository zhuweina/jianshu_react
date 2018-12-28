import React, { PureComponent } from 'react'
import { ListWrapper, ListItem, ListInfo, LoadMore } from '../style'
import { connect } from 'react-redux'
import { actionCreator } from '../store'
import { Link } from 'react-router-dom'
class List extends PureComponent {
  render() {
    const { list, getMoreList, page } = this.props
    return (
      <ListWrapper>
        <div>
          {list.map(item => (
            <Link key={item.get('id')} to="/detail">
              <ListItem>
                <ListInfo>
                  <h3 className="title">{item.get('title')}</h3>
                  <p className="desc">{item.get('desc')}</p>
                </ListInfo>
                <img src={item.get('imgUrl')} alt="aa" />
              </ListItem>
            </Link>
          ))}
          <LoadMore
            onClick={() => {
              getMoreList(page)
            }}
          >
            更多内容
          </LoadMore>
        </div>
      </ListWrapper>
    )
  }
}

const mapState = state => ({
  list: state.getIn(['home', 'acticleList']),
  page: state.getIn(['home', 'articlePage'])
})

const mapDispatch = dispatch => ({
  getMoreList(page) {
    dispatch(actionCreator.getMoreList(page))
  }
})

export default connect(
  mapState,
  mapDispatch
)(List)
