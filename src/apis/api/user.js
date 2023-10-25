import { instance } from "..";

export const kakaoLogin = (payload) => {
  return instance.post("/login", payload);
};

export const instagramConnect = (payload) => {
  return instance.post("/user/instagram", payload);
};

export const fetchUserInfos = () => {
  return instance.get("/user/info");
};
