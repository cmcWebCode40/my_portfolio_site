import React from 'react';
import './App.css';
import Onboarding from "./Components/Routes/Onboarding/OnboardingRouter";
import Navbar from './Components/NavBar/Navbar';
import WebPages from "./Components/Routes/WebPageRoutes/WebPageRoutes"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Onboarding />
      <WebPages />
    </div>
  );
}

export default App;
