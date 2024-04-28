import socket from "socket.io-client";
const apiDevelopMode = import.meta.env.VITE_DEVELOP_API_URL;
const apiProductionMode = import.meta.env.VITE_PRODUCTION_API_URL;
export const io = socket.connect(apiProductionMode);
