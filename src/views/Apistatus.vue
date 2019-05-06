<template>
  <div>{{ apiStatus }}</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import axios from 'axios'
@Component({})
export default class HelloWorld extends Vue {
  apiStatus: string = 'now loading ...'
  mounted(): void {
    axios
      .get('https://api.riders-book.com/healthcheck')
      .then(response => (this.apiStatus = response.data.status))
      .catch(err => (this.apiStatus = err))
  }
}
</script>
