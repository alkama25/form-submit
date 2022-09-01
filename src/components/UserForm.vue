<template>
  <section>
    <h1>User information</h1>
    <form>
        <!-- Name -->
      <form-input
        v-model="formData.name"
        labelName="name"
        label="Name"
        inputType="text"
        validationRules="alpha_spaces"
      ></form-input>
      <!-- Phone -->
      <form-input
        v-model="formData.phone"
        labelName="phone"
        label="Phone"
        inputType="number"
        validationRules="integer"
      ></form-input>
      <!-- Subject -->
      <form-input
        v-model="formData.subject"
        labelName="subject"
        label="Subject"
        inputType="text"
      ></form-input>
    </form>
  </section>
</template>

<script>
import FormInput from "./FormInput.vue";
export default {
  components: { FormInput },
  data() {
    return {
      formData: {
        name: null,
        phone: null,
        subject: null,
      },
    };
  },
};
</script>

<style></style>
