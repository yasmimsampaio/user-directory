import axios from "axios";

export default {
  getRandomHuman: function() {
    return axios.get("https://randomuser.me/api/?results=100");
  }
}