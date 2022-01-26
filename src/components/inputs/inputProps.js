const inputProps = {
  label: {
    type: String,
  },
  value: {
    type: [String, Number],
  },
  placeholder: {
    type: String,
    default: null,
  },
  error: {
    type: String,
    default: null,
  },
  min: {
    type: [String, Number],
    default: null,
  },
  max: {
    type: [String, Number],
    default: null,
  },
  maxlength: {
    type: [String, Number],
    default: null,
  },
  minlength: {
    type: [String, Number],
    default: null,
  },
};

export default inputProps;
