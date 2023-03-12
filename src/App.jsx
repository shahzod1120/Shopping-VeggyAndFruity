import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Layout from './layout/Layout';
import { API } from './API/API'
import contextShop from './Context/context';
import Footer from './components/Footer'



const App = () => {
  const { dispatch } = contextShop()

  useEffect(() => {
    API.getProducts().then(res => {
      dispatch({ type: "DATA", payload: res.data})
    })
  }, [])

  return (
    <>
      <Navbar />
      <Layout />
      <Footer />
    </>
  );
};

export default App;