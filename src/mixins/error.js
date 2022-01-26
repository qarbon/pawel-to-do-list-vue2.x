import forms from '@/validators/forms'
import validators from '@/validators'
import { isEqual } from 'lodash';

const errorMixin = (form_name) => {
  if (!forms[form_name]) return {};
  const selected_form = forms[form_name]

  return {
    data() {
      return {
        error: Object.fromEntries(Object.keys(selected_form).map(key => [key, null])),
      }
    },
    watch: {
      body: {
        deep: true,
        handler() {
          Object.keys(this.error).forEach((key) => {
            if (!isEqual(this.body[key], this.body_copy[key])) {
              this.validateOne(key);
            }
          });
        },
      },
    },
    computed: {
      form_has_error() {
        return Object.values(this.error).some(el => !!el)
      },
    },
    methods: {
      validateOne(field) {
        if (!selected_form[field]) return
        const error_message = selected_form[field].map((key) => {
          if (key.name && validators[key.name]) {
            return validators[key.name](key.value)(this.body[field], field)
          }
          if (!validators[key]) return false;
          return validators[key](this.body[field], field)
        }).find(el => el)
        this.$set(this.error, field, error_message)
      },
      validateAll() {
        Object.keys(this.error).forEach(field => this.validateOne(field))
      }
    },
  }
}

export default errorMixin;
