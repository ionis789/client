import axios from "axios";
// const api = import.meta.env.VITE_API_URL;
class FindUserApi {
  getMatchedUser = async (searchText, avoidUsers) => {
    return await axios.post(
      `https://server-hxxk.onrender.com/users`,
      { searchText, avoidUsers },
      { withCredentials: true },
    );
  };
}
export const findUserApi = new FindUserApi();
