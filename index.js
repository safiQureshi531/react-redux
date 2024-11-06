const redux = require('redux')
const reduxLogger = require('redux-logger')


const createStore = redux.createStore
const combinedReducer = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First Redux Action'
    }
}

function Buy_IceCream() {
    return {
        type: BUY_ICECREAM
    }
}

// const initialState = {
//     numOfCakes: 10,
//     numOfIceCream: 20
// }

const initialCakeState = {
    numOfCakes: 10
}

const initialIceCreamState = {
    numOfIceCream: 20
}

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case BUY_CAKE: return {
//             ...state,
//             numOfCakes: state.numOfCakes - 1
//         }

//         case BUY_ICECREAM: return {
//             ...state,
//             numOfIceCream: state.numOfIceCream - 1
//         }

//         default: return state
//     }
// }

const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}

const IcrCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCream: state.numOfIceCream - 1
        }
        default: return state
    }
}

const rootReducer = combinedReducer({
    cake: cakeReducer,
    iceCream: IcrCreamReducer
})
const store = createStore(rootReducer, applyMiddleware(logger))
console.log('initial State', store.getState())
const unsubscribe = store.subscribe(() => { })
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(Buy_IceCream())
store.dispatch(Buy_IceCream())
store.dispatch(buyCake())
unsubscribe()