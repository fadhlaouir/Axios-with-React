import React, {
  Component
} from 'react';
import PersonList from './Components/PersonList'
import PersonInput from './Components/PersonInput'
import './App.css';

class App extends Component {
  render() {
    return (<div className="App" >
      <PersonList />
      <PersonInput />
    </div>
    );
  }
}

export default App;