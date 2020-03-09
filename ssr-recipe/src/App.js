import React from 'react';
import { Route } from 'react-router-dom';
import RedPage from './pages/RedPage';
import BluePage from "./pages/BluePage";
import Menu from "./components/Menu";

const App = () => {
  return (
      <div>
          <Menu />
          <hr />
          <div style={{
              width: '40%',
              height: '400px',
              float: 'left',
              background: '#eaeaea'
          }}>
              <Route path="/red" component={RedPage}/>
          </div>
          <div style={{
              width: '40%',
              height: '400px',
              float: 'left',
              background: '#eaeaea'
          }}>
              <Route path="/blue" component={BluePage}/>
          </div>



      </div>

  )
}

export default App;
