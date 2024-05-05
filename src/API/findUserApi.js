import axios from "axios";
const apiDevelopMode = import.meta.env.VITE_DEVELOP_API_URL;
const apiProductionMode = import.meta.env.VITE_PRODUCTION_API_URL;
class FindUserApi {
  getMatchedUser = async (searchText, avoidUsers) => {
    const accessToken = JSON.parse(
      localStorage.getItem("loggedUserInfo"),
    ).accessToken;
    return await axios.post(
      `${apiProductionMode}/users`,
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
