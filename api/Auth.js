import ENV_VARS from "../Config";
const BASE_URL = ENV_VARS.BASE_URL;

export const login = async(credentials) => {
    try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      body: JSON.stringify(credentials),
      headers: {
        "Content-Type": "application/json"
      }
    });
    console.log(response);
    let json;
    if (response.ok) {
      json = await response.json();
    } 
    return json;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const register = async(data) => {
    try {
    const response = await fetch(`${BASE_URL}/register`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    });

    let json;
    if (response.ok) {
      json = await response.json();
      json = json.body;
    } 
    return json;
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

export const logout = async(token) => {
    try {
    const response = await fetch(`${BASE_URL}/logout`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Bearer-Token": token
      }
    });

    let json;
    if (response.ok) {
      json = await response.json();
      json = json.body;
    } 
    return json;
  } catch (error) {
    console.log(error);
      return undefined;
  }
}

export const requestResetLink = async(email) => {

}

export const forgotPassword = async() => {

}