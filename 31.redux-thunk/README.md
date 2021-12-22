## Redux Middleware

It provides a third-party extension point between dispatching an action, and the moment it reaches the reducer.

## applyMiddleware([...middleware])

Each middleware receives Store's dispatch and getState functions as named arguments, and returns a function. \
That function will be given the next middleware's dispatch method, and is expected to return a function of action calling next(action) with a potentially different argument, \
or at a different time, or maybe not calling it at all. \
The last middleware in the chain will receive the real store's dispatch method as the next parameter, \
thus ending the chain. So, the middleware signature is ({ getState, dispatch }) => next => action.

\
**ES5 Example:**

```
// Middleware written as ES5 functions

function exampleMiddleware(store) {
  return function wrapDispatch(next) {
    return function handleAction(action) {
      // Do anything here: pass the action onwards with next(action),
      // or restart the pipeline with store.dispatch(action)
      // Can also use store.getState() here

      return next(action)
    }
  }
}
```

\
**ES6 Example:**

```
const anotherExampleMiddleware = store => next => action => {
  // Do something in here, when each action is dispatched

  return next(action)
}
```

\
**LoggerMiddleware Example:**

```
const loggerMiddleware = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}
```

---

## Redux Thunk

Thunk middleware for Redux. It allows writing functions with logic inside that can interact with a Redux store's dispatch and getState methods.

### What is a "thunk"?

The word "thunk" is a programming term that means "a piece of code that does some delayed work". \
Rather than execute some logic now, we can write a function body or code that can be used to perform the work later.

### Thunk Use Cases

- Moving complex logic out of components
- Making async requests or other async logic
- Writing logic that needs to dispatch multiple actions in a row or over time
- Writing logic that needs access to getState to make decisions or include other state values in an action

### [Thunk Usage Patterns](https://redux.js.org/usage/writing-logic-thunks#thunk-usage-patterns)

### _In Simple Words: Redux Thunk is middleware that allows you to return functions, rather than just actions, within Redux. This allows for delayed actions, including working with promises._

\
**Increment with timeout example:**

```
const INCREMENT_COUNTER = 'INCREMENT_COUNTER';

function increment() {
  return {
    type: INCREMENT_COUNTER
  };
}

function incrementAsync() {
  return dispatch => {
    setTimeout(() => {
      // You can invoke sync or async actions with `dispatch`
      dispatch(increment());
    }, 1000);
  };
}
```

\
**API polling example:**

```
const GET_CURRENT_USER = 'GET_CURRENT_USER';
const GET_CURRENT_USER_SUCCESS = 'GET_CURRENT_USER_SUCCESS';
const GET_CURRENT_USER_FAILURE = 'GET_CURRENT_USER_FAILURE';

const getUser = () => {
  return (dispatch) => {     //nameless functions
    // Initial action dispatched
    dispatch({ type: GET_CURRENT_USER });
    // Return promise with success and failure actions
    return axios.get('/api/auth/user').then(
      user => dispatch({ type: GET_CURRENT_USER_SUCCESS, user }),
      err => dispatch({ type: GET_CURRENT_USER_FAILURE, err })
    );
  };
};
```

## [Shopping Cart Example](https://codesandbox.io/s/pjrknp0m80)

## Resources

[Redux Fundamentals: Middleware](https://redux.js.org/tutorials/fundamentals/part-4-store#middleware) \
[Redux API: applyMiddleware](https://redux.js.org/api/applymiddleware) \
[Redux History & Design: Understanding Middleware](https://redux.js.org/understanding/history-and-design/middleware) \
[Redux Writing Logic with Thunks](https://redux.js.org/usage/writing-logic-thunks) \
[Stack Overflow: Why do we need middleware for async flow in Redux?](http://stackoverflow.com/questions/34570758/why-do-we-need-middleware-for-async-flow-in-redux/34599594#34599594)

## Assignment

**Weather App**

1. Use the following 3rd party API for weather info: [Current Weather Data](https://openweathermap.org/current)
   1. [ISO-3166 country codes](https://github.com/lukes/ISO-3166-Countries-with-Regional-Codes/blob/master/all/all.csv)
2. Review these [weather app designs](https://www.invisionapp.com/inside-design/weather-app-ui-examples/) to get inspired
3. Support at least 5 cities forecasts
4. Deploy to heroku/github pages
5. Deliver by classroom: git repo + app screenshot + deployed app

**Good Luck!**
