import { API_URL } from "../utils/config";

export const getContacts = async () => {
  return await fetch(`${API_URL}/contacts`, { next: {revalidate: 20 }})
    .then(response => response.json());
};

export const getServices = async () => {
  return await fetch(`${API_URL}/services`, { next: {revalidate: 20 }})
    .then(response => response.json());
};

export const getTeam = async () => {
  return await fetch(`${API_URL}/team`, { next: {revalidate: 20 }})
    .then(response => response.json());
};

export const getSocials = async () => {
  return await fetch(`${API_URL}/socials`, { next: {revalidate: 20 }})
    .then(response => response.json());
};

export const getProjects = async () => {
  return await fetch(`${API_URL}/projects`, { next: {revalidate: 20 }})
    .then(response => response.json());
};

export const getSingleProject = async (slug: string) => {
  return await fetch(`${API_URL}/projects/${slug}`, { next: {revalidate: 20 }})
    .then(response => response.json());
};

