import { PRODUCTS_URL,UPLOAD_URL } from "../constants"
import { apiSlice } from "./apiSlice"

export const productsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: ({keyword,pageNumber}) => ({
                url: PRODUCTS_URL,
                params: {
                    keyword,
                    pageNumber
                }
            }),
            keepUnusedDataFor: 5,
            providesTags: ['Product'],
        }),
        getProductsByCategory: builder.query({
            query: ({ category, pageNumber }) => ({
                url: `${PRODUCTS_URL}/category/${category}`, // Update the URL to include the category
                params: {
                    category,
                    pageNumber,
                },
            }),
            keepUnusedDataFor: 5,
            providesTags: ['Product'],
        }),
        getProductDetails: builder.query({
            query: (productId) => ({
                url: `${PRODUCTS_URL}/${productId}`,
            }),
            keepUnusedDataFor: 5,
        }),
        createProduct: builder.mutation({
            query: () => ({
                url : PRODUCTS_URL,
                method: 'POST',               
            }),
            invalidatesTags: ['Product']
        }),
        updateProduct: builder.mutation({
            query: (data) => ({
                url: `${PRODUCTS_URL}/${data.productId}`,
                method: 'PUT',
                body: data
            }),
            invalidatesTags: ['Products']
        }),
        uploadProductImage: builder.mutation({
            query: (data) => ({
                url: UPLOAD_URL,
                method: 'POST',
                body: data
            })
        }),
        deleteProduct: builder.mutation({
            query: (productId) => ({
                url: `${PRODUCTS_URL}/${productId}`,
                method: 'DELETE'
            })
        }),
        createReview: builder.mutation({
            query: (data) => ({
                url: `${PRODUCTS_URL}/${data.productId}/reviews`,
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['Product']
        }),
        getTopProducts: builder.query({
            query: () => ({
                url: `${PRODUCTS_URL}/top`
            }),
            keepUnusedDataFor: 5
        }),
        getCategories: builder.query({
            query: () => ({
                url: `${PRODUCTS_URL}/categories`, // Assuming this endpoint provides categories
            }),
            providesTags: ['Category'],
        }),
        getBrands: builder.query({
            query: () => ({
                url: `${PRODUCTS_URL}/brands`, // Assuming this endpoint provides categories
            }),
            providesTags: ['Brand'],
        }),
        getProductsBrand: builder.query({
            query: ({ brand, pageNumber }) => ({
                url: `${PRODUCTS_URL}/brands/${brand}`, // Update the URL to include the category
                params: {
                    brand,
                    pageNumber,
                },
            }),
            keepUnusedDataFor: 5,
            providesTags: ['Product'],
        }),

    })
})

export const { useGetProductsQuery, useGetProductDetailsQuery, useCreateProductMutation, useUpdateProductMutation,useUploadProductImageMutation,useDeleteProductMutation,useCreateReviewMutation,useGetTopProductsQuery,useGetProductsByCategoryQuery,useGetCategoriesQuery,useGetBrandsQuery,useGetProductsBrandQuery } = productsApiSlice