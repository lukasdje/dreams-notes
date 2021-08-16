import './App.scss';

// Import components
import Logo from './pages/Logo';
import Menu from './pages/Menu';
import Header from './pages/Header';
import Content from './pages/Content';

export default function App() {
  return (
    <div className="App">
      <Logo />
      <Menu />
      <Header />
      <Content />
    </div>
  );
}


