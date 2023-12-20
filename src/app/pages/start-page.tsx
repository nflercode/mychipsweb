import React from 'react';

const StartPage: React.FC = () => {
  return (
    <div>
      <img src="/path/to/logo.png" alt="Logo" />
      <h1>Welcome to MyChipsWeb!</h1>
      <p>Get started by clicking the button below.</p>
      <button onClick={() => console.log('Button clicked!')}>Get Started</button>
    </div>
  );
};

export default StartPage;
