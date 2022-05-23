import { get, post } from "../utils/fetchApi";

export function apiGetUserPrescriptions({ token, id }) {
  return get(`/prescription/${id}`, {
    Authorization: `Bearer ${token}`,
    "Access-Control-Allow-Headers": "*",
  });
}

export function apiGetUserIssues({ token }) {
  console.log("issue");
  return get("/issue", {
    Authorization: `Bearer ${token}`,
    "Access-Control-Allow-Headers": "*",
  });
}

export function apiCreateIssue({ token, id }) {
  return post(
    "/add-issue",
    {
      user_id: id,
    },
    {
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Headers": "*",
    }
  );
}

export function apiCreatePrescription({ token, ...info }) {
  return post(
    "/add-prescription",
    {
      ...info,
    },
    {
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Headers": "*",
    }
  );
}

export function apiGetDoctorIssues({ token, id }) {
  console.log("issue");
  return get(`/user-issue/${id}`, {
    Authorization: `Bearer ${token}`,
    "Access-Control-Allow-Headers": "*",
  });
}

export function apiGetDoctorPrescriptions({ token, id }) {
  console.log("prescription");
  return get(`/user-prescription/${id}`, {
    Authorization: `Bearer ${token}`,
    "Access-Control-Allow-Headers": "*",
  });
}

export function apiGetPharIssues({ token }) {
  return get("/pharmacy-issue", {
    Authorization: `Bearer ${token}`,
    "Access-Control-Allow-Headers": "*",
  });
}

export function apiGetPharPrescriptions({ token, id }) {
  return get(`/user-prescription/${id}`, {
    Authorization: `Bearer ${token}`,
    "Access-Control-Allow-Headers": "*",
  });
}
