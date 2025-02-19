import { useQuery, useMutation, useQueryClient } from 'react-query'
import { request } from '../utils/axios-utils'

const fetchSuperHeroes = () => {
  return request({ url: '/superheroes' })
}

export const useSuperHeroesData = (onSuccess, onError) => {
  return useQuery('super-heroes', fetchSuperHeroes, {
    onSuccess,
    onError
  })
}