import React from 'react';
import { useHistory } from 'react-router-dom';
import { URLS } from '../utils/constants';
import CustomButton from '../components/CustomButton';

const Home = () => {
    const history = useHistory();
    return (
        <>
            <h1>Welcome in our application.</h1>
            <p>You have 2 ways.
                We offer you a red button and a blue one.</p>
            <p>Make your choice!</p>
            <p>
                <CustomButton
                    onClick={() => history.push(URLS.login)}
                    className="mr-5 mb-5"
                >
                    Sign in
                </CustomButton>
                <CustomButton
                    onClick={() => history.push(URLS.register)}
                    className="mr-5 mb-5"
                    type="danger">
                    Sign up
                </CustomButton>
            </p>
            <img
                className="home-page_image"
                src="https://www.film.ru/sites/default/files/styles/thumb_1024x450/public/filefield_paths/maxresdefault_1_47.jpg"
                alt=""
            />
        </>
    );
};

export default Home;