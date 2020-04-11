import React from 'react';
import styles from './Button.module.scss';
import classNames from 'classnames/bind';
import styled from 'styled-components';

const StyledButton = styled.button`
    background : transparent;
    border-radius: 3px;
    border : 2px solid palevioletred;
    color : palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em;
    font-size: 20px;
`

class Button extends React.Component {
    state = {
        isLoading: false,
    };
    render() {
        const { isLoading } = this.state;
        
        return ( 
                <StyledButton 
                    {...this.props} 
                    onClick={this.click}
                />
        )
    }
    
    click = () => {
        console.log("작동");

        this.setState({
            isloading : true,
        });

        setTimeout(() => {
            this.setState({
                isLoading : false,
            })
        }, 1000)
    }
}

export default Button;