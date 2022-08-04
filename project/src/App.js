import './css/basic.css';
import './css/main.css';

import { BrouserRouter, Routers, Router } from 'react-router-dom';

import Nav from './doc/Nav';

import Section01 from './doc/Section01';
import Section02 from './doc/Section02';
import Section03 from './doc/Section03';

const App = () => {
  return (
    <>
    <Nav />
    <Section01 />
    <Section02 />
    <Section03 />
    </>
  )
}

export default App;