import { useQuery } from '@tanstack/react-query'
import { request } from '../utils/axios-utils'

const fetchSuperHeroes = () => {
  return request({ url: '/superheroes' })
}

export const useSuperHeroesData = (onSuccess, onError) => {
  return useQuery({
    queryKey: ['super-heroes'],
    queryFn: fetchSuperHeroes,
    onSuccess,
    onError,
    enabled: false,
    staleTime: 30000,
    cacheTime: 300000,
    refetchOnWindowFocus: false,
    refetchOnMount: false
  })
}