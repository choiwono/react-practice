import React from 'react'
import { Redirect } from 'react-router-dom'
import withToken from '../hooks/withToken'

const Home = ({ token, history }) => {
    if(token !== null) {
        return <Redirect to="/signin" />
    }
    return (
        <div>
            <button onClick={click}>로그아웃</button>
        </div>
    )

    function click() {
        localStorage.removeItem('token');
        history.push('/');
    }
}

export default withToken(Home);