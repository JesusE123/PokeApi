import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage } from '@/store/Pokemons';
import type { RootState } from "../../store";

const usePokemons = () => {
  const state = useSelector((state: RootState) => state.pokemon);
  const dispatch = useDispatch();

  const handlePageChange = (page: number) => {
    dispatch(setCurrentPage(page));
  }

  return {
    result: state.data,
    isLoading: state.loading,
    pagination: {
      currentPage: state.currentPage,
      totalPages: state.pages,
    },
    handlePageChange,
  };
};

export default usePokemons;
