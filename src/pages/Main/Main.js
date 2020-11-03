import React from 'react';
import {Button, Row, Col} from "antd";
import {useHistory} from "react-router-dom";
import neo from '../../assets/img/red_blue_button.jpg'
import {URLS} from "../../constants/constants";

const Main = () => {
    const history = useHistory()
    return (
        <Row type="flex" align="middle" justify="center">
            <Col md={{span: 24, offset: 0}}>
                <h1>Welcome in our application.</h1>
                <p>You have 2 ways.
                    We offer you a red button and a blue one.</p>
                <p><strong> There will be no turning back! </strong></p>
                <p>Make your choice!</p>
                <p>
                    <Button
                        onClick={() => history.push(URLS.login)}
                        className="mr-5 mb-5"
                        type="primary">
                        Login
                    </Button>
                    <Button
                        onClick={() => history.push(URLS.register)}
                        className="mr-5 mb-5"
                        type="danger">
                        Register
                    </Button>
                </p>
                <img className="home-page_image" src={neo} alt=""/>
            </Col>
        </Row>
    );
};

export default Main;