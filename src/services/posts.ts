import axios from 'axios'
import type {PostResponse} from "../api/posts"

export const getPostData = async (): Promise<PostResponse> => {
  const res = await axios.get<PostResponse>('https://dummyjson.com/posts')
  return res.data
}
