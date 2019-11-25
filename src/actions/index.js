import { 
    SET_FAVORITE, 
    DELETE_FAVORITE, 
    LOGIN_REQUEST, 
    LOGOUT_REQUEST, 
    REGISTER_REQUEST
} from '../types'

export function setFavorite(payload){
    return{
        type: SET_FAVORITE,
        payload
    }
}

export function deleteFavorite(payload){
    return{
        type: DELETE_FAVORITE,
        payload
    }
}

export function loginRequest(payload){
    return{
        type: LOGIN_REQUEST,
        payload
    }
}

export function logoutRequest(payload){
    return{
        type: LOGOUT_REQUEST,
        payload
    }
}

export function registerRequest(payload){
    return{
        type: REGISTER_REQUEST,
        payload
    }
}