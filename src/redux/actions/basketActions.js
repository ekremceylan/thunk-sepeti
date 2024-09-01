import { v4 } from "uuid";
import api from "../../utils/api";
import ActionTypes from "../actionTypes";
// SEpetteki elemanları al
export const getCart = () => (dispatch) => {
  dispatch({
    type: ActionTypes.CART_LOADİNG,
  });
  api
    .get("/cart")
    .then((res) =>
      dispatch({
        type: ActionTypes.CART_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch({
        type: ActionTypes.CART_ERROR,
        payload: err.message,
      });
    });
};

// Sepete yeni eleman ekleme
export const addToBasket = (product, rest) => (dispatch) => {
  // Sepete eklenilecek olan ürünün bilgilerini belirle
  const newItem = {
    id: v4(),
    productId: product.id,
    title: product.title,
    price: product.price,
    photo: product.photo,
    restaurantName: rest.name,
    amount: 1,
  };
  // Elemanı api ya ekle
  api
    .post(`/cart`, newItem)
    // BaŞarılı olursa reducer a haber ver ve bildirim gönder
    .then(() =>
      dispatch({
        type: ActionTypes.ADD_TO_CART,
        payload: newItem,
      })
    );
};
// Sepetteki elemanı güncelle (miktarı arttırma/azaltma)
export const updateItem = (id, newAmount) => (dispatch) => {
  api.patch(`/cart/${id}`, { amount: newAmount }).then((res) => {
    dispatch({
      type: ActionTypes.UPDATE_CART,
      payload: res.data,
    });
  });
};

export const deleteItem = (id) => (dispatch) => {
  api.delete(`/cart/${id}`).then(() =>
    dispatch({
      type: ActionTypes.DELETE_FROM_CART,
      payload: id,
    })
  );
};
