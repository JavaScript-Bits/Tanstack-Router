import { createFileRoute } from '@tanstack/react-router'


type contactSearch = {
  limit: number
  pageIndex: number
  query: string
}

export const Route = createFileRoute('/search')({
  component: Search,
  validateSearch: (search: Record<string, unknown>): contactSearch => {
    // validate and parse the search params into a typed state
    return {
      limit: Number(search?.page ?? 11),
      query: (search.filter as string) || '',
      pageIndex: Number(search.pageIndex ?? 0)
    }
  },
})


export default function Search() {
  const { limit, query, pageIndex, includeCategories } = Route.useSearch()
  return (
    <>
      <div>Limit --- {limit}</div>
      <div>Query --- {query}</div>
      <div>pageIndex --- {pageIndex}</div>
      <div>includeCategories --- {includeCategories}</div>

    </>

  )
}

