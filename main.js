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



const app = createApp(AComponent)
app.use(Primevue.Config, {theme: {preset: PrimeVue.Themes.Aura}})
app.component('p-datepicker', PrimeVue.DatePicker)
app.mount('#app')

createApp(BComponent).mount('#app-2')

