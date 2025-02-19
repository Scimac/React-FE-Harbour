import { Fragment } from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'
import { request } from '../utils/axios-utils'

const fetchSuperheroes = ({ pageParam = 1 }) => {
  return request({ url: `/superheroes?_per_page=3&_page=${pageParam}`})
}

export const InfiniteQueries = () => {
  const {
      isLoading,
      isError,
      error,
      data,
      fetchNextPage,
      hasNextPage,
      isFetching,
      isFetchingNextPage
  } = useInfiniteQuery({
    queryKey: ['superheroes'], 
    queryFn: fetchSuperheroes, 
    getNextPageParam: (_lastPage, pages) => {
        if (pages.length < 5) {
            return pages.length + 1
        } else {
            return undefined
        }
    },
    staleTime: 30000,
    cacheTime: 300000,
    refetchOnMount: false,
    refetchOnWindowFocus: false
})

  if (isLoading) {
    return <h2>Loading...</h2>
}

if (isError) {
    return <h2>{error.message}</h2>
  }
  
  return (
      <>
      <h2>React Query - Infinite Paginated Queries</h2>
      <ul>
          <li>RQ provide out of the box infinite Queries for cursor based or infinite scrolling type implementations</li>
          <li>useInfiniteQuery hook is used for making such type of infinite queries.</li>
          <li>getNextPageParam is used to control the pagination and next fetch.</li>
          <li>Check out notes section for more information about optimised implementation.</li>
      </ul>
      <div>
        {data?.pages.map((group, i) => {
          return (
              <Fragment key={i}>
              {group.data?.data.map(hero => (
                  <h2 key={hero.id}>
                  {hero.id} {hero.name}
                </h2>
              ))}
            </Fragment>
          )
        })}
      </div>
      <div>
        <button onClick={() => fetchNextPage()} disabled={!hasNextPage}>
          Load more
        </button>
      </div>
      <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
    </>
  )
}

export default InfiniteQueries