import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import LoginImg from '../assets/LoginImg.png';
import GoogleSignInButton from '../components/GoogleSignInButton';
import './LoginPage.css';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5001';

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      const response = await fetch(`${API_BASE_URL}/api/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), password }),
      });
      const result = await response.json();

      if (!response.ok) {
        setError(result.error || 'Unable to log in. Please try again.');
        return;
      }

      setError('');
      navigate('/');
    } catch {
      setError('Could not reach the login service. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <div className="login-container">
       {/* Left side */}
        <div className = "login-left">
             <img src={LoginImg} alt="Login illustration" className="left-image" />
        </div>


        {/* Right side */}
        <div className = "login-right">
          <img src={Logo} alt="Prygma NextGen" className="login-logo" />
            <div className="heading"><h2>Sign In</h2>
            <p><span className="text-secondary">Or</span> <Link to="/register">Create a new account</Link></p>
            </div>
            <GoogleSignInButton mode="login" onSuccess={() => navigate('/')} />
            <div className="auth-divider" aria-hidden="true">or sign in with email</div>

            <form onSubmit = {handleSubmit}>
                <input type ="email"
                         placeholder = "Enter email"
                         value ={email}
                         onChange = {(e) => { setEmail(e.target.value); setError(''); }}
                         required
                         />
                <input type ="password"
                        placeholder = "Enter password"
                        value ={password}
                        onChange = {(e) => { setPassword(e.target.value); setError(''); }}
                        required
                        />
                        {error && <p className="error">{error}</p>}
                
                <div className = "options">
                    <label>
                        <input type = "checkbox"/>Remember me
                     </label>
                     <Link to="/forgot-password">Forgot your password</Link>
                </div>    
                <button type="submit" className ="sibmit-btn" disabled={isSubmitting}>
                  {isSubmitting ? 'Signing in…' : 'Sign In'}
                </button>
            </form>
            </div>

    </div>

  );
};
