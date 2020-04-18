import React, { useEffect, createRef } from 'react';
import { Row, Col } from 'antd';
import { Button, Input, message } from 'antd';
import styles from './Signin.module.css';

class Signin extends React.Component {
state = {
    emailValue : '',
};

emailRef = createRef();
passwordRef = createRef();

click = () => {
    const emailValue = this.emailRef.current.state.value;
    const passwordValue = this.passwordRef.current.state.value;
    console.log("clicked", this.state.emailValue, passwordValue);
}

changeEmail = (e) => {
    this.setState({
        emailValue : e.target.value,
    });
}

onFocus = (ref) => {
    ref.current.focus();
    //this.passwordInput.current.focus();
}

render() {
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
                    loading={false}
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

  //function click() {}
};

export default Signin;