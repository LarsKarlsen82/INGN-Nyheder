import React from 'react';

const Login = () => {
    const handleLogin = () => {
        // Open Contentful login page in a new window
        window.open('https://be.contentful.com/login', '_blank');
    };

    return (
        <div className="container">
            <h1 className='text-2xl font-bold'>Login</h1>
            <br />
            <button onClick={handleLogin} className="btn btn-primary" style={{ borderRadius: '5px', border: '2px solid blue', padding: '5px 10px' }}>Login to Contentful</button>
            <br />
            <br />
            <p> You have to have granted permission to edit, create or delete articles from your company.</p>
            <p>Contact your web developer for more <a href="mailto:lars.karlsen82@gmail.com" style={{ color: 'blue' }}>information</a></p>
        </div>
    );
};

export default Login;
