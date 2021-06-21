import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';

class App2 extends React.Component {
  constructor(){
    super()
  }

  render(){
    return (
      <div>
      <NavBar/>
      <Switch>
        <Route exact path='/' >
          <Home say={'Hello'} />
        </Route>
        <Route path='/about' render={()=><About shy={'learning react router'} />} />
        <Route path='/contact' children={<Contact artem={'is sleeping'}/>} />
      </Switch>
      </div>
    )
  }
}
export default App2
