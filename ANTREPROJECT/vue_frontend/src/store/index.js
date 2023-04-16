
import Vue from "vue";
import Vuex from "vuex";
import user from "./user";
import todo from "./todo";
import antrenoruser from "./antrenoruser";

Vue.use(Vuex);

export default new Vuex.Store({ 

    modules:{
        user,
        todo,
        antrenoruser,
    }

    
});