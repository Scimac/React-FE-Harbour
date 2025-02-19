import { useQueries } from '@tanstack/react-query'
import { request } from '../utils/axios-utils'

const fetchSuperHero = heroId => {
    return request({ url: `/superheroes/${heroId}` })
}

export const DynamicParallelQueries = ({ heroIds }) => {
    const queryResults = useQueries({
        queries: heroIds.map(id => {
            return {
                queryKey: ['super-hero', id],
                queryFn: () => fetchSuperHero(id)
            }
        })
    })

    console.log({ queryResults })
    return (<>
        <div>Dynamic Parallel Queries</div>
        <ul>
            <li>Dynamic Parallel Queries are used whenthe number of queries going to be triggered are unknown.</li>
            <li>Example cases include - Fetching multiple related queries dynamically (e.g., superheroes by IDs).</li>
            <li>useQueries hook is used to perform this type of data fetching.</li>
        </ul>
        {queryResults?.map((heroData, index) => {
            return <div key={heroData.data?.data?.id || index}>
                {heroData.data?.data?.name} - {heroData.data?.data?.alterEgo}
            </div>
        })}
    </>)
}

export default DynamicParallelQueries