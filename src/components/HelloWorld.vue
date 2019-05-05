<template>
  <v-container fluid grid-list-lg>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card color="blue-grey darken-2" class="white--text">
          <v-card-title primary-title>
            <div>
              <div class="headline">Unlimited music now</div>
              <span
                >Listen to your favorite artists and albums whenever and
                wherever, online and offline.</span
              >
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat dark>Listen now</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>

      <v-flex xs12>
        <v-card color="cyan darken-2" class="white--text">
          <v-layout>
            <v-flex xs5>
              <div class="pl-2">
                <v-img
                  src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
                  height="125px"
                  contain
                ></v-img>
              </div>
            </v-flex>
            <v-flex xs7>
              <v-card-title primary-title>
                <div>
                  <div class="headline">Supermodel</div>
                  <div>Foster the People</div>
                  <div>(2014)</div>
                </div>
              </v-card-title>
            </v-flex>
          </v-layout>
          <v-divider light></v-divider>
          <v-spacer></v-spacer>
        </v-card>
      </v-flex>

      <v-flex xs12>
        <v-card color="purple" class="white--text">
          <v-layout row>
            <v-flex xs7>
              <v-card-title primary-title>
                <div>
                  <div class="headline">Halycon Days</div>
                  <div>Ellie Goulding</div>
                  <p>
                    {{ info }}
                  </p>
                </div>
              </v-card-title>
            </v-flex>
            <v-flex xs5>
              <div class="pr-2">
                <v-img
                  src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"
                  height="125px"
                  contain
                ></v-img>
              </div>
            </v-flex>
          </v-layout>
          <v-divider light></v-divider>
          <v-spacer></v-spacer>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import axios from 'axios'
@Component({})
export default class HelloWorld extends Vue {
  info: string = ''
  mounted(): void {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (this.info = response.data.bpi))
  }
}
</script>

<style></style>
