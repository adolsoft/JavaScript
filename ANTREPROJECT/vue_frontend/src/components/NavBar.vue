<template>
    <div>
      <v-app-bar color="deep-purple accent-4" dense dark>
        
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        
    <v-btn @click="deneme" >Todo User</v-btn>
    <v-btn color="primary" @click="denemes">
      Antrenor
    </v-btn>
    <v-btn color="error" >
      Error
    </v-btn>
    <v-btn block>
      Disabled
    </v-btn>
 
        
  
        <v-spacer></v-spacer>
  
        <v-btn v-if="loggedInUser.id" icon class="pr-16 ml-16" @click="logout">
          {{ loggedInUser.username }}
        </v-btn>
        <v-btn v-if="loggedInAntrenorUser.id" icon class="pr-16 ml-16" @click="AntrenorLogout">
          {{ loggedInAntrenorUser.username }}
        </v-btn>
        
        <!--v-btn v-if="userName !== ''" icon class="pr-16 ml-16" @click="logout">
          {{ userName }}
        </v-btn-->
 
      </v-app-bar>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
     
      logout() {
        this.$store.commit("user/setLoggedInUser", {});
        // browserdaki localStorage bulunan token silmek için kullanılır.
        window.localStorage.removeItem("token");
        this.$router.push("login");
      },
      deneme() {
                this.$router.push("login");
      },
      denemes() {
                this.$router.push("antrenorlogin");
      },
      AntrenorLogout() {
        this.$store.commit("antrenoruser/setLoggedInAntrenorUser", {});
        // browserdaki localStorage bulunan token silmek için kullanılır.
        window.localStorage.removeItem("token");
        this.$router.push("antrenorlogin");
      },
    },
    computed: {
  
      loggedInUser() {
        //return this.$store.getters.getLoggedInUser;
        return this.$store.getters["user/getLoggedInUser"];
      },
      loggedInAntrenorUser() {
        //return this.$store.getters.getLoggedInUser;
        return this.$store.getters["antrenoruser/getLoggedInAntrenorUser"];
      },
    },
  };
  </script>
  
  <style></style>
