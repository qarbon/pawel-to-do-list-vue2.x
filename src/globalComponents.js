import Button from '@/components/Button';
import Checkbox from '@/components/inputs/Checkbox'
import TextInput from '@/components/inputs/TextInput'
import DateInput from '@/components/inputs/DateInput'
import Select from '@/components/inputs/Select'

const GlobalComponents = {
  install(Vue) {
    Vue.component('Button', Button);
    Vue.component('Checkbox', Checkbox);
    Vue.component('TextInput', TextInput);
    Vue.component('DateInput', DateInput);
    Vue.component('Select', Select);
  },
};

export default GlobalComponents;
