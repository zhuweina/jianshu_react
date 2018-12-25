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

### 引入 Styled-Components

- 引入一个 css 文件，不仅会作用在当前的组件，会作用在所有组件，包括兄弟组件，后代组件等，这不是期望的效果，所以使用第三方的 Styled-Components 保证组件间样式的隔离
