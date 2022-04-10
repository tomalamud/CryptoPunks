import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom'
import Home from './views/home' 

function App() {
  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.request({ method: 'eth_requestAccounts'}).then(accounts => console.log(accounts));
    }

  }, []);
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>
    </>
  );
}

export default App;
