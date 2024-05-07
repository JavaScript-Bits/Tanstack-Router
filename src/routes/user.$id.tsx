import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/user/$id')({
  component: User
})


export default function User() {
  const { id } = Route.useParams()
  return (
    <div>user---{id}</div>
  )
}
