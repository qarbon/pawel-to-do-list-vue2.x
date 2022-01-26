<template>
  <div>
    <label class="text-input__label">
      {{ label }}
    </label>
    <div class="date-input__container">
      <input
          v-model="body.day" placeholder="DD" v-mask="dayMask"
          class="text-input__input"
          :class="{ error }"
      />
      <input
          v-model="body.month" placeholder="MM" v-mask="monthMask"
          class="text-input__input"
          :class="{ error }"
      />
      <input
          v-model="body.year" placeholder="YYYY" v-mask="yearMask"
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
import { getLeadingZero } from '@/utils'
import dayjs from 'dayjs'

export default {
  props: {
    ...inputProps,
  },
  data() {
    return {
      body: {
        day: '',
        month: '',
        year: '',
      },
    }
  },
  watch: {
    body: {
      deep: true,
      handler(value) {
        if (value === this.value) return
        this.$emit('input', `${value.day}/${value.month}/${value.year}`)
      },
    },
    value(value) {
      const join_date = `${this.body.day}/${this.body.month}/${this.body.year}`
      if (value === join_date || !value) {
        return
      }
      const [day, month, year] = this.value.split(/\//g)
      this.$set(this.body, 'day', day)
      this.$set(this.body, 'month', month)
      this.$set(this.body, 'year', year)
    },
  },
  computed: {
    get_days_in_month() {
      if (!this.body.month) {
        return '31'
      }
      if (!this.body.year && this.body.month) {
        return dayjs(`${this.current_year}-${this.body.month}-01`).daysInMonth()
      }
      return dayjs(`${this.body.year}-${this.body.month}-01`).daysInMonth()
    },
    current_year() {
      return dayjs().year()
    },
  },
  methods: {
    monthMask(value) {
      if (isNaN(Number(value)) || Number(value) <= 0) return []
      if (Number(value) > 12) return [...'12']
      return [...getLeadingZero(value)]
    },
    dayMask(value) {
      if (isNaN(Number(value)) || Number(value) <= 0) return []
      if (Number(this.body.day) > Number(this.get_days_in_month)) return [...getLeadingZero(this.get_days_in_month)]
      return [...getLeadingZero(value)]
    },
    yearMask(value) {
      if (isNaN(Number(value)) || Number(value) <= 0) return []
      if (Number(value) > 9999) return [...'9999']
      return [...value.toString()]
    },
  },
}
</script>
