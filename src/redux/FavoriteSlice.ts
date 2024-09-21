import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Photo} from '../interfaces/interfaces';

interface FavoritePhotos {
  isFavorite: boolean;
  photo: Photo;
}

interface FavoritePhotosState {
  favoritePhotos: FavoritePhotos[];
}

const initialState: FavoritePhotosState = {
  favoritePhotos: [],
};

const FavoritePhotos = createSlice({
  name: 'FavoritePhotos',
  initialState,
  reducers: {
    addToFavoriteList(state, action: PayloadAction<FavoritePhotos>) {
      const {photo} = action.payload;

      const favoritePhotos = state.favoritePhotos.find(
        p => p.photo.id === photo.id,
      );

      if (favoritePhotos) {
        state.favoritePhotos = state.favoritePhotos.filter(
          favorites => favorites.photo.id !== photo.id,
        );
      } else {
        state.favoritePhotos.push(action.payload);
      }
    },
  },
});

export const {addToFavoriteList} = FavoritePhotos.actions;

export default FavoritePhotos.reducer;
