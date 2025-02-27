import { createApp } from 'vue'
import { AnyComponent } from './any-component.js'

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

createApp(AnyComponent).mount('#app')