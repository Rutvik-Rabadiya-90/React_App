import Home from './Home';
import About from './About';
import Contact from './Contact';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CounterApp from './tasks/Counter';
import ColorChanger from './tasks/ColorChanges';
import LoginForm from './tasks/LoginForm';
import LoginCompare from './tasks/LoginCompare';
import { IntroPage } from './IntroPage';
import ResetPassword from './tasks/ResetPassword';
import Map from './tasks/Map';
import TODO from './tasks/TODO';
import DisplayPassword from './tasks/DisplayPassword';

function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path='/' element={<Home/>}/>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Counter' element={<CounterApp />}/>
          <Route path='/ColorChanger' element={<ColorChanger />}/>
          <Route path='/LoginForm' element={<LoginForm />}/>
          <Route path='/LoginCompare' element={<LoginCompare />}/>
          <Route path='/IntroPage' element={<IntroPage />}/>
          <Route path='/ResetPassword' element={<ResetPassword />}/>
          <Route path='/Map' element={<Map/>}/> 
          <Route path='/TODO' element={<TODO/>}/>
          <Route path='/DisplayPassword' element={<DisplayPassword/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
