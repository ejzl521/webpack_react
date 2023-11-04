import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// ReactDOM.render 함수 첫번째 파라미터를 두번째 파라미터에 렌더링
// App.js를 index.html에 랭더링
// React 컴포넌트를 실제 HTML 문서 내의 DOM 요소에 렌더링!
// 'root' 에 App.js 를 렌더링!!
// index.html 파일 내에서 정의된 root 요소(<div id="root"></div>)에 React 애플리케이션을 마운트!
ReactDOM.render(<App />, document.getElementById('root'));