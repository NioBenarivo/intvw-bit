import { useSelector, useDispatch } from 'react-redux'

export const useMovieList = () => {
  const movieList = useSelector((state) => state.movieList)
  const currentPage = useSelector((state) => state.currentPage)
  const dispatch = useDispatch()
  const setMovieList = list => {
    dispatch({
      type: 'SET_MOVIE_LIST',
      list
    })
  }
  const addMovieList = list => {
    dispatch({
      type: 'ADD_MOVIE_LIST',
      list
    })
  }

  const incrementPage = list => {
    dispatch({type: 'INCREMENT_PAGE'})
  }

  return { movieList, currentPage, setMovieList, addMovieList, incrementPage }
}
