import App from './components/App'
import React from 'react'
import ReactDOM from 'react-dom'

let x = 10
console.log(x)

function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(() => {
  ReactDOM.render(
    <App />,
    document.getElementById('genesis')
  )
})
