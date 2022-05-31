import React, { Fragment } from 'react';
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom';
import {publicRoutes} from '~/routes'
import {DefaultLayout} from '~/components/Layout';

function App() {
  return (
    <Router>
      <div className="App">
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>

            <li>
              <Link to='/following'>Following</Link>
            </li>
          </ul>

          <Routes>
            {publicRoutes.map((route,index) => {
              const Layout = route.layout === null ? Fragment : DefaultLayout;
              const Page = route.component;
              return <Route key={index} path={route.path} element={
                <Layout>
                  <Page/>
                </Layout>}/>
            })}            
          </Routes>

        </div>
    </Router>
    
  );
}

export default App;
