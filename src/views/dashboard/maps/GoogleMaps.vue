<template>
  <v-container
    id="google-maps"
    fluid
    tag="section"
  >
    <v-row>
      <v-col cols="12">
        <base-material-card
          color="success"
          title="Satellite Map"
          class="px-5 py-3"
        >
          <v-card-text class="px-0 pb-0">
            <div style="width: 100%;">
              <yandex-map
                :coords="coords"
                :zoom="zoom"
                style="height: 750px"
              >
                <div
                  v-for="(marker, index) in HOUSES"
                  :key="index"
                >
                  <ymap-marker
                    :coords="[marker.longitude, marker.latitude]"
                    :marker-id="index"
                    @balloonopen="bindListener(marker)"
                    @balloonclose="unbindListener(marker)"
                  >
                    <marker-view
                      slot="balloon"
                      :marker_data="marker"
                    ></marker-view>
                  </ymap-marker>
                  <div v-if="marker.show_entrances">
                    <ymap-marker
                      v-for="(entrance,indexx) in marker.entrances"
                      :key="indexx"
                      :coords="[entrance.longitude, entrance.latitude]"
                      :marker-id="777"
                      :icon="entrance.cameraNumber>0 ? markerIconYes :markerIconNo"
                    />
                  </div>
                </div>
              </yandex-map>
            </div>
          </v-card-text>
        </base-material-card>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="700px">
        <v-card>
          <v-card-title>
            <span class="headline">House Detail</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-data-table
                  :headers="headers"
                  :items="HOUSE.entrances"
                  :items-per-page="5"
                  class="elevation-1"
                ></v-data-table>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
<!--
            <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
-->
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>
<script>
  import { yandexMap, ymapMarker, loadYmap } from 'vue-yandex-maps'
  import MarkerView from "./marker-view";
  import {mapActions, mapGetters} from 'vuex'
  export default {
    name: 'GoogleMaps',
    components: {MarkerView, yandexMap, ymapMarker },
    data () {
      return {
        headers: [
          {
            text: 'ID',
            align: 'start',
            sortable: false,
            value: 'id',
          },
          {text: 'Full namet', value: 'fullName'},
          {text: 'Phone number', value: 'phoneNumber'},
          {text: 'Apartment number', value: 'apartmentNumber'},
          {text: 'Tariff Plan', value: 'tariffPlan'},
        ],
        dialog: false,
        marker_id: 0,
        markerIconYes: {
          layout: 'default#imageWithContent',
          imageHref: 'https://image.flaticon.com/icons/svg/1828/1828640.svg',
          imageSize: [15, 15],
          imageOffset: [0, 0],
          contentOffset: [0, 15],
        },
        markerIconNo: {
          layout: 'default#imageWithContent',
          imageHref: 'https://image.flaticon.com/icons/svg/1828/1828843.svg',
          imageSize: [15, 15],
          imageOffset: [0, 0],
          contentOffset: [0, 15],
        },
        coords: [
          43.238293, 76.945465,
        ],
        zoom: 10,
      }
    },
    async mounted () {
      this.GET_HOUSES()
      const settings = { lang: 'en_US' }
      await loadYmap(settings)
    },
    computed: {
      ...mapGetters([
        'HOUSES',
        'HOUSE'
      ])
    },
    methods: {
      ...mapActions([
        'GET_HOUSES',
        'GET_HOUSE'
      ]),
      bindListener (marker) {
        this.marker_id = marker.id
        document.getElementById('btn').addEventListener('click', this.handler);
        this.coords = [marker.longitude, marker.latitude]
        marker.show_entrances = true
      },
      unbindListener (marker) {
        this.marker_id = 0
        document.getElementById('btn').removeEventListener('click', this.handler);
        marker.show_entrances = false
      },
      handler() {
        this.dialog=true
        this.GET_HOUSE(this.marker_id)
      },
    },
  }
</script>

<style>
  .ymap-container {
    height: 100%
  }
</style>
