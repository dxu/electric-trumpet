import List from './components/List'
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
    <List />,
    document.body
  )
})
