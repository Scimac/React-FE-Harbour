import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import './App.css'
import HomePage from './components/HomePage.page';
import HooksSuperHeroesPage from './components/HooksSuperheroes.page';
import QuerySuperHeroesPage from './components/RquerySuperHeroes.page';

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
            </ol>
          </nav>
          <Routes>
            <Route exact path="/useeffect-super-heroes" element={<HooksSuperHeroesPage />} />
            <Route exact path="/query-super-heroes" element={<QuerySuperHeroesPage />} />
            <Route exact path="/" element={<HomePage />} />
          </Routes>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
  )
}

export default App