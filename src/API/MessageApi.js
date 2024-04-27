import { io } from "../services/socket.js";

class MessageApi {
  sendMessage(room_id, sender_id, message_text) {
    io.emit(
      "send_message",
      {
        room_id,
        sender_id,
        message_text,
      },
      room_id,
    );
  }
}

export const messageApi = new MessageApi();
