import { useState } from 'react'
import { useSuperHeroesData } from '../hooks/useSuperHeroesData'

export const RQSuperHeroesPage = () => {
  const onSuccess = data => {
    console.log({ data })
  }

  const onError = error => {
    console.log({ error })
  }

  const { isLoading, data, isError, error } = useSuperHeroesData(
    onSuccess,
    onError
  )

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <h2>{error.message}</h2>
  }

  return (
    <>
      <h2>React Query Super Heroes Page</h2>
      {data.data.map(hero => {
        return <div key={hero.id}>{hero.name}</div>
      })}
    </>
  )
}