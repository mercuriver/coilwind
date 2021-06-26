import React from 'react';

const App = () => {
  return (
    <>
      <div>Wello, Horld!</div>
      <h1>{JSON.stringify(process)}</h1>
      <h2>{process.env.DB_PASS}</h2>
      <h2>{process.env.DB_HOST}</h2>
      <h2>{process.env.S3_API}</h2>
    </>
  );
};

export default App;