// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './LoginPage.css';
// import users from './users';

// const LoginPage = () => {

//     const navigate = useNavigate();
//     const [cred, setCred] = useState({});
//     const [error, setError] = useState('');

//     const handleLogin = (e) => {
//         const credentialsMatched = users.find((item) => {
//             return item.email === cred?.email && item?.password === cred?.password;
//         });
//         if(credentialsMatched) {
//             localStorage?.setItem("authToken", "dummyToken");
//             navigate("/");
//         }
//         else {
//             setError('Invalid email or password');
//         }
//     }

//     return (
//         <div className="page-container">
//             <div className="login-container">
//                 <h1>Login Page</h1>
//                 <form onSubmit={handleLogin}>
//                     <label htmlFor="email"></label>
//                     <input
//                         type="text"
//                         placeholder="Email"
//                         value={cred?.email}
//                         onChange={(e) => setCred(e.target.value)}
//                     />
//                     <label htmlFor="password"></label>
//                     <input
//                         type="password"
//                         placeholder="Password"
//                         value={cred?.password}
//                         onChange={(e) => setCred(e.target.value)}
//                     />
//                     <button type="submit">Login</button>
//                 </form>
//                 {error && <p className="error-message">{error}</p>}
//             </div>
//         </div>
//     );
// };

// export default LoginPage;

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import { loginSuccess, loginFailure } from '../actions';
import users from './users'; // Import the users.js file

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated, error } = useSelector((state) => state.login);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();

    const user = users.find((user) => user.email === email && user.password === password);

    if (user) {
      dispatch(loginSuccess());
      localStorage.setItem('authToken', 'dummyToken');
      navigate('/');
    } else {
      dispatch(loginFailure('Invalid email or password'));
    }
  };

  return (
    <div className="page-container">
      <div className="login-container">
        <h1>Login Page</h1>
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default LoginPage;


