import axios from "axios";

export default ({ 
    namespaced:true,
    state:{ 
       todos: [], 
    },
    
    getters:{},
   
    mutations:{
       setTodos(state, payload) {
        state.todos = payload
       } 
    },

    actions:{
        
          async fetchTodos({ commit }, payload) {
            try {
               // eslint-disable-next-line no-debugger
               debugger
               console.log(payload.userId)
                const serverResponse = await axios.get("http://localhost:3000/todos/find",
                { params: {userId: payload.userId}});
                
                console.log(serverResponse);
                console.log("-----------------");
                commit("setTodos", serverResponse.data);
                 
             } catch (error) {
             console.log(error);
            }

        },
        
    },
    
});