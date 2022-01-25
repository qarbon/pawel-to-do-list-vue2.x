<template>
  <div class="input-wrapper">
    <label class="text-input__label">
      {{ label }}
    </label>
    <div class="text-input__container">
      <input
          :placeholder="placeholder"
          :type="type"
          :value="value"
          @input="handleInput"
          @change="handleChange"
          class="text-input__input"
          :class="{ error }"
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
  name: 'TextInput',
  props: {
    ...inputProps,
    type: {
      type: String,
      default: 'text',
    },
  },
  methods: {
    handleInput(e) {
      let { value } = e.target
      if (value < 0) {
        e.preventDefault()
        return
      }

      this.$emit('input', this.type === 'number' ? Number(value) : value)
    },
    handleChange(e) {
      this.$emit('change', e.target.value)
    },
  },
}
</script>
