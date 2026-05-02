import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000",
});

export const getNotifications = () => API.get("/api/notifications");
export const sendNotification = (data) =>
  API.post("/api/notifications", data);