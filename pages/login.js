import Blog from '../src/components/blog/blog';
import Login from '../src/components/login/login';

const LoginPage = (props) => {
  return (
    <Blog title="Log in">
      <Login />
    </Blog>
  );
};

export default LoginPage;
