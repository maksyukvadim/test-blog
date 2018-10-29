import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Loadable from 'react-loadable';
import styled from 'styled-components'

import Spiner from '../components/spiner/Spiner'

const WrapList = styled.div`
  width: 80%;
  min-height: 100vh;
  margin: 0 auto;
`

const ListPostContainer = Loadable({
    loader: () => import('./ListPostContainer'),
    loading: () => <Spiner />
});

const PostContainer = Loadable({
    loader: () => import('./PostContainer'),
    loading: () => <Spiner />
});

class App extends Component {
  render() {
    return (
        <Router>
            <WrapList>
                <Route exact path="/" component={ListPostContainer} />
                <Route path="/post/:id" component={PostContainer} />
            </WrapList>
        </Router>
    );
  }
}

export default App;
