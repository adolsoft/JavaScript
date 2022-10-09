<template>
    <div>
      <v-app-bar color="deep-purple accent-4" dense dark>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
  
        <v-toolbar-title>Page title</v-toolbar-title>
  
        <v-spacer></v-spacer>
  
        <v-btn v-if="loggedInUser.id" icon class="pr-16 ml-16" @click="logout">
          {{ loggedInUser.username }}
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
      btnClick(path) {
        
        this.$router.push(path);
      },
      //logout() {
      //  this.$store.commit("setSelectedUser", "");
      //},
      logout() {
        this.$store.commit("user/setLoggedInUser", {});
        // browserdaki localStorage bulunan token silmek için kullanılır.
        window.localStorage.removeItem("token");
        this.$router.push("login");
      },
    },
    computed: {
      //userName() {
      // return this.$store.getters.getSelectedUser;
      //},

      loggedInUser() {
        //return this.$store.getters.getLoggedInUser;
        return this.$store.getters["user/getLoggedInUser"];
      },
    },
  };
  </script>
  
  <style></style>
