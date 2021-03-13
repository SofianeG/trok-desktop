let userState;

if (window.localStorage.getItem('auth')) {
  userState = JSON.parse(window.localStorage.getItem('auth'));
} else {
  userState = null;
}
export const authReducer = (state = userState, action) => {
  switch (action.type) {
    case 'LOGGED_IN_USER':
      return { ...state, ...action.payload };
    case 'LOGOUT':
      return action.payload;
    default:
      return state;
  }
};

// import { GET_USER, UPDATE_BIO, UPLOAD_PICTURE } from "../actions/user.actions";

// const initialState = {};

// export default function userReducer(state = initialState, action) {
//   switch (action.type) {
//     case GET_USER:
//       return action.payload;
//     case UPLOAD_PICTURE:
//       return {
//         ...state,
//         selectedFile: action.payload,
//       };
//     case UPDATE_BIO:
//       return {
//         ...state,
//         bio: action.payload,
//       };

//     default:
//       return state;
//   }
// }
