import socket from "socket.io-client";
const apiProductionMode = import.meta.env.VITE_PRODUCTION_API_URL;
export const io = socket.connect(`${apiProductionMode}`);
