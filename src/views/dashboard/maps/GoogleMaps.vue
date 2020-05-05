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
                  v-for="(marker, index) in markers"
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
                      :icon="entrance.clients.length>0 ? markerIconYes :markerIconNo"
                    />
                  </div>
                </div>
              </yandex-map>
            </div>
          </v-card-text>
        </base-material-card>
      </v-col>
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
    data: () => ({
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
    }),
    async mounted () {
      this.GET_HOUSES()
      const settings = { lang: 'en_US' }
      await loadYmap(settings)
    },
    computed: {
      ...mapGetters([
        'HOUSES'
      ])
    },
    methods: {
      ...mapActions([
        'GET_HOUSES'
      ]),
      bindListener (marker) {
        this.coords = [marker.longitude, marker.latitude]
        marker.show_entrances = !marker.show_entrances
      },
      unbindListener (marker) {
        marker.show_entrances = !marker.show_entrances
      },
    },
  }
</script>

<style>
  .ymap-container {
    height: 100%
  }
</style>
