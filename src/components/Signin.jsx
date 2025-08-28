function Signin() {
  return (
    <div className="login">
      <form action="">
        <h1>Login</h1>
        <div className="login-input-box">
          <input type="text" placeholder="Username" required />
        </div>
        <div className="login-password">
          <input type="text" placeholder="Password" required />
        </div>
        <div className="forgot-link">
          <a href="">Forgot password</a>
        </div>
        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
    </div>
  );
}

export default Signin;
