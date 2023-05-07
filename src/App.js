import './App.css';
import * as React from 'react';
import { Home} from './components/Home/Home';
import { School } from './components/School/School';
import { Cpu } from './components/Cpu/Cpu';
import { Formation } from './components/Formation/Formation';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
       <Home/>
       <Cpu/>
       <School path to = "/school"/>
       <Formation/>
       <Projects/>
       <Contact/>
    </div>
  );
}

export default App;
