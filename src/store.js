import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducer'
import { loggerMiddleware, alwaysReturnHelloMiddleware, delayedMessageMiddleware } from './exampleAddons/middleware'

//import { print1, print2, print3, exampleMiddleware, printfive } from './exampleAddons/middleware'

// import { compose } from 'redux'
// import { sayHiOnDispatch, includeMeaningOfLife } from './exampleAddons/enhancers'

// const composedEnhancer = compose(sayHiOnDispatch, includeMeaningOfLife)
//const middlewareEnhancer = applyMiddleware(print1, print2, print3, exampleMiddleware, printfive)

//const middlewareEnhancer = applyMiddleware(loggerMiddleware, alwaysReturnHelloMiddleware, delayedMessageMiddleware)

const composedWdtEnhancer = composeWithDevTools(
    applyMiddleware(loggerMiddleware, alwaysReturnHelloMiddleware, delayedMessageMiddleware)
)

//const store = createStore(rootReducer, undefined, composedEnhancer)
const store = createStore(rootReducer, composedWdtEnhancer)

export default store