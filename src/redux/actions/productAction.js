// ! Thunk aksiyonu
import api from "../../utils/api";
import ActionTypes from "../actionTypes";

export const getProducts = (restId) => (dispatch) => {
  // Reducer a yüklenmenin basladığını bildiriyoruz
  dispatch({
    type: ActionTypes.PRODUCT_LOADING,
  });
  api
    .get(`/products?restaurantId=${restId}`)
    // İstek başarılı olursa reducer a verileri gönderiyoruz
    .then((res) =>
      dispatch({
        type: ActionTypes.PRODUCT_SUCCESS,
        payload: res.data,
      })
    )
    // İstek başarısız olursa reducer a hata mesajı gönderiyoruz.
    .catch((err) =>
      dispatch({
        type: ActionTypes.PRODUCT_ERROR,
        payload: err.message,
      })
    );
};
