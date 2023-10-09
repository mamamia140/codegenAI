import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
function App() {
  return (
    <BrowserRouter>
      <Home></Home>
      <Routes><Route path="/home" component={Home}></Route>
      <Route path="/" component={Home} exact></Route></Routes>
    

    </BrowserRouter>
    
  );
}

export default App;
