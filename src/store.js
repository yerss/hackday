import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
let axiosDefaults = require('axios/lib/defaults')
axiosDefaults.baseURL = 'http://localhost:5000/'
export default new Vuex.Store({
  state: {
    barColor: 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)',
    barImage: 'https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-1.jpg',
    drawer: null,
    houses: [],
    house: {},
  },
  getters: {
    HOUSES (state) {
      return state.houses
    },
    HOUSE (state) {
      return state.house
    }
  },
  mutations: {
    SET_BAR_IMAGE (state, payload) {
      state.barImage = payload
    },
    SET_DRAWER (state, payload) {
      state.drawer = payload
    },
    SET_HOUSES (state, data) {
      state.houses = data
    },
    SET_HOUSE (state, data) {
      state.house = data
    },
  },
  actions: {
    GET_HOUSES ({commit}) {
      return axios.get(`/houses`)
        .then((response) => {
          commit('SET_HOUSES', response.data)
        })
    },
    GET_HOUSE ({commit}, id) {
      return axios.get(`/houses/${id}`)
        .then((response) => {
          commit('SET_HOUSE', response.data)
        })
    }
  },
})
