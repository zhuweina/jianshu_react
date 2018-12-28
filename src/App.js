import React, { Component } from 'react'
import Header from './common/header'
import { GlobalStyle } from './style.js'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home'
import Detail from './pages/detail'
import Login from './pages/login/loadable'
import Write from './pages/write'

class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStyle />
        <Provider store={store}>
          <BrowserRouter>
            <div>
              <Header />
              <Route path="/" exact render={() => <Home />} />
              <Route path="/detail/:id" exact render={() => <Detail />} />
              <Route path="/login" exact render={() => <Login />} />
              <Route path="/write" exact render={() => <Write />} />
            </div>
          </BrowserRouter>
        </Provider>
      </div>
    )
  }
}

export default App
