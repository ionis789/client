import axios from "axios";
import { io } from "../services/socket.js";
const apiDevelopMode = import.meta.env.VITE_DEVELOP_API_URL;
const apiProductionMode = import.meta.env.VITE_PRODUCTION_API_URL;
class RoomsApi {
  async createRoom(loggedUserID, userCompanionID) {
    io.emit("create_room", { loggedUserID, userCompanionID });
  }
  async getRooms() {
    try {
      debugger;
      const accessToken = JSON.parse(
        localStorage.getItem("loggedUserInfo"),
      ).accessToken;
      return await axios.get(`${apiProductionMode}/rooms`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    } catch (error) {
      return {
        status: error.status,
        message: error.data.message,
      };
    }
  }
}

const roomsApi = new RoomsApi();
export default roomsApi;
