import React from 'react';
import Routes from './pages/routes';
import { Layout } from 'antd';
import MainHeader from './components/MainHeader';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

const { Content } = Layout;

function App() {
  const [state, setState] = React.useState({
    isLogged: false,
  });
  const applicationState = { state, setState };

  return (
    <Router>
      <div className="App">
        <MainHeader {...applicationState} />
        <Layout>
          <Content className="content-layout mt-20">
            <div className="site-layout-content">
              <Routes applicationState={applicationState} />
            </div>
          </Content>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
