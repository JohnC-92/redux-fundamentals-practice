import { configureStore } from '@reduxjs/toolkit'
// import { createStore, compose, applyMiddleware } from 'redux'
// import thunkMiddleware from 'redux-thunk'
// import { composeWithDevTools } from 'redux-devtools-extension'
// import rootReducer from './reducer'

//================ Case Study 8 : ReduxJS ================
import todosReducer from './features/todos/todosSlices'
import filtersReducer from './features/filters/filtersSlice'

const store = configureStore({
  reducer: {
    todos: todosReducer,
    filters: filtersReducer,
  },
})

export default store

//================ Case Study 7 : Redux Thunk Library ================
// const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

// const store = createStore(rootReducer, composedEnhancer)

// export default store

//================ Case Study 6 : Redux Thunk/Async Function Middleware ================
// // This is basically the implementation of redux thunk
// const asyncFunctionMiddleware = (storeAPI) => (next) => (action) => {
//   if (typeof action === 'function') {
//     return action(storeAPI.dispatch, storeAPI.getState)
//   }
//   return next(action)
// }

// const middlewareEnhancer = applyMiddleware(asyncFunctionMiddleware)
// const store = createStore(rootReducer, middlewareEnhancer)

// export default store

//================ Case Study 5 : Redux Dev Tools ================
// import { composeWithDevTools } from 'redux-devtools-extension'
// import { print1, print2, print3 } from './exampleAddons/middleware'

// const composedEnhancer = composeWithDevTools(
//   applyMiddleware(print1, print2, print3)
// )

// const store = createStore(rootReducer, composedEnhancer)

// export default store

//================ Case Study 4 : Custom Middleware ================

// const delayedMessageMiddleware = (storedAPI) => (next) => (action) => {
//   if (action.type === 'todo/todosAdded') {
//     setTimeout(() => {
//       console.log('Added a new todo: ', action.payload)
//     }, 1000)
//   }
//   return next(action)
// }

// const store = createStore(
//   rootReducer,
//   applyMiddleware(delayedMessageMiddleware)
// )

// export default store

// Example custom middleware
// Outer Function
// function exampleMiddleware(storeAPI) {
//   return function wrapDispatch(next) {
//     return function handleAction(action) {
//       // Do anything here: pass the action onwards with next(action),
//       // or restart the pipeline with storeAPI.dispatch(action)
//       // Can also use storeAPI.getState() here
//       return next(action)
//     }
//   }
// }

// Custom Middleware arrow function example
// const anotherExampleMiddleware = storeAPI => next => action => {
//   // Do something in here, when each action is dispatched
//   return next(action)
// }

// exampleMiddleware:
// The outer function is actually the "middleware" itself.
// It will be called by applyMiddleware, and receives a storeAPI
// object containing the store's {dispatch, getState} functions.
// hese are the same dispatch and getState functions that are
// actually part of the store. If you call this dispatch function,
// it will send the action to the start of the middleware pipeline.
// This is only called once.

// wrapDispatch:
// The middle function receives a function called next as its argument.
// This function is actually the next middleware in the pipeline. If this
// middleware is the last one in the sequence, then next is actually the
// original store.dispatch function instead. Calling next(action) passes
// the middleware to the next middleware in the pipeline. This is also
// only called once

// handleAction:
// Finally, the inner function receives the current action as its argument,
// and will be called every time an action is dispatched.

//================ Case Study 3 : Middleware ================
// Action order: print1 --> print2 --> print3
// --> store.dispatch --> root reducer in store

// import { print1, print2, print3 } from './exampleAddons/middleware'

// const middlewareEnhancer = applyMiddleware(print1, print2, print3)

// const store = createStore(rootReducer, middlewareEnhancer)

// export default store

//================ Case Study 2 : Enhancers ================

// import {
//   sayHiOnDispatch,
//   includeMeaningOfLife,
// } from './exampleAddons/enhancers'

// const composedEnhancer = compose(sayHiOnDispatch, includeMeaningOfLife)

// const store = createStore(rootReducer, composedEnhancer)

// export default store

//================ Case Study 1 : Store with preloadedState ================
// If exist localStorage value for initialState
// let preloadedState
// const persistedTodosString = localStorage.getItem('todos')

// if (persistedTodosString) {
//   preloadedState = {
//     todos: JSON.parse(persistedTodosString),
//   }
// }

// const store = createStore(rootReducer, preloadedState)

// export default store
