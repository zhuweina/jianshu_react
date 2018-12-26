###该项目的框架/库清单

- create-react-app
- Styled-Components
- react-transition-group
- redux-devtools-extension
- immutable.js
- redux-immutable
- redux-thunk
- axios

### 安装 create-react-app

```
npm install -g create-react-app
create-react-app jianshu-react
```

或者

```
npx create-react-app jianshu-react
```

### 启动

```
yarn start
```

或者

```
npm run start
```

### 使用的第三方框架

#### Styled-Components

- 引入一个 css 文件，不仅会作用在当前的组件，会作用在所有组件，包括兄弟组件，后代组件等，这不是期望的效果，所以使用第三方的 Styled-Components 保证组件间样式的隔离
- 全局样式，使用`Styled-Components`提供的`createGlobalStyle`方法

```
import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`
  body {
    ...
  }
  ...
`
```

创建全局样式后，需要把全局样式当作第一个组件

```
import { GlobalStyle } from './style.js'
ReactDOM.render(
  <Fragment>
    <GlobalStyle />
    <App />
  </Fragment>,
  document.getElementById('root')
)

```

- 为什么要使用 iconfont？使用图片不行吗

#### react-transition-group

1. 创建 store 文件夹，并在 store 文件夹下创建 index.js，在这个 index.jss 文件里创建 store 实例

```
import { createStore } from 'redux'
const store = createStore(reducer)
export default store
```

2. createStore 方法需要传入一个 reducer，因此再创建一个 reducer.js

```
export default (state, action) => {
  ...
  return state
}

```

3. 从 2 又看出需要 action，因此再创建一个 actionCreator.js,为统一管理 action 的 type，创建一个 actionTypes.js
4. 在入口组件 App.js 中引入 react-redux，并以 Provider 包裹想要获取 store 的组件

```
import { Provider } from 'react-redux'
<Provider store={store}>
   <Header />
</Provider>
```

5. 在 Header 组件中做连接

```
import { connect } from 'react-redux'
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = dispatch => {
  return () => {}
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
```

6. Header 组件最终会变成无状态组件，可以写成函数组件

#### redux 调试工具 redux-devtools-extension

在 chrome 应用商店中安装好 redux-devtools，在 store 文件夹下的 index.js 文件中添加如下代码

```
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

const enhancer = composeEnhancers(applyMiddleware())
const store = createStore(reducer, enhancer)
export default store
```

#### immutable.js

redux 中 state 只可以被直接使用，不能被直接修改，为了防止 state 被误改，引入 immutable.js
immutable 对象的 set 方法，是返回了一个新的数据，而不是对原数据的更改
安装 immutable 之后在 reducer.js 中编写如下代码

```
import { fromJS } from 'immutable'
const defaultState = fromJS({
  focused: false
})
export default (state = defaultState, action) => {
  if (action.type === actionTypes.CHANGE_SEARCH_FOCUSED) {
    return state.set('focused', action.value)
  }
  return state
}
```

- 使用了 immutable 之后，修改要使用 set 方法，获取要使用 get 方法，不能用.来获取

#### redux-immutable

为了使全局的 state 也变成 immutable 对象，reducer.js 中的 combineReducers 不从 redux 中引入，改为从 redux-immutable 中引入

```
import { combineReducers } from 'redux-immutable'
```

#### redux-thunk

使得 action 可以接收函数，简单易用

#### axios

发送 ajax 请求，支持 async

### 拆分 reducer，并用 combineReducers 整合后导出

防止 reducer.js 越来约庞大和不可维护

```
import { combineReducers } from 'redux'
import headerReducer from '../common/header/store/reducer'

export default combineReducers({
  header: headerReducer
})
```
