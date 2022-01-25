import Button from '@/components/Button';
import Checkbox from '@/components/inputs/Checkbox'

const GlobalComponents = {
  install(Vue) {
    Vue.component('Button', Button);
    Vue.component('Checkbox', Checkbox);
  },
};

export default GlobalComponents;
