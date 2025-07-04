import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BASE_URL}/api` }),
  tagTypes: ["book"],
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/books",
      providesTags: ["book"],
    }),
    createBooks: builder.mutation({
      query: (bookData) => ({
        url: "/books",
        method: "POST",
        body: bookData,
      }),
      invalidatesTags: ["book"],
    }),
  }),
});

export const { useGetBooksQuery, useCreateBooksMutation } = baseApi;
