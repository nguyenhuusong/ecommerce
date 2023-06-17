import { useEffect, useState } from "react";
import Banner from "./helper/Banner";
import classes from "./Login.module.css";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Link, json } from "react-router-dom";
import { Form } from "react-router-dom";
import useInput from "./hooks/use-input";
import { redirect } from "react-router-dom";
import { useActionData } from "react-router-dom";

function validText(value) {
  return value.trim() !== "";
}
function validEmail(value) {
  return value.includes("@");
}
function validPassword(value) {
  return !value.includes(" ") && value.length >= 8;
}

function Login() {
  const navigate = useNavigate();
  const [inValidSigup, setInvalidSignup] = useState(null);
  const [inValidLogin, setInvalidLogin] = useState(null);
  const data = useActionData();
  useEffect(() => {
    switch (data?.message) {
      case "Invalid email address":
        setInvalidLogin(data.message);
        break;
      case "Invalid password":
        setInvalidLogin(data.message);
        break;
      case "Login":
        setInvalidLogin(null);
        navigate("/");
        break;
      case "Signup":
        setInvalidSignup(null);
        console.log("aa");

        navigate("?mode=login");
        console.log("bb");

        break;
      case "Email already exist":
        setInvalidSignup(data.message);
        break;
    }
  }, [data]);

  const [searchParam] = useSearchParams();
  const isSignUp = searchParam.get("mode") === "signup";

  const {
    inputValue: inputName,
    inputValid: nameValid,
    inValid: nameInvalid,
    inPutChangeHandler: nameChangeHandler,
    touchedHandler: nameTouchedHandler,
    reset: resetName,
  } = useInput(validText);
  const {
    inputValue: inputEmail,
    inputValid: emailValid,
    inValid: emailInvalid,
    inPutChangeHandler: emailChangeHandler,
    touchedHandler: emailTouchedHandler,
    reset: resetEmail,
  } = useInput(validEmail);
  const {
    inputValue: inputPassword,
    inputValid: passwordValid,
    inValid: passwordInvalid,
    inPutChangeHandler: passwordChangeHandler,
    touchedHandler: passwordTouchedHandler,
    reset: resetPassword,
  } = useInput(validPassword);
  const {
    inputValue: inputPhone,
    inputValid: phoneValid,
    inValid: phoneInvalid,
    inPutChangeHandler: phoneChangeHandler,
    touchedHandler: phoneTouchedHandler,
    reset: resetPhone,
  } = useInput(validText);

  useEffect(() => {
    resetName();
    resetEmail();
    resetPassword();
    resetPhone();
  }, [searchParam.get("mode")]);

  let validForm = false;
  if (isSignUp) {
    validForm = nameValid && emailValid && passwordValid && phoneValid;
  } else {
    validForm = emailValid && passwordValid;
  }

  return (
    <div className={classes.login}>
      <div className={classes.form}>
        <h1>{isSignUp ? "Sign Up" : "Sign In"}</h1>
        <ul>
          {inValidSigup && <li>{inValidSigup}</li>}
          {inValidLogin && <li>{inValidLogin}</li>}
          {nameInvalid && <li>Fill name input</li>}
          {emailInvalid && <li>Email must contain @</li>}
          {passwordInvalid && <li>Password must has 8 characters</li>}
          {phoneInvalid && <li>Fill phone input</li>}
        </ul>
        <Form method="post">
          {isSignUp && (
            <input
              className={`${classes.topBor} ${
                nameInvalid ? classes.invalid : ""
              }`}
              type="tex"
              name="name"
              value={inputName}
              onChange={nameChangeHandler}
              onBlur={nameTouchedHandler}
              placeholder="Full Name"
            ></input>
          )}
          <input
            className={`${!isSignUp ? classes.topBor : undefined} ${
              emailInvalid ? classes.invalid : ""
            }`}
            value={inputEmail}
            onChange={emailChangeHandler}
            onBlur={emailTouchedHandler}
            type="email"
            name="email"
            placeholder="Email"
          ></input>
          <input
            type="password"
            className={`${passwordInvalid ? classes.invalid : ""}`}
            value={inputPassword}
            onChange={passwordChangeHandler}
            onBlur={passwordTouchedHandler}
            name="password"
            placeholder="Password"
          ></input>
          {isSignUp && (
            <input
              type="text"
              className={`${phoneInvalid ? classes.invalid : ""}`}
              value={inputPhone}
              onChange={phoneChangeHandler}
              onBlur={phoneTouchedHandler}
              name="phone"
              placeholder="Phone"
            ></input>
          )}
          <button>SIGN UP</button>
        </Form>
        <div className={classes.switch}>
          {isSignUp ? "Login?" : "Create an account?"}{" "}
          <Link to={`?mode=${isSignUp ? "login" : "signup"}`}>
            {isSignUp ? "Click" : "Sign up"}
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Login;
export async function action({ request }) {
  const user = await localStorage.getItem("user");
  const userData = JSON.parse(user) || [];

  const searchParam = new URL(request.url).searchParams;
  const mode = searchParam.get("mode") || "login";
  const data = await request.formData();
  const formData = {
    name: data.get("name"),
    email: data.get("email"),
    password: data.get("password"),
    phone: data.get("phone"),
  };
  if (mode !== "login" && mode !== "signup") {
    throw json({ message: "Unsupported mode." }, { status: 422 });
  }
  if (mode === "login") {
    const existUser = userData.find((el) => el.email === formData.email);

    if (!existUser) {
      return { message: "Invalid email address" };
    } else if (existUser.password !== formData.password) {
      return { message: "Invalid password" };
    } else {
      localStorage.setItem("login", JSON.stringify(existUser));
      return { message: "Login" };
    }
  }
  if (mode === "signup") {
    const existUser = userData.find((el) => el.email === formData.email);
    if (!existUser) {
      userData.push(formData);
      localStorage.setItem("user", JSON.stringify(userData));
      return { message: "Signup" };
    } else {
      return { message: "Email already exist" };
    }
  }
  return null;
}
