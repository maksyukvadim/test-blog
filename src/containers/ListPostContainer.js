import React from 'react'
import { connect } from 'react-redux'
import { compose, withProps, lifecycle } from 'recompose'
import { getPosts, setQuerySearch } from '../actions'
import ListPosts from '../components/list-posts/ListPists'
import Search from '../components/search/Search'

import { searchPostsByQuery } from '../utils'

const ListPostContainer = ({ setQuerySearch, posts, history }) => (
  <React.Fragment>
    <Search setQuerySearch={setQuerySearch} />
    <ListPosts posts={posts} history={history} />
  </React.Fragment>
)

const mapState = ({ posts }) => ({
  ...posts,
})

const dispatchState = dispatch => ({
  getPosts: () => dispatch(getPosts()),
  setQuerySearch: q => dispatch(setQuerySearch(q)),
})

const enhance = compose(
  connect(
    mapState,
    dispatchState
  ),
  lifecycle({
    componentDidMount() {
      this.props.getPosts()
    },
  }),
  withProps(({ posts, querySearch }) => ({
    posts: searchPostsByQuery(posts, querySearch),
    querySearch,
  }))
)

export default enhance(ListPostContainer)
