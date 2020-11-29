import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.less';
// require是运行时加载，import是编译时加载
if (process.env.NODE_ENV !== 'production') require('./mock'); // 开发环境使用mock.js

ReactDOM.render(<App />, document.getElementById('root'));
