import React, { Component } from 'react'
import { Route, Switch} from 'react-router-dom'
import { Home, BookList, BookDetail, CreateBookForm}  from './containers/'
import './App.css'


export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/BookList' component={BookList}/>
          <Route path='/BookDetail' component={BookDetail}/>
          <Route path='/CreateBook' component={CreateBookForm}/>
        </Switch>
      </div>
    )
  }
}
