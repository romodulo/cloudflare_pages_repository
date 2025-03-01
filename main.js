import { createApp } from 'vue'
import AComponent from './a-component.js'
import BComponent from './b-component.js'

// createApp({ setup(){
//     const count = ref(0)
//     return { count }
//   },
//   template: `
//     <button @click="count++">
//         You clicked me {{ count }} times.
//     </button>
//   `
// }).mount('#app')



createApp(AComponent).mount('#app')

createApp(BComponent).mount('#app-2')

