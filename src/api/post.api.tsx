import axios from "axios";

import URL from "../constants/api.contant"


export const getPosts = async () => {

   return axios.get(URL)
   .then(res=> res.data)

};
