<template>
  <div>
    <ValidationProvider :name="labelName" :rules="validationRules" v-slot="{ errors }">
      <div class="form-fields">
        <label :for="labelName">{{ label }}</label>
        <input :type="inputType" :value="value" @input="updateValue" />
        <!-- error message -->
        <p class="error">{{ errors[0] }}</p>
      </div>
    </ValidationProvider>
  </div>
</template>

<script>
export default {
  props: {
    value: String,
    labelName: String,
    label: String,
    validationRules: String,
    inputType: String,
  },
  methods: {
    updateValue(event) {
      this.$emit("input", event.target.value);
    },
  },
};
</script>

<style></style>
