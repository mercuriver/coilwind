import React from 'react';

const App = () => {
  return (
    <>
      <div>Wello, Horld!</div>
      <h1>{JSON.stringify(process)}</h1>
      <h1>{JSON.stringify(process.env)}</h1>
    </>
  );
};

export default App;