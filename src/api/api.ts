import { API_URL } from "../utils/config";

export const getContacts = async () => {
  return await fetch(`${API_URL}/contacts`)
    .then(response => response.json());
};

export const getServices = async () => {
  return await fetch(`${API_URL}/services`)
    .then(response => response.json());
};

export const getTeam = async () => {
  return await fetch(`${API_URL}/team`)
    .then(response => response.json());
};

export const getSocials = async () => {
  return await fetch(`${API_URL}/socials`)
    .then(response => response.json());
};

export const getProjects = async () => {
  return await fetch(`${API_URL}/projects`)
    .then(response => response.json());
};

export const getSingleProject = async (slug: string) => {
  return await fetch(`${API_URL}/projects/${slug}`)
    .then(response => response.json());
};

