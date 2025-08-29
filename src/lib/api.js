import axios from "axios";

const baseUrl = "https://linked-posts.routemisr.com";

const token = localStorage.getItem("token");

const headers = {
  token,
};

// get all posts
export const getAllPosts = () => {
  return axios.get(baseUrl + "/posts?limit=10", { headers });
};

// get single post
export const getSinglePost = (id) => {
  return axios.get(baseUrl + `/posts/${id}`, { headers });
};
