// Axios is a popular NPM package used for preforming API requests
import axios from "axios";

const { REACT_APP_BASEURL, REACT_APP_APIKEY } = process.env;

async function loadNextImage() {
  axios.defaults.headers.common["x-api-key"] = `${REACT_APP_APIKEY}`; // Replace this with your API Key

  let response = await axios.get(`${REACT_APP_BASEURL}`, {
    params: { limit: 1, size: "full" },
  }); // Ask for 1 Image, at full resolution

  console.log(response);

  this.image = response.data[0]; // the response is an Array, so just use the first item as the Image

  console.log(this.image + " Image");

  console.log("-- Image");
  console.log("id:", this.image.id);
  console.log("url:", this.image.url);

  return this.image.url;
}

// Export an object with a "search" method that searches the Giphy API for the passed query
export default loadNextImage;
