import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {appReducer} from "./reducers/app-reducer";
import {dummyReducer} from "./reducers/dummy-reducer";


// combine reducers with combineReducers,
// we set the structure of our only state object
const rootReducer = combineReducers({
     dummy: dummyReducer,
     app: appReducer
})

// create store directly
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

// automatically determine the type of the entire state object
export type AppRootStateType = ReturnType<typeof rootReducer>
