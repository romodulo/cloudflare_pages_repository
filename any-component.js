import { ref } from 'vue'

export default {
  setup() {
    const count = ref(0)
    return { count }
  },
  template: `
    <button @click="count++">
        You clicked me {{ count }} times.
    </button>
  `
}

// export default {
//     setup() {
//       const count = ref(0)
//       return { count }
//     },
//     template: '#app'
//   }

// i-could-use-this as template

// template: `
// <button @click="count++">
//   You clicked me {{ count }} times.
// </button>`