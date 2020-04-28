//calling axios to users api
import axios from "axios";
export default axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/https://thawing-shore-89996.herokuapp.com/users/",
});
