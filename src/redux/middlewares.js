import axios from "axios";
import * as constants from "./constants";
import * as config from "../config/api";
import { logoutUser } from "./actions/authActionCreators";

export const apiMiddleware = ({ dispatch, getState }) => (next) => (action) => {
  if (action.type !== constants.API) return next(action);

  if (action.type === constants.API) {
    const BASE_URL = config.BACKEND_URL;


    const AUTH_TOKEN = getState().userReducer.token
    if(AUTH_TOKEN){
      axios.defaults.headers.common['x-access-token'] = AUTH_TOKEN
    }

    console.log("AUTH_TOKEN:", AUTH_TOKEN)

    const {
      url,
      method,
      success,
      data,
      postProcessSuccess,
      postProcessError,
    } = action.payload;

    if (url === "/login") {
      console.log("LOGGING IN");
      axios({
        method,
        url: BASE_URL + url,
        auth: data,
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => {
          if(success) dispatch(success(response.data));
          if (postProcessSuccess) postProcessSuccess(response.data);
      }).catch((err) => {
        if (!err.response) console.warn(err);
        else {
          if (err.response && err.response.status === 401)
            dispatch(logoutUser());
          if (err.response.data.message) {
            if (postProcessError) postProcessError(err.response.data.message);
          }
        }
      });
    } else {
      dispatch({ type: constants.TOGGLE_LOADER})
      axios({
        method,
        url: BASE_URL + url,
        data: data ? data : null,
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          dispatch({ type: constants.TOGGLE_LOADER})
          if (success) dispatch(success(response.data));
          if (postProcessSuccess) postProcessSuccess(response.data);
        })
        .catch((err) => {
          dispatch({ type: constants.TOGGLE_LOADER})
          if (!err.response) console.warn(err);
          else {
            if (err.response && err.response.status === 401)
              dispatch(logoutUser());
            if (err.response.data.message) {
              if (postProcessError) postProcessError(err.response.data.message);
            }
          }
        });
    }
  }
};
