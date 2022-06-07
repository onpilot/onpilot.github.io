import './../styles/App.css';
import Nav from './Nav';
import ThemeSwitcher from './ThemeSwitcher';
import Hero from './Hero';
import Footer from './Footer';

function App() {
  return (
    <div className='App'>
      <Nav />
      <ThemeSwitcher />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
