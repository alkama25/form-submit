<template>
  <section>
    <h1>User Details</h1>
    <p>Name : {{ userDetails.name }}</p>
    <p>Phone : {{ userDetails.phone }}</p>
    <p>Subject : {{ userDetails.subject }}</p>
    <button type="button" class="button" @click="showForm">Submit another response</button>
  </section>
</template>

<script>
export default {
  props: {
    userDetails: Object,
    emitUserDetails: Function,
  },
  methods: {
    showForm() {
      this.$emit("emitUserDetails", false, null);
    },
  },
};
</script>

<style></style>
