import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contact')({
  component: Contact
})


export default function Contact() {
  console.log('Unlazy loaded')
  return (
    <div>contact</div>
  )
}
