import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const studentFormApi = createApi({
  reducerPath: 'studentFormApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://664189a13d66a67b34341c2e.mockapi.io/api/v1/' }),
  endpoints: (builder) => ({
    //get all student list

    getAllStudents: builder.query({
        query: () => ({ url: '/student-form'})
    }),

    addStudent: builder.mutation({
      query: (payload) => ({ url: '/student-form', method: 'POST', body: payload})
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllStudentsQuery, useAddStudentMutation } = studentFormApi