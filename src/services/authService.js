import API from "./api";

const AuthService = {
  login: (data) => {
    return API.post("/login", data)
      .then(({ data }) => {
        setHeadersAndStorage(data.data);
        return data.data;
      })
      .catch((err) => {
        throw err.response.data;
      });
  },

  register: (data) => {
    return API.post("/register", data)
      .then(({ data }) => {
        setHeadersAndStorage(data.data);
        return data.data;
      })
      .catch((err) => {
        throw err.response.data;
      });
  },

  logout: () => {
    API.defaults.headers["Authorization"] = ``;
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  },

  updateProfile: (data) => {
    const headers = {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    };
    return API.post("/users/update", data, headers)
      .then(({ data }) => {
        localStorage.setItem("user", JSON.stringify(data));
        return data;
      })
      .catch((err) => {
        console.log("Auth service err", err);
        throw err;
      });
  },
};

const setHeadersAndStorage = ({ user, token }) => {
  API.defaults.headers["Authorization"] = `Bearer ${token}`;
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("token", token);
};

export default AuthService;
