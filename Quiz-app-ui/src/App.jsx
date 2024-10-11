import React from 'react';
import Quiz from './components/Quiz'; 
import bgImage from './assets/background.jpg';

const App = () => {
  return (
    <div className="min-h-screen relative px-5 bg-black">
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-sm opacity-50"
        style={{ backgroundImage: `url(${bgImage})` }}></div>
      <div className="relative flex items-center justify-center min-h-screen">
        <Quiz />
      </div>
    </div>
  );
};

export default App;
