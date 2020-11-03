import './App.css';
import React from "react";
import Routes from "./routes/routes";
import {Layout} from "antd";
import MainHeader from "./components/Header/MainHeader";
import {BrowserRouter as Router} from "react-router-dom";

const {Content} = Layout;

function App() {
    const [state, setState] = React.useState({
        isLogged: false,
    })
    const applicationState = {state, setState}

    return (
        <Router>
            <div className="App">
                <MainHeader {...applicationState}/>
                <Layout>
                    <Content className="content-layout mt-20" style={{}}>
                        <div className="site-layout-content">
                            <Routes applicationState={applicationState}/>
                        </div>
                    </Content>
                </Layout>

            </div>
        </Router>
    );
}

export default App;
