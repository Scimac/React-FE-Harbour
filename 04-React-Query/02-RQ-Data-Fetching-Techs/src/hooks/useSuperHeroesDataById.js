import { useQuery } from '@tanstack/react-query'
import { request } from '../utils/axios-utils'

const fetchSuperHeroes = () => {
  return request({ url: '/superheroes' })
}

export const useSuperHeroesDataById = (onSuccess, onError) => {
  return useQuery({
    queryKey: ['super-heroes'],
    queryFn: fetchSuperHeroes,
    onSuccess,
    onError,
    staleTime: 30000,
    cacheTime: 300000,
    select: data => {
        const superHeroNames = data.data.map(hero => { return { ...hero, formattedName: `${hero.name} a.k.a ${hero.alterEgo}` } })
        return superHeroNames
    }
  })
}