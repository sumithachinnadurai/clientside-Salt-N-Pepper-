
import React from 'react';
import './App.css';
import Header from './components/Header';
import TableInput from './components/TableInput';
import PopularDishes from './components/PopularDishes';
import Footer from './components/Footer';
import WelcomeSection from './components/WelcomeSection';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <WelcomeSection />
        <TableInput />
        <PopularDishes />
      </main>
      <Footer />
    </div>
  );
}

export default App;

/*
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useHistory } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import TableInput from './components/TableInput';
import PopularDishes from './components/PopularDishes';
import MenuPage from './components/MenuPage'; // Create this component for the menu

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={TableInput} />
          <Route path="/menu" component={MenuPage} />
        </Switch>
        <PopularDishes />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
*/
/*
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PopularDishes from './components/PopularDishes';
//import MenuPage from './components/MenuPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PopularDishes />} />
         <Route path="/menu" element={<MenuPage />} /> 
      </Routes>
    </Router>
  );
};

export default App;
*/