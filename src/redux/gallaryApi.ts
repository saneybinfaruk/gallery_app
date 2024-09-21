import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {ItemQueryType, Photo} from '../interfaces/interfaces';

export const gallaryApi = createApi({
  reducerPath: 'gallaryApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),
  endpoints: builder => ({
    photos: builder.query<Photo[], ItemQueryType>({
      query: itemQuery => ({
        url: `/photos`,
        params: itemQuery,
      }),

      serializeQueryArgs: ({queryArgs}) => {
        const {_page, ...rest} = queryArgs;
        return rest;
      },

      merge: (currentCacheData, responseData) => {
        if (Array.isArray(responseData)) {
          const existingPhotoIds = new Set(currentCacheData.map(c => c.id));

          const newPhoto = responseData.filter(
            r => !existingPhotoIds.has(r.id),
          );

          currentCacheData.push(...newPhoto);
        }
      },
    }),

    photo: builder.query<Photo, {photoId: number}>({
      query: ({photoId}) => ({
        url: `/photos/${photoId}`,
      }),
    }),
  }),
});

export const {usePhotosQuery, usePhotoQuery} = gallaryApi;
