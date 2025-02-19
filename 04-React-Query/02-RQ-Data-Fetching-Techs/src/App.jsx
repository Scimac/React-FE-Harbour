import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import './App.css'
import HomePage from './components/HomePage.page';
import HooksSuperHeroesPage from './components/HooksSuperheroes.page';
import QuerySuperHeroesPage from './components/RquerySuperHeroes.page';
import QuerySuperHeroesPageById from './components/QuerySuperHeroesPageById.page';
import QuerySuperHeroInfo from './components/QuerySuperHeroInfo.page';
import ParallelQueries from './components/ParallelQueries.page';
import DynamicParallelQueries from './components/DynamicParallelQueries.page';
import DependentQueries from './components/DependentQueries.page';
import PaginatedQueries from './components/PaginatedQueries.page';
import InfiniteQueries from './components/InfiniteQueries.page';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ol>
              <li>
                <Link to='/'>React Query - Home</Link>
              </li>
              <li>
                <Link to='/useeffect-super-heroes'>Traditional Data Fetch</Link>
              </li>
              <li>
                <Link to='/query-super-heroes'>Data Fetch using - React Query - Basics</Link>
              </li>
              <li>
                <Link to='/query-super-heroes-by-Id'>Data Fetch using ID - RQ - select, query keys</Link>
              </li>
              <li>
                <Link to='/query-parallel-manual'>Parallel Data Fetch - Manual Queries</Link>
              </li>
              <li>
                <Link to='/query-parallel-dynamic'>Parallel Data Fetch - Dynamic Queries</Link>
              </li>
              <li>
                <Link to='/query-dependent-queries'>Data Fetch - Dependant Queries</Link>
              </li>
              <li>
                <Link to='/query-paginated-queries'>Paginated Queries</Link>
              </li>
              <li>
                <Link to='/query-infinite-paginated-queries'>Infinite Paginated Queries</Link>
              </li>
            </ol>
          </nav>
          <Routes>
            <Route exact path="/useeffect-super-heroes" element={<HooksSuperHeroesPage />} />
            <Route exact path="/query-super-heroes" element={<QuerySuperHeroesPage />} />
            <Route exact path="/query-super-heroes-by-Id" element={<QuerySuperHeroesPageById />} />
            <Route exact path="/query-super-heroes-by-Id/:heroId" element={<QuerySuperHeroInfo />} />
            <Route exact path="/query-parallel-manual" element={<ParallelQueries />} />
            <Route exact path="/query-parallel-dynamic" element={<DynamicParallelQueries heroIds={[1,3]} />} />
            <Route exact path="/query-dependent-queries" element={<DependentQueries email={"john.clark.MartianManHunter@jla-towers.com"} />} />
            <Route exact path="/query-paginated-queries" element={<PaginatedQueries />} />
            <Route exact path="/query-infinite-paginated-queries" element={<InfiniteQueries />} />
            <Route exact path="/" element={<HomePage />} />
          </Routes>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
  )
}

export default App