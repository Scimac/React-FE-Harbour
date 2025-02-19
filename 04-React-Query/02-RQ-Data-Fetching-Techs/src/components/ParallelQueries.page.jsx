import { useQuery } from '@tanstack/react-query'
import { request } from '../utils/axios-utils'

const fetchSuperHeroes = () => {
    return request({ url: '/superheroes' })
}

const fetchVillians = () => {
    return request({ url: '/villians' })
}

const ParallelQueries = () => {
    const { data: superHeroes } = useQuery({ queryKey: ['super-heroes'], queryFn: fetchSuperHeroes})
    const { data: vilians } = useQuery({ queryKey: ['vilians'], queryFn: fetchVillians})
    return (<>
        <div>Parallel Queries</div>
        <ul>
            <li>Parallel Manual Data fetch includes firing manual queries in parallel -given the keys are unique</li>
            <li>This method is oly used when the number of queries to be triggered are already known.</li>
            <li>RQ being a powerful library handles the sync and caching of data parallelly</li>
        </ul>
        <h3>Super Heroes</h3>
        {superHeroes?.data.map(hero => {
            return <div key={hero.id}>{hero.name}</div>
        })}
        <h3>Super Villians</h3>
        {vilians?.data.map(villian => {
            return <div key={villian.id}>{villian.name}</div>
        })}
    </>)
}

export default ParallelQueries