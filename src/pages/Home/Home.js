import React from 'react';

const Home = ({state}) => {

    return (
        <div>
            <h1>HELLO {state.user.username}</h1>
            <p>You're account create at {state.user.createdAt}</p>
        </div>

    )

};

export default Home;