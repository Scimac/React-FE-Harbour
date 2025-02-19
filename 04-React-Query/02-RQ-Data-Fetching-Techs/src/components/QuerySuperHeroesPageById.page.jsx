import React from 'react'
import { Link } from 'react-router-dom'
import { useSuperHeroesDataById } from '../hooks/useSuperHeroesDataById'

const QuerySuperHeroesPageById = () => {
    const onSuccess = data => {
        console.log({ data })
    }

    const onError = error => {
        console.log({ error })
    }

    const { isLoading, data, isError, error, isFetching } = useSuperHeroesDataById(
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
                <li>The Query keys are the most important tracking guides for RQ - They must be unique.</li>
                <li>So, when we have implementation of same entity and need to cache data for each individual entity - the keys look like ['superheroes', 1], ['superheroes', 2]</li>
                <li>Also, sometimes we need to parse and format certain parts of data, we use 'select' param of useQuery to format Api Response Data</li>
                <li>Checkout the implementation for more information.</li>
            </ul>
            {data?.map(hero => {
                return <div key={hero.id}>
                    <Link to={`/query-super-heroes-by-Id/${hero.id}`}>
                        {hero.formattedName}
                    </Link>
                </div>
            })}
        </>
    )
}

export default QuerySuperHeroesPageById