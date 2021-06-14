import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
import { auth } from "./firebase";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");

  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoUrl: userAuth.user.photoUrl,
          })
        );
      })
      .catch((err) => alert(err));
  };

  const register = () => {
    if (!name) {
      return alert("Please enter a full name!");
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoUrl: profilePic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profilePic,
              })
            );
          });
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className="login">
      <img
        src="https://www.georgethall.com/wp-content/uploads/2018/03/2000px-LinkedIn_Logo.svg_.png"
        alt=""
      />

      <form>
        <input
          value={name}
          onChange={({ target }) => setName(target.value)}
          placeholder="Full name (required if registering)"
          type="text"
        />

        <input
          value={profilePic}
          onChange={({ target }) => setProfilePic(target.value)}
          placeholder="Profile pic URL (optional)"
          type="text"
        />

        <input
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          placeholder="Email"
          type="email"
        />

        <input
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          placeholder="Password"
          type="password"
        />

        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>

      <p>
        Not a member?{" "}
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
