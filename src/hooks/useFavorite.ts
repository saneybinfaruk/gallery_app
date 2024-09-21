import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {Photo} from '../interfaces/interfaces';
import {addToFavoriteList} from '../redux/FavoriteSlice';

const useFavorite = (photo: Photo) => {
  const {favoritePhotos} = useSelector(
    (state: RootState) => state.favoritePhotos,
  );
  const item = favoritePhotos.find(f => f.photo.id === photo?.id);

  const [favorite, setFavorite] = useState(item ? item.isFavorite : false);

  const dispatch = useDispatch();

  const toggleFavorite = () => {
    setFavorite(!favorite);
    dispatch(addToFavoriteList({photo, isFavorite: !favorite}));
  };

  return {toggleFavorite, favorite};
};

export default useFavorite;
