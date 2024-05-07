import axios from "axios";
const API = import.meta.env.VITE_PRODUCTION_API_URL;
class FindUserApi {
  getMatchedUser = async (searchText, avoidUsers) => {
    const accessToken = JSON.parse(
      localStorage.getItem("loggedUserInfo"),
    ).accessToken;
    return await axios.post(
      `${API}/users`,
      { searchText, avoidUsers },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
  };
}
export const findUserApi = new FindUserApi();
