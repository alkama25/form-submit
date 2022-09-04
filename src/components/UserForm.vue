<template>
  <section>
    <h1>User information</h1>
    <ValidationObserver v-slot="{ invalid }">
      <form @submit.prevent="onSubmit">
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
          inputType="text"
          validationRules="integer"
        ></form-input>
        <!-- Subject -->
        <form-input
          v-model="formData.subject"
          labelName="subject"
          label="Subject"
          inputType="text"
        ></form-input>
        <button type="submit" class="button loader" :disabled="invalid">
          <!-- loader till we get response from the api -->
          <svg
            v-if="isLoading"
            class="animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Send
        </button>
      </form>
    </ValidationObserver>
  </section>
</template>

<script>
import FormInput from "./FormInput.vue";
import { submitUser } from "../services/users";
export default {
  components: { FormInput },
  props: {
    emitUserDetails: Function,
  },
  data() {
    return {
      formData: {
        name: null,
        phone: null,
        subject: null,
      },
      isLoading: false,
    };
  },
  methods: {
    async onSubmit() {
      try {
        this.isLoading = true;
        await submitUser(this.formData);
        this.isLoading = false;
        this.$emit("emitUserDetails", true, this.formData);
      } catch (error) {
        console.log(error);
        this.isLoading = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.loader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .animate-spin {
    pointer-events: none;
    width: 1rem;
    height: 1rem;
    margin: 0 0.3rem;
    animation: spin 1s linear infinite;
    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
}
</style>
