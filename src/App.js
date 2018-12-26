import React, { Component } from 'react'
import Header from './common/header'
import { GlobalStyle } from './style.js'
import { Provider } from 'react-redux'
import store from './store'
class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStyle />
        <Provider store={store}>
          <Header />
        </Provider>
      </div>
    )
  }
}

export default App
