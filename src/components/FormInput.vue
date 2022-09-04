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

<style lang="scss" scoped>
input {
  border-radius: 0.375rem;
  box-sizing: border-box;
  width: 100%;
  border: 1px solid #d1d5db;
  padding: 0.5rem 1.25rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  &:focus {
    border-color: #4338ca;
    outline: none;
  }
  &:hover {
    border-color: #9ca3af;
  }
}
label {
  display: block;
  text-align: left;
}
.error {
  color: #dc2626;
  text-align: left;
}
</style>
