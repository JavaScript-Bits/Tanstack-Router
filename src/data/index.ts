import { queryOptions } from "@tanstack/react-query";

type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
};



export async function getPosts(): Promise<Post[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/poSSSSSsts');
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return response.json();
}


export const fetchPosts = () => {
  return queryOptions({
    queryKey: ['posts'],
    queryFn: getPosts,
  });
}