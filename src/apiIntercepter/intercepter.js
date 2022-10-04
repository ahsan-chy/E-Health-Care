// import { getAuthenticationToken } from "../utils/Constants";

export const fetchWrapper = async (
  url,
  method,
  token,
  body,
  isFormData = false

  //   enc = false,o-0i09i00o-0
  //   isTimeout = false
) => {
  
  let headers;
  if (isFormData) {
    headers = {
      "Content-Type": "multipart/form-data",
    };
  } else {
    headers = {
      "Content-Type": "application/json",
    };
  }
//   if (token) {
//     const userToken = await AsyncStorage.getItem("token");
//     headers.Authorization = "Bearer " + userToken;
//   }

  let structure = {
    method: method,
    headers: headers,
    cache: "no-cache",
  };
  if (method !== "GET") {
    if (body) structure.body = JSON.stringify(body);
  }
  console.log(structure, "fdsfsd", url);
  return fetch(url, structure)
    .then(async (data) => {
      console.log(data,'tttt');

      let Data = await data.json();
      return Data;
    })
    .catch((error) => {
      console.log(error, "api errror");
    });
};