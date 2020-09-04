import { authentification } from '../../services/ServerRequest';

export const setAuthentication = (obj) => ({
  type: "SET_AUTHENTICATION",
  payload: obj,
});

export const userLogout = () => ({
  type: "USER_LOGOUT",
});


export const fetchUser = (gitHubId) => (dispatch) => {
    authentification(gitHubId)
    .then(data=>dispatch(setAuthentication(data)));
    // dispatch(setAuthentication(data));
};
// export const setLoading = (state)=> ({
//   type: 'SET_LOADING',
//   payload: state
// })
