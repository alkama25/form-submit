<template>
  <div id="app">
    <UserForm v-if="!showUserDetails" @emitUserDetails="emitUserDetails"></UserForm>
    <UserDetails
      v-if="showUserDetails"
      :userDetails="userDetails"
      @emitUserDetails="emitUserDetails"
    ></UserDetails>
  </div>
</template>

<script>
import UserForm from "./components/UserForm.vue";
import UserDetails from "./components/UserDetails.vue";

export default {
  name: "App",
  components: {
    UserForm,
    UserDetails,
  },
  data() {
    return {
      showUserDetails: false,
      userDetails: null,
    };
  },
  methods: {
    emitUserDetails(value, details) {
      this.showUserDetails = value;
      this.userDetails = details;
    },
  },
};
</script>

<style lang="scss">
@import "./assets/scss/app.scss";
</style>
