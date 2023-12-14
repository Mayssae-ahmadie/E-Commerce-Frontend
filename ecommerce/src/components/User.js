import axios from "axios";

export const getAllUsers = async () => {
  try {
    const response = await axios.get(`http://localhost:5000/users/getAll`);
    return response.data.users;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const getUserById = async (Id) => {
  try {
    const response = await axios.get(
      `http://localhost:5000/users/findOneById/${Id}`
    );
    return response.data.user;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const getUsersByRole = async (role) => {
  try {
    const response = await axios.post(
      `http://localhost:5000/users/findByRole`,
      { role }
    );
    return response.data.users;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const login = async (email, password) => {
  try {
    const response = await axios.post(`http://localhost:5000/users/login`, {
      email,
      password,
    });
    return response.data.token;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const register = async (
  fullName,
  email,
  password,
  phoneNumber,
  role
) => {
  const newUser = {
    fullName,
    email,
    password,
    phoneNumber,
    role,
  };
  try {
    const response = await axios.post(
      `http://localhost:5000/users/register`,
      newUser
    );
    return response.data.user;
  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log("Error", error.message);
    }
    console.log(error.config);
    throw error;
  }
};

export const deleteUser = async (Id) => {
  try {
    await axios.delete(`http://localhost:5000/users/deleteById/${Id}`);
    return Id;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const updateUser = async (
  Id,
  fullName,
  email,
  password,
  phoneNumber,
  role
) => {
  const updatedUser = {
    fullName,
    email,
    password,
    phoneNumber,
    role,
  };
  try {
    const response = await axios.put(
      `http://localhost:5000/users/updateUser/${Id}`,
      updatedUser
    );
    return { user: response.data.user, Id };
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
