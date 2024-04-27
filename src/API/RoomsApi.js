import axios from "axios";
import { io } from "../services/socket.js";
// const api = import.meta.env.VITE_API_URL;
class RoomsApi {
  async createRoom(loggedUserID, userCompanionID) {
    io.emit("create_room", { loggedUserID, userCompanionID });
  }
  async getRooms() {
    try {
      return await axios.get(`https://server-hxxk.onrender.com/rooms`, {
        withCredentials: true,
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
