import { useEffect } from "react";
import { getAllDataPokemons } from "@/api";
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { setLoading, setData, setPages } from "@/store/Pokemons";
import type { RootState } from "@/store";

export const usePokemons = () => {
  const state = useSelector((state: RootState) => state.pokemon);
  const dispatch = useDispatch();

  useEffect(() => {
    const abort = new AbortController();
    const getResult = async () => {
      dispatch(setLoading(true));
      const result = await getAllDataPokemons({
        limit: state.limit,
        offset: state.offset,
        signal: abort.signal,
        query: state.queryName,
        type:state.selectType
      });
      dispatch(setLoading(false));
      dispatch(setData(result.data));
      dispatch(setPages(result.count));
    };

    getResult();

    return () => {
      abort.abort();
    };
  }, [state.limit, state.offset, state.queryName,state.selectType, dispatch]);
};
