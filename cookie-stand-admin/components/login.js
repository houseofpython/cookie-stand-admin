
import { useAuth } from 'react-use-auth';

function Login() {
  const { login } = useAuth();

  const handleLogin = () => {
    login();
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
