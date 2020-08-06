import React from 'react';
import axios from 'axios';
import {createStore} from 'redux'
import reducers from '../../reducers';
//import {LOADING_TOGGLE} from "../action/actionTypes"
 
const store = createStore(reducers)
const baseURL = "https://5e9ec500fb467500166c4658.mockapi.io/todos";
const todolistApi = axios.create({baseURL: baseURL});
const getAllItems = () => todolistApi.get('/');
const postItem = (item) => todolistApi.post('/',{item});


// todolistApi.interceptors.request.use(req=>{
//     store.dispatch({type:LOADING_TOGGLE,payload :{loading:true}});
//     return req;
// },error=>error)

export default {
    getAllItems,
    postItem
};