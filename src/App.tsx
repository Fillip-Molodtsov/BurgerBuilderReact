import React from 'react';
import './App.scss';
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";

const App: React.FC = () => {
  return (
      <Layout>
        <p>hello there</p>
        <BurgerBuilder/>
      </Layout>
  );
};

export default App;
