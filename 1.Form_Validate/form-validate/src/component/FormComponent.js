import "./FormComponent.css";
import { useState } from "react";
const FormComponent = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errorUserName, setErrorUserName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  const [usernameColor, setUsernameColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");
  const [confirmPasswordColor, setConfirmPasswordColor] = useState("");

  const validateForm = (e) => {
    e.preventDefault();
    if (username.length > 8) {
      setErrorUserName("");
      setUsernameColor("green");
    } else {
      setErrorUserName("Username must not less than 8 characters.");
      setUsernameColor("red");
    }

    if (email.includes("@")) {
      setErrorEmail("");
      setEmailColor("green");
    } else {
      setErrorEmail("E-mail format not correct.");
      setEmailColor("red");
    }

    if (password.length > 8) {
      setErrorPassword("");
      setPasswordColor("green");
    } else {
      setErrorPassword("Password must not less than 8 characters.");
      setPasswordColor("red");
    }

    if (confirmPassword !== " " && confirmPassword === password) {
      setErrorConfirmPassword("");
      setConfirmPasswordColor("green");
    } else {
      setErrorConfirmPassword("Confirm-Password not match.");
      setConfirmPasswordColor("red");
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={validateForm}>
        <h2>Registered Form</h2>
        <div className="form-control">
          <label htmlFor="user_id">Username</label>
          <input
            type="text"
            name="user"
            id="user_id"
            value={username}
            onChange={({ target }) => {
              setUsername(target.value);
            }}
          />
          <small style={{ color: usernameColor }}>{errorUserName}</small>
        </div>

        <div className="form-control">
          <label htmlFor="email_id">E-Mail</label>
          <input
            type="email"
            name="email"
            id="email_id"
            value={email}
            onChange={({ target }) => {
              setEmail(target.value);
            }}
          />
          <small style={{ color: emailColor }}>{errorEmail}</small>
        </div>

        <div className="form-control">
          <label htmlFor="password_id">Password</label>
          <input
            type="password"
            name="password"
            id="password_id"
            value={password}
            onChange={({ target }) => {
              setPassword(target.value);
            }}
          />
          <small style={{ color: passwordColor }}>{errorPassword}</small>
        </div>

        <div className="form-control">
          <label htmlFor="confirm_password_id">Confirm-Password</label>
          <input
            type="password"
            name="confirm_password"
            id="confirm_password_id"
            value={confirmPassword}
            onChange={({ target }) => {
              setConfirmPassword(target.value);
            }}
          />
          <small style={{ color: confirmPasswordColor }}>
            {errorConfirmPassword}
          </small>
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default FormComponent;
