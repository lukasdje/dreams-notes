import './App.scss';

import Routes from "./router"
import { BrowserRouter } from 'react-router-dom';
// Import components

import Menu from './pages/Menu';
import Header from './pages/Header';
// import Content from './pages/Content';

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Menu />
        {/* <Content /> */}
        <Routes />
      </div>
    </BrowserRouter>
  );
}


