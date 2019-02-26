import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';

ReactDom.render(
  <App/>,
  document.getElementById('react-app-root')
);

// if (module.hot) {
//   module.hot.accept('./components/App', () => {
//     render(App);
//   });
