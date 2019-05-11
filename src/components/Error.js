import React from 'react';

const Error = ({error}) => {
    return (
        <div className="error">{error.message}</div>
    );
}

export default Error;