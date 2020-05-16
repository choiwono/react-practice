import React, { useEffect, createRef, useState } from 'react';
import { Row, Col } from 'antd';
import { Button, Input, message } from 'antd';
import styles from './Signin.module.css';
import axios from 'axios'
import { withRouter } from 'react-router-dom';

const Signin = () => {

    const emailRef = createRef();
    const passwordRef = createRef();

    async function click() {
        const email = this.emailRef.current.state.value;
        const password = this.passwordRef.current.state.value;

        const [loading, setLoading] = useState(false);

        setLoading(true)
        try {
            await this.sleep(3000)
            let response = await axios.post('https://api.marktube.tv/v1/me', {
                email,
                password,
            });
            setLoading(false)

            localStorage.setItem('token', response.data.token);
            this.props.history.push('/');
        
        } catch(error) {
            setLoading(false)
            message.error('로그인에 실패함');
        }
    }

    changeEmail = (e) => {
        this.setState({
            emailValue : e.target.value,
        });
    }

    function onFocus(ref){
        ref.current.focus();
    }

    function sleep(ms){
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, ms)
        });
    }

    return (
        <form>
        <Row align="middle" className={styles.signin_row}>
            <Col span={24}>
            <Row className={styles.signin_contents}>
                <Col span={12}>
                <img
                    src="./bg_signin.png"
                    alt="Signin"
                    className={styles.signin_bg}
                />
                </Col>
                <Col span={12}>
                <div className={styles.signin_title}>My Books</div>
                <div className={styles.signin_subtitle}>
                    Please Note Your Opinion
                </div>
                <div className={styles.signin_underline} />
                <div className={styles.email_title}>
                    Email
                    <span className={styles.required}> *</span>
                </div>
                <div className={styles.input_area}>
                    <Input
                    placeholder="Email"
                    autoComplete="email"
                    name="email"
                    className={styles.input}
                    defaultValue={this.state.emailValue}
                    onChange={this.changeEmail}
                    ref={this.emailRef}
                    onMouseOver={() => this.onFocus(this.emailRef)}
                    />
                </div>
                <div className={styles.password_title}>
                    Password
                    <span className={styles.required}> *</span>
                </div>
                <div className={styles.input_area}>
                    <Input
                    type="password"
                    autoComplete="current-password"
                    className={styles.input}
                    ref={this.passwordRef}
                    onMouseOver={() => this.onFocus(this.passwordRef)}
                    />
                </div>
                <div className={styles.button_area}>
                    <Button
                    size="large"
                    loading={this.state.loading}
                    onClick={this.click}
                    className={styles.button}
                    >
                    Sign In
                    </Button>
                </div>
                </Col>
            </Row>
            </Col>
        </Row>
    </form>
    )
};

export default withRouter(Signin);