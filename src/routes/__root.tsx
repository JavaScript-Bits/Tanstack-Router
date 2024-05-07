import { QueryClient } from '@tanstack/react-query'
import { createRootRoute, createRootRouteWithContext, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient
}>()({
  component: () => (
    <>
      <div className="p-6 flex gap-6">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{' '}
        <Link to="/contact" className="[&.active]:font-bold">
          Contact
        </Link>
      </div>
      <div>
        <Link to="/about" className="[&.active]:font-bold">
          lazy Loaded About
        </Link>
      </div>
      <div>
        <Link
          to="/search"
          search={{
            pageIndex: 3,
            includeCategories: ['electronics', 'gifts', " __     __"],
            sortBy: 'price',
            desc: true,
          }}
        >
          Search Electrical stuff
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})
