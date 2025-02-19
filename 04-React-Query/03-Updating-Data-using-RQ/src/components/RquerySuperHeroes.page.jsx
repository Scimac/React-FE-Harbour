import { useState } from 'react'
import { useSuperHeroesData } from '../hooks/useSuperHeroesData'
import { useAddSuperHeroData } from '../hooks/useAddSuperHeroData'

const QuerySuperHeroesPage = () => {
  const [name, setName] = useState('')
  const [alterEgo, setAlterEgo] = useState('')
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

  const { mutate: addHero } = useAddSuperHeroData({
    onSuccessCallback: () => {
      setName(null)
      setAlterEgo(null)
    }
  })

  const handleAddHeroClick = () => {
    const hero = { name, alterEgo }
    addHero(hero)
  }

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
          <li>This implementation shows how to update data using RQ. Refer the 'useAddSuperHeroData' hook for implemenation.</li>
      </ul>
      <div style={{ marginInlineStart: '1rem'}}>
        <input
          style={{ marginInlineEnd: '1rem'}}
          type='text'
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          style={{ marginInlineEnd: '1rem'}}
          type='text'
          value={alterEgo}
          onChange={e => setAlterEgo(e.target.value)}
        />
        <button
          style={{ marginInlineEnd: '1rem'}}
          disabled={!(data?.data && data?.data.length >= 0)}
          onClick={handleAddHeroClick}>Add Hero</button>
        <button onClick={refetch}>Fetch Heroes</button>
        <ul>
          {data?.data.map(hero => {
            return <li key={hero.id}>{hero.name}</li>
          })}
        </ul>
      </div>
    </>
  )
}

export default QuerySuperHeroesPage;