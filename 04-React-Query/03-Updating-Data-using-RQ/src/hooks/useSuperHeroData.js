import { useQuery } from '@tanstack/react-query'
import { request } from '../utils/axios-utils'


// Keys are passed as a parameter for the queryFn
const fetchSuperHero = ({ queryKey }) => {
  const heroId = queryKey[1]
  return request({ url: `/superheroes/${heroId}` })
}

export const useSuperHeroData = heroId => {
  return useQuery({
    queryKey: ['super-hero', heroId],
    queryFn: fetchSuperHero,
    staleTime: 30000,
    cacheTime: 300000,
  })
}