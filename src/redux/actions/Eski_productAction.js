export const setLoading = () => ({
    type: "SET_LOADİNG",
});

export const setError = (payload) => ({
    type: "SET_ERROR",
    payload,
});

export const setProducts = (payload) => ({
    type: "SET_PRODUCTS",
    payload,
});

export const getProducts = () =>  {
    return( dispatch) =>  {
        dispatch(setLoading());

        api
          .get("/products") 
          .then((res) =>dispatch(setProducts(res.data)))
          .catch((err) =>dispatch(setError(err.message)));
              
    };
};