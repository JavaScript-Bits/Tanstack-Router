import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/about')({
  component: AboutLazy
})



export default function AboutLazy() {
  console.log('Lazy About')
  return (
    <div>about.lazy</div>
  )
}
