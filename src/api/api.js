import * as axios from "axios";
import { logout } from "../redux/auth-reducer";

const instance = axios.create({
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  withCredentials: true,
  headers: {
    "API-KEY": "98c53cec-c5b7-4a19-9abc-502320b1a878",
    // "Content-Type": "multipart/form-data",
  },
});

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  updateUsersPage(page, pageSize) {
    return instance
      .get(`users?page=${page}&count=${pageSize}`)
      .then((response) => response.data);
  },
};

export const authAPI = {
  authMe() {
    return instance.get("auth/me").then((response) => response.data);
  },
  loginAuth(email, password) {
    return instance
      .post("auth/login", { email, password })
      .then((response) => response.data);
  },
  logout(email, password) {
    return instance
      .delete("auth/login", { email, password })
      .then((response) => response.data);
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`).then((response) => response.data);
  },
  getStatus(userId) {
    return instance
      .get(`profile/status/${userId}`)
      .then((response) => response.data);
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status });
  },
  setUserPhoto(photo) {
    return instance.put(`profile/photo`, { photo });
  },

};

export const followingAPI = {
  userFollow(userId) {
    return instance.post(`follow/${userId}`).then((response) => response.data);
  },
  userUnfollow(userId) {
    return instance
      .delete(`follow/${userId}`)
      .then((response) => response.data);
  },
};
