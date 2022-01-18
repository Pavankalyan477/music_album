
import { Route, Switch } from 'react-router-dom';
import Album from "./components/artist/Album";
import './App.css';
import Signup from './components/artist/Signup';
import Guest from './components/Guest';
import Navbar from './components/Navbar';
import Edit from './components/artist/Edit';

function App() {
  return (
    <div className="App">
    <Switch>
      <Route exact path="/">
        <Navbar/>
        <Guest/>
      </Route>
      


      <Route exact path="/album/:id">
        <Navbar/>
       <Album/>
      
      </Route>
      <Route exact path="/signup">
        <Navbar/>
        <Signup/>
      </Route>
      <Route exact path="/edit">
        <Navbar/>
      <Edit></Edit>
      </Route>
    </Switch>
     
    </div>
  );
}

export default App;
