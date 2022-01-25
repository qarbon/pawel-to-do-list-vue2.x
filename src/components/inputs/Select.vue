<template>
  <div class="input-wrapper">
    <label class="text-input__label">
      {{ label }}
    </label>
    <div class="text-input__container">
      <v-select
          class="text-input__input"
          :options="options"
          :searchable="false"
          :placeholder="placeholder"
          :value="value"
          :reduce="option => option.id"
          @input="handleInput"
          :clearable="false"
      />
    </div>
    <div class="text-input__error">
      {{ error }}
    </div>
  </div>
</template>
<script>
import inputProps from '@/components/inputs/inputProps'

export default {
  name: 'Select',
  props: {
    ...inputProps,
    type: {
      type: String,
      default: 'text',
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handleInput(option_id) {
      this.$emit('input', option_id)
    },
  },
}
</script>
