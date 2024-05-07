import { createFileRoute, useLoaderData } from '@tanstack/react-router'
import { fetchPosts } from '../data'

export const Route = createFileRoute('/posts')({
  component: Posts,
  loader: ({ context: { queryClient } }) => queryClient.ensureQueryData(fetchPosts()),
  pendingComponent: () => <div>Loading...</div>,
  errorComponent: ({ error }) => <div>Error: {error.message}</div>
  
})


export default function Posts() {
  const posts = Route.useLoaderData();
  console.log('posts', posts)
  return (
    <div>{
      posts.map((post: any) => (
        <div key={post.id}>{post.title}</div>
      ))
    }</div>
  )
}
