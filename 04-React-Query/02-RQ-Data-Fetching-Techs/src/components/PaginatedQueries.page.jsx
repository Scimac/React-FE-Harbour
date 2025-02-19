import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { request } from '../utils/axios-utils'

const fetchSuperHeroes = pageNumber => {
  return request({ url: `/superheroes?_per_page=3&_page=${pageNumber}` })
}

export const PaginatedQueries = () => {
  const [pageNumber, setPageNumber] = useState(1)
  const { isLoading, isError, error, data, isFetching } = useQuery({
        queryKey: ['superheroes', pageNumber],
        queryFn: () => fetchSuperHeroes(pageNumber),
        keepPreviousData: true,
        staleTime: 30000,
        cacheTime: 300000,
        refetchOnMount: false,
        refetchOnWindowFocus: false
    }
  )

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <h2>{error.message}</h2>
  }

  return (
    <>
        <h2>React Query - Paginated Queries</h2>
        <ul>
            <li>RQ provide out of the box pagination and caching for optimised solutions.</li>
            <li>Query keys and smart caching makes pagination very easy using RQ.</li>
            <li>Check out the implementation to know more.</li>
        </ul>
      <div>
        {data?.data?.data.map(hero => {
          return (
            <div key={hero.id}>
              <h2>
                {hero.id}. {hero.name}
              </h2>
            </div>
          )
        })}
      </div>
      <div>
        <button
          onClick={() => setPageNumber(page => page - 1)}
          disabled={pageNumber === 1}>
          Prev Page
        </button>
        <button
          onClick={() => setPageNumber(page => page + 1)}
          disabled={pageNumber === 5}>
          Next Page
        </button>
      </div>
      {isFetching && 'Loading'}
    </>
  )
}

export default PaginatedQueries