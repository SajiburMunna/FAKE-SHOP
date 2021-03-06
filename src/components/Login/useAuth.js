import firebase from "firebase/app";
import "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import firebaseConfig from "../../firebase.config";

import { Route, Redirect } from "react-router-dom";

firebase.initializeApp(firebaseConfig);

const AuthContext = createContext();
export const AuthContextProvider = (props) => {
  const auth = Auth();
  return (
    <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
export const PrivateRoute = ({ children, ...rest }) => {
  const auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

const getUser = (user) => {
  const { displayName, email, photoURL } = user;
  return {
    name: displayName,
    email,
    photo: photoURL,
  };
};
const Auth = () => {
  const [user, setUser] = useState(null);
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        const signInUser = getUser(res.user);
        setUser(signInUser);
        return res.user;
      })
      .catch((err) => {
        console.log(err);
        setUser(null);
        return err.message;
      });
  };
  const signOut = () => {
    return firebase
      .auth()
      .signOut()
      .then((result) => {
        setUser(null);
        return true;
      })
      .catch((error) => {
        console.log(error);
        return false;
      });
  };
  useEffect(() => {
    firebase.auth().onAuthStateChanged((usr) => {
      if (usr) {
        const currentUser = getUser(usr);
        setUser(currentUser);
      } else {
      }
    });
  }, []);
  return {
    user,
    signInWithGoogle,
    signOut,
  };
};
export default Auth;
