import * as React from "react"
import {applyMiddleware, combineReducers, createStore} from "redux";
import {productReducer} from "./productReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {Provider} from "react-redux";

const rootReducer = combineReducers({
  count: productReducer,
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default ({ element }) => <Provider store={store}>{element}</Provider>

