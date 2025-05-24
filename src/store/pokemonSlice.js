import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedPokemons: [],
  toast: {
    message: "",
    type: "", // 'success' | 'error' | 'info'
    show: false,
  },
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    addPokemon: (state, action) => {
      const pokemon = action.payload;
      // 이미 선택된 포켓몬인지 확인
      if (state.selectedPokemons.some((p) => p.id === pokemon.id)) {
        state.toast = {
          message: "이미 선택된 포켓몬입니다.",
          type: "error",
          show: true,
        };
        return;
      }
      // 최대 6마리 제한
      if (state.selectedPokemons.length >= 6) {
        state.toast = {
          message: "더 이상 선택할 수 없습니다.",
          type: "error",
          show: true,
        };
        return;
      }
      state.selectedPokemons.push(pokemon);
      state.toast = {
        message: `${pokemon.korean_name}이(가) 추가되었습니다!`,
        type: "success",
        show: true,
      };
    },
    removePokemon: (state, action) => {
      const id = action.payload;
      const pokemon = state.selectedPokemons.find((p) => p.id === id);
      state.selectedPokemons = state.selectedPokemons.filter(
        (pokemon) => pokemon.id !== id
      );
      if (pokemon) {
        state.toast = {
          message: `${pokemon.korean_name}이(가) 제거되었습니다.`,
          type: "info",
          show: true,
        };
      }
    },
    clearToast: (state) => {
      state.toast.show = false;
    },
  },
});

export const { addPokemon, removePokemon, clearToast } = pokemonSlice.actions;
export default pokemonSlice.reducer;
