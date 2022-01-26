<template>
  <div class="input-wrapper">
    <label class="text-input__label" v-if="label">
      {{ label }}
    </label>
    <div class="text-input__container">
      <textarea
          :placeholder="placeholder"
          :value="value"
          @input="handleInput"
          @change="handleChange"
          class="text-input__input text-input__textarea"
          :class="{ error }"
          :maxlength="maxlength"
          :rows="rows"
      />
    </div>
    <div class="text-input__error" v-if="!hide_error">
      {{ error }}
    </div>
  </div>
</template>
<script>
import inputProps from '@/components/inputs/inputProps'

export default {
  name: 'Textarea',
  props: {
    ...inputProps,
    type: {
      type: String,
      default: 'text',
    },
    hide_error: {
      type: Boolean,
      default: false,
    },
    rows: {
      type: Number,
      default: 4,
    }
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
