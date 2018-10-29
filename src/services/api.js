import { get } from 'axios'
const API_ROOT = 'https://jsonplaceholder.typicode.com'

export const getPosts = () => get(`${API_ROOT}/posts`)
export const getPostDetail = id => get(`${API_ROOT}/posts/${id}`)
export const getUser = id => get(`${API_ROOT}/users/${id}`)
export const getCommentsByPost = id => get(`${API_ROOT}/posts/${id}/comments`)
