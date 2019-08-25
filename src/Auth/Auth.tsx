import createAuth0Client from "@auth0/auth0-spa-js";
import React, { useContext, useEffect, useState } from "react";

interface AuthProviderProps {
  readonly options: Auth0ClientOptions
}

interface Loading {
  readonly type: "Loading"
}

interface Unauthenticated {
  readonly type: "Unauthenticated"
  login(): void
}

interface Authenticated {
  readonly type: "Authenticated"
  logout(): void
}

type AuthState = Loading | Unauthenticated | Authenticated

export const AuthContext = React.createContext<AuthState>({ type: "Loading" });
export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<AuthProviderProps> = (props) => {

  const [authState, setAuthState] = useState<AuthState>({ type: "Loading" });

  useEffect(() => {
    createAuth0Client(props.options).then(auth0Client => {
      if (window.location.search.includes("code=")) {
        return auth0Client
          .handleRedirectCallback()
          .then(_ => setAuthState({ type: "Authenticated", logout: () => auth0Client.logout() }))
          .then(_ => window.history.replaceState({}, document.title, window.location.pathname));
      }
      return auth0Client
        .isAuthenticated()
        .then(isAuthenticated => {
          if (isAuthenticated) {
            setAuthState({ type: "Authenticated", logout: () => auth0Client.logout() });
          } else {
            setAuthState({ type: "Unauthenticated", login: () => auth0Client.loginWithRedirect() });
          }
        });
    });
  }, [props]);

  return (
    <AuthContext.Provider value={authState}>
      {props.children}
    </AuthContext.Provider>
  );
};
