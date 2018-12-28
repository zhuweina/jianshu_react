import React, { Component } from 'react'
import Header from './common/header'
import { GlobalStyle } from './style.js'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home'
import Detail from './pages/detail'

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
              <Route path="/detail" exact render={() => <Detail />} />
            </div>
          </BrowserRouter>
        </Provider>
      </div>
    )
  }
}

export default App
