import { useQuery } from "@tanstack/react-query"
import { getPostData } from "../services/posts"





export interface Post {
    id: number,
    title: string,
    body: string,
    userId: number,
    tags: string[],
    reactions: {
        likes:number,
        dislikes: number,
    }
}

export interface PostResponse {
    posts: Post[],
    total: number,
    skip:number,
    limit:number,
}

export const useGetPostDataQuery = () => {
    return useQuery<PostResponse>({
        queryKey: ['posts-data'],//unique identifier for this query
        queryFn: getPostData,  //the function that fetches that data
        staleTime: 5*60*1000, // data stays fresh for 5 minutes 
        gcTime: 10*60*1000, //keep data in cache for 10 minutes 
        retry:3,                // try 3 times if it fails
        refetchOnWindowFocus: false //dont refresh when user come back to tab
    })
}

