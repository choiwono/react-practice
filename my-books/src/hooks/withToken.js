import React from 'react';

// Hoc 패턴
export default function withToken(Component) {
    
    const NewComponent = (props) => {
        const token = localStorage.getItem('token');
        return (
            <Component {...props} token={token} />
        );
    };

    NewComponent.displayName = `withToken(${Component.displayName})`;

    return NewComponent;
}