import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem("currentUser")) || null;
  });

  useEffect(() => {
    localStorage.setItem("currentUser", JSON.stringify(user));
  }, [user]);

  function register(data) {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const newUser = {
      id: crypto.randomUUID(),
      role: "customer",
      status: "active",
      ...data,
    };

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));

    setUser(newUser);
  }

  function login(email, password) {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const found = users.find(
      u => u.email === email && u.password === password
    );

    if (!found) {
      return false;
    }

    if (found.status === "suspended") {
      alert("Your account has been suspended.");
      return false;
    }

    setUser(found);
    return true;
  }

  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        register,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}