function SignIn() {
  <div className={classes.login}>
    <div className={classes.form}>
      <h1>Sign In</h1>
      <form>
        <input
          className={classes.topBor}
          type="tex"
          placeholder="Full Name"
        ></input>
        <input type="email" placeholder="Email"></input>
        <input type="password" placeholder="Password"></input>
        <input type="text" placeholder="Phone"></input>
        <button>SIGN UP</button>
      </form>
      <div className={classes.switch}>
        Login? <a>Click</a>
      </div>
    </div>
  </div>;
}
export default SignIn;
