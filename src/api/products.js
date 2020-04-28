//axios endpoint to call products
import axios from "axios";
export default axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/https://toyswer-products-api.herokuapp.com/products/",
});