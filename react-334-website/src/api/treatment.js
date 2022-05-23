import { get, post } from "../utils/fetchApi";

export function apiUserTreatment({ token }) {
  return get("/treatment", {
    Authorization: `Bearer ${token}`,
    "Access-Control-Allow-Headers": "*",
  });
}

export function apiCreateTreatment({ token, name, description }) {
  return post(
    "/store-treatment",
    {
      name,
      description,
    },
    {
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Headers": "*",
    }
  );
}

export function apiDoctorTreatment({ token, id }) {
  return get(`/get-treatments/${id}`, {
    Authorization: `Bearer ${token}`,
    "Access-Control-Allow-Headers": "*",
  });
}
