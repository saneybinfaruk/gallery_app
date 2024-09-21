export interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
export interface ItemQueryType {
  _page: number;
  _limit?: number;
}

export type RootParamList = {
  HomeStack: undefined;
  Details: {photoId: number};
  FavoriteStack: undefined;
  Setting: undefined;
};

export type BottomParamList = {
  Home: undefined;
  Favorite: undefined;
  Setting: undefined;
};
