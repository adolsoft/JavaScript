import axios from "axios";

export default ({ 
    namespaced:true,
    
    state:{ 
        AntrenorUsers: [],
        
        selectedAntrenorUser: "",

        loggedInAntrenorUser:{},
    },
    // alıcı demekteri bir veriyi başka bie metotan alabiliriz içinde 
    getters:{
        getAntrenorUsers(state){
            return state.AntrenorUsers;
        },

        getSelectedAntrenorUser(state){
            return state.selectedAntrenorUser;
        },

        getLoggedInAntrenorUser(state){//Aşağıdaki kodları kullanıcı adının sağ üst barda gorukmesi içim
            return state.loggedInAntrenorUser;
        },

    },
    // state değiştirmek için burası öneriliyor.
    mutations:{ 
        setSelectedAntrenorUser(state, payload){ // paylod isdediğimizismi verebiliriz. // burası componetten gelen değer.
            state.selectedAntrenorUser = payload;
        },

        setLoggedInAntrenorUser(state, payload) {
           state.loggedInAntrenorUser = payload;
        },
        setAntrenorUsers(state, payload){
            state.AntrenorUsers = payload
        }
    },

    // buranın gorevi diğer servislerden istek yapmak için kullanlır
    // genelde aklımızda beckend isteklerimiz buraya yazıyoruz 
    actions:{
        async login({ commit }, payload) {//login metodu oluşturduk 
            // commit  = login olmuş kullanıcı verisini bir sekilde state atmamız gerekiyor.
            //           state değiştiren sadece mutations olduğu  için mutations ları {commit} ile çağırıyoruz.
            //  payload = sadece bir değişken istediğimizi verebiliriz Ayrıca bize bir değişken gelmesi gerekiyor
     
            try {
                //beckend isteği yapacağıs
                 const serverResponse = await axios.post(
                  "http://localhost:3000/antrenorUsers/login", 
                  payload
                  );
                // axios post get gibi işlemleri yaptırıyor.
                //post içine 3 parametre istiyor 1 paremetremiz url  2 paremetremiz kullanıcı nesnesi olacak yani payload
                    // 3 paremetre ise şimdiki yazmaya gerek yok.

                commit("setLoggedInAntrenorUser", serverResponse.data.AntrenorUsers); // commit sadece mutations çalıştırı
                // gelen beckend cevabını loggedInUser:{} içine atmak için kullanıyoruz.
                //loggedInUser:{} değiştirmek için gerekli mutations saten var .
                // yani setLoggedInUSer içersin e serverPesponse gondeririz.
                // aşağıdaki komut token bilgilerini browser local storage tutarak diğer bütün sayfalarda
                // kontrol etmemeizi sağlar.
                     window.localStorage.setItem('token', serverResponse.data.AntrenorUsers.token);
             } catch (error) {
             console.log(error);
            }

        },
        async getAntrenorUsers({ commit }) {
            try {
                //localStorge kaydedilen token bilgisini okumak için
                const accessToken = window.localStorage.getItem('token');
                const config = {
                    headers:{
                            Authorization: `token ${accessToken}`
                    }
                }
              
                const serverResponse = await axios.get(
                    "http://localhost:3000/antrenorUsers", config
                );
               
                 commit('setAntrenorUsers', serverResponse.data)
                
             } catch (error) {
             console.log(error);
            }

        }
    },
    
});