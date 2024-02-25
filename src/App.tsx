import React from 'react';
import NavBar from './components/navbar';
import Layout from './components/Layout';
import PasswordReset from './pages/passwordReset/passwordReset';
import './App.css'


const App: React.FC = () => {
  return <>
    <NavBar />
    <Layout>
      <PasswordReset />
    </Layout>
  </>

};

export default App;
