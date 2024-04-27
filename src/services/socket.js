import socket from "socket.io-client";
// const api = import.meta.env.VITE_API_URL;
export const io = socket.connect(`https://server-hxxk.onrender.com`);
