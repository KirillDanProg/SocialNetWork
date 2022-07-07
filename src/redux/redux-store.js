import { applyMiddleware, combineReducers, legacy_createStore} from 'redux'
import authReducer from './auth-reducer';
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer from './users-reducer';
import  ThunkMiddleware  from 'redux-thunk';

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
})

let store = legacy_createStore(reducers, applyMiddleware(ThunkMiddleware));



window.store = store
export default store