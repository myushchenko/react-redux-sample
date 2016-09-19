import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import Layout from './components/layout'
import Home from './pages/home'
import About from './pages/about'
import Todos from './pages/todos'

import store from './store'

render(<Provider store={store}>
  <Router history={hashHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={Home} />
      <Route path='about' component={About} />
      <Route path='todos' component={Todos} />
    </Route>
  </Router>
</Provider>,
window.document.getElementById('app'))
