import { get, post } from "../utils/fetchApi";

export function apiGetUserInfo({ token }) {
  return get("/profile", {
    Authorization: `Bearer ${token}`,
    "Access-Control-Allow-Headers": "*",
  });
}

export function apiGetDoctorInfo({ token }) {
  return post(
    "/doctor-profile",
    {},
    {
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Headers": "*",
    }
  );
}

export function apiGetPharInfo({ token }) {
  return post(
    "/pharmacy-profile",
    {},
    {
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Headers": "*",
    }
  );
}

export function apiGetUsers({ token }) {
  return get("/users", {
    Authorization: `Bearer ${token}`,
    "Access-Control-Allow-Headers": "*",
  });
}
