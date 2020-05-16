import React from 'react'
import SignIn from '../components/SignIn'
import { Redirect } from 'react-router-dom'
import withToken from '../hooks/withToken'

const SignPage = ({ token }) => {
    if(token !== null) {
        return <Redirect to="/" />
    }
    return (
        <SignIn />
    )
}

export default withToken(SignPage);