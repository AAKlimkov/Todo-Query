import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Todo } from "./types";

// Define a service using a base URL and expected endpoints
export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/todos",
  }),
  endpoints: (builder) => ({
    getTodoById: builder.query<Todo, string>({
      query: (id) => `${id}`,
    }),
  }),
});

export const { useLazyGetTodoByIdQuery } = todoApi;
