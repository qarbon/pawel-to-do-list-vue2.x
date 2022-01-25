import { capitalizeFirstLetter } from '@/utils'
import dayjs from 'dayjs'

const validators = {
  required: (value, field_name) => {
    const name = capitalizeFirstLetter(field_name.replace(/_/g, ' '));
    return value ? false : `Field ${name} is required`
  },
  number: value => typeof value === 'number' ? false : 'Provided value should be a number',
  select: value => typeof value === 'number' && value > 0 ? false : 'An option has to be selected',
  min_length: length => value => value && value.length < length ? `Value should be at least ${length} characters long` : false,
  date: value => {
    if (!value) return false;
    const reg_exp = /\d{2}\/\d{2}\/\d{4}/g
    if (!reg_exp.test(value)) return 'Date should have DD/MM/YYYY format'
    const [day, month, year] = value.split(/\//g)
    if (dayjs(`${year}-${month}-${day}`, 'YYYY-MM-DD').format('YYYY-MM-DD') !== `${year}-${month}-${day}`) return 'Provided value is not a proper date'
    return false
  },
  future_date: value => {
    if (!value) return false
    const [day, month, year] = value.split(/\//g)
    const date = dayjs(`${year}-${month}-${day}`);
    if (dayjs().isAfter(date) && !dayjs().isSame(date, 'day')) return 'Date needs to be from the future';
    return false;
  },
}

export default validators
