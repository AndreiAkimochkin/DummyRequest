import {Dispatch} from 'redux';
import {setAppErrorAC, SetAppErrorActionType, setAppStatusAC, SetAppStatusActionType} from "./app-reducer";
import {dummyAPI, ResponseDataType} from "../api/api";


const initialState = {
    status: '',
     data: []
}

export const dummyReducer = (state: ResponseDataType = initialState, action: ActionsType): ResponseDataType => {
    switch (action.type) {
        case 'GET_EMPLOYEES': {
            return {
                ...state,
                status: action.data.status,
                data: action.data.data
            }
        }

        default:
            return state
    }
}

// actions
export const getDummyAC = (data: ResponseDataType) => ({type: 'GET_EMPLOYEES', data} as const);


// thunks
export const getDummyTC = () => async (dispatch: ThunkDispatch) => {
    dispatch(setAppStatusAC('loading'))
     await dummyAPI.getEmployees()
        .then((res) => {
            dispatch(getDummyAC(res.data))
           dispatch(setAppStatusAC('succeeded'))
        }).catch((error) => {
            dispatch(setAppErrorAC(error.message ? error.message : 'Some error occurred'))
            dispatch(setAppStatusAC('failed'))
        })
}

//types
type ActionsType =
    | ReturnType<typeof getDummyAC>


type ThunkDispatch = Dispatch<ActionsType | SetAppStatusActionType | SetAppErrorActionType>

