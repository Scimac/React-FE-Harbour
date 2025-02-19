import { useSuperHeroesData } from '../hooks/useSuperHeroesData'

const QuerySuperHeroesPage = () => {
  const onSuccess = data => {
    console.log({ data })
  }

  const onError = error => {
    console.log({ error })
  }

  const { isLoading, data, isError, error, isFetching, refetch } = useSuperHeroesData(
    onSuccess,
    onError
  )

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <h2>{error.message}</h2>
  }

  return (
    <>
      <h2>React Query Super Heroes Page</h2>
      <ul>
          <li>React Query is a powerful library helps in fetching the data in most optimised way.</li>
          <li>RQ enables caching, refetching, polling as well as syncing the data with very less boilerplate code.</li>
          <li>In this implementation, the data is fetched on button click and cached as per the configuration.</li>
          <li>Loading, Success and Error handling is also handled with params provided by useQuery Hook.</li>
      </ul>
      <button onClick={refetch}>Fetch Heroes</button>
      {data?.data.map(hero => {
        return <div key={hero.id}>{hero.name}</div>
      })}
    </>
  )
}

export default QuerySuperHeroesPage;