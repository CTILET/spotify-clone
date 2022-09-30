import { fromJSON } from "postcss"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: () => {
      headers.set(
        "X-rapidAPI-key",
        "6482d5961dmsh99d77743767b247p1cc87fjsn469b6d01470b"
      )
      return headers
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => "/charts/world" }),
  }),
})

export const { useGetTopChartsQuery } = shazamCoreApi;
