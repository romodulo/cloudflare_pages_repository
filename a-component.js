import { ref } from 'vue'

export default {
  setup(){
      const count = ref(0)
      const date = ref()
      return { count, date }
  },
  template: `
      <p>
        Component-A:
      </p>
      
      <p>
        {
      </p>
      
      <button @click="count++">
          You clicked me {{ count }} times app-component.
      </button>
      
      <h1>A-Component--Title</h1>
      
      <button class="button-with-class-width">
        Button
      </button>

      <p-datepicker v-model="date"></p-datepicker>
      <br /> <br />
      {{ date }}
      
      <p>}</p>
      <p></p>
  `
}
