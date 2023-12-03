import axios from 'axios';

const API_KEY = 'AIzaSyDDBkJ7SWvwzsXt4ZSpsQw1hiZLoK7Db0g';

const BASE_URL = 'https://identitytoolkit.googleapis.com/v1/accounts';

const signIn = async (email, password) => {
  try {
     const response = await axios.post(`${BASE_URL}:signInWithPassword?key=${API_KEY}`, {
      email,
      password,
      returnSecureToken: true,
    });
   // await upDate(response.data.idToken, displayName);
  } catch (error) {
    if (error.response.data.error.message === 'INVALID_LOGIN_CREDENTIALS') {
      throw Error('Usuario/Senha invalidos');
    }
  }
};
const signUp = async (displayName, email, password) => {
   try {
    await axios.post(`${BASE_URL}:signUp?key=${API_KEY}`, {
      email,
      password,
      returnSecureToken: true,
    });
  } catch (error) {
    if (error.response.data.error.message === 'EMAIL_EXISTS') {
      throw Error('Usuario cadastrado');
    }
  }
};
const upDate = async (idToken, displayName) => {
     try {
    await axios.post(`${BASE_URL}:update?key=${API_KEY}`, {
      idToken,
      displayName,
      returnSecureToken: true,
    });
  } catch (error) {
      console.log(error.response);
    }
}

export { signIn, signUp };