import { useState, useEffect } from 'react'
import axios from 'axios'

export const HooksSuperHeroesPage = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4000/superheroes').then(res => {
            setData(res.data)
            setIsLoading(false)
        })
    }, [])

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    return (
        <>
            <h2>Super Heroes Page</h2>
            <ul>
                <li>Traditionally, we use useEffect to fetch data with empty dependency ('[]') array.</li>
                <li>This method induces a lot of boiler-plate code in the codebase.</li>
                <li>Every reload cause the api to be called, causes performance issues when api is data-heavy.</li>
            </ul>
            {data.map(hero => {
                return <div key={hero.id}>{hero.name}</div>
            })}
        </>
    )
}

export default HooksSuperHeroesPage;