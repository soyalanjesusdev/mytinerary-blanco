import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './redux/reducers/rootReducer';
import thunk from 'redux-thunk';



const myStore = createStore(rootReducer, applyMiddleware(thunk)); // creamos el store con el reducer y el middleware de redux-thunk para poder usar async actions en el store

ReactDOM.render(
  <React.StrictMode>
    <Provider store={myStore}>  {/* le pasamos el store al provider para que todos los componentes que lo consuman puedan acceder a el component */}
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


