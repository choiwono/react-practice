import React from 'react';
import { Button } from 'antd';
import { HeartOutlined } from '@ant-design/icons';

export default class LoadingButton extends React.Component {
    state = {
        loading: false,
    }

    startLoading = () => {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false });
        }, 2000)
    }

    render() {
        const { loading } = this.state
        return (
            <Button 
                type="primary"
                size="large"
                icon={<HeartOutlined />}
                loading={loading}
                onClick={this.startLoading}
                style={{
                    width: 100,
                }}
            >버튼</Button>
        )
    }
}