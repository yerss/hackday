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
                    @balloonopen="bindListener"
                    @balloonclose="unbindListener"
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
      markers: [
        {
          id: 1,
          address: 'проспект Назарбаева, 220',
          latitude: 76.94904,
          longitude: 43.239652,
          show_entrances: false,
          entrances: [
            {
              id: 2,
              houseId: 1,
              number: 1,
              latitude: 76.95068257101302,
              longitude: 43.23929363282693,
              cameraNumber: 0,
              clients: [],
            },
            {
              id: 3,
              houseId: 1,
              number: 2,
              latitude: 76.95046293292604,
              longitude: 43.23927918405099,
              cameraNumber: 0,
              clients: [],
            },
            {
              id: 4,
              houseId: 1,
              number: 3,
              latitude: 76.95025137967664,
              longitude: 43.239265063652994,
              cameraNumber: 1,
              clients: [],
            },
            {
              id: 5,
              houseId: 1,
              number: 4,
              latitude: 76.95000973286521,
              longitude: 43.239248972962876,
              cameraNumber: 0,
              clients: [],
            },
            {
              id: 6,
              houseId: 1,
              number: 5,
              latitude: 76.94979009477825,
              longitude: 43.239234524176275,
              cameraNumber: 0,
              clients: [],
            },
            {
              id: 7,
              houseId: 1,
              number: 6,
              latitude: 76.94957270247947,
              longitude: 43.23922040376785,
              cameraNumber: 0,
              clients: [],
            },
            {
              id: 8,
              houseId: 1,
              number: 7,
              latitude: 76.9493517169196,
              longitude: 43.23921810509639,
              cameraNumber: 0,
              clients: [],
            },
            {
              id: 9,
              houseId: 1,
              number: 8,
              latitude: 76.94919406258722,
              longitude: 43.23930315588191,
              cameraNumber: 0,
              clients: [],
            },
            {
              id: 10,
              houseId: 1,
              number: 9,
              latitude: 76.94915408755709,
              longitude: 43.23944370286388,
              cameraNumber: 0,
              clients: [],
            },
            {
              id: 11,
              houseId: 1,
              number: 10,
              latitude: 76.94913342630555,
              longitude: 43.23961249016304,
              cameraNumber: 0,
              clients: [],
            },
            {
              id: 12,
              houseId: 1,
              number: 11,
              latitude: 76.94911276505401,
              longitude: 43.23977799320537,
              cameraNumber: 0,
              clients: [],
            },
            {
              id: 13,
              houseId: 1,
              number: 12,
              latitude: 76.94909210380249,
              longitude: 43.23995006334866,
              cameraNumber: 3,
              clients: [],
            },
          ],
        },
        {
          id: 2,
          address: 'проспект Назарбаева, 189/2',
          latitude: 76.947145,
          longitude: 43.239724,
          show_entrances: false,
          entrances: [
            {
              id: 14,
              houseId: 2,
              number: 8,
              latitude: 76.9464842945327,
              longitude: 43.23975566345623,
              cameraNumber: 0,
              clients: [],
            },
            {
              id: 15,
              houseId: 2,
              number: 7,
              latitude: 76.94668911041745,
              longitude: 43.239769455361085,
              cameraNumber: 0,
              clients: [],
            },
            {
              id: 16,
              houseId: 2,
              number: 6,
              latitude: 76.94686877347429,
              longitude: 43.23978160536989,
              cameraNumber: 0,
              clients: [],
            },
            {
              id: 17,
              houseId: 2,
              number: 5,
              latitude: 76.94704888568876,
              longitude: 43.239794083754774,
              cameraNumber: 0,
              clients: [],
            },
            {
              id: 18,
              houseId: 2,
              number: 4,
              latitude: 76.94721327738574,
              longitude: 43.23980492024481,
              cameraNumber: 0,
              clients: [],
            },
            {
              id: 19,
              houseId: 2,
              number: 3,
              latitude: 76.9473655418264,
              longitude: 43.23981542835453,
              cameraNumber: 3,
              clients: [],
            },
            {
              id: 20,
              houseId: 2,
              number: 2,
              latitude: 76.94755823045485,
              longitude: 43.23982856348909,
              cameraNumber: 0,
              clients: [],
            },
            {
              id: 21,
              houseId: 2,
              number: 1,
              latitude: 76.94773519856584,
              longitude: 43.23984038510777,
              cameraNumber: 0,
              clients: [],
            },
          ],
        },
        {
          id: 3,
          address: 'улица Масанчи, 71',
          latitude: 76.929825,
          longitude: 43.24572,
          show_entrances: false,
          entrances: [
            {
              id: 22,
              houseId: 3,
              number: 1,
              latitude: 76.92982908000747,
              longitude: 43.24555061361166,
              cameraNumber: 3,
              clients: [],
            },
          ],
        },
        {
          id: 4,
          address: 'улица Кабанбай Батыра, 138',
          latitude: 76.934551,
          longitude: 43.24861,
          show_entrances: false,
          entrances: [
            {
              id: 23,
              houseId: 4,
              number: 4,
              latitude: 76.9348807560077,
              longitude: 43.2485769146682,
              cameraNumber: 0,
              clients: [],
            },
            {
              id: 24,
              houseId: 4,
              number: 3,
              latitude: 76.93464809234912,
              longitude: 43.248562468109554,
              cameraNumber: 0,
              clients: [],
            },
            {
              id: 25,
              houseId: 4,
              number: 2,
              latitude: 76.93440240311892,
              longitude: 43.24854736488547,
              cameraNumber: 4,
              clients: [],
            },
            {
              id: 26,
              houseId: 4,
              number: 1,
              latitude: 76.93417288356383,
              longitude: 43.24853291831975,
              cameraNumber: 6,
              clients: [],
            },
          ],
        },
        {
          id: 5,
          address: 'проспект Сакена Сейфуллина,510',
          latitude: 76.933976,
          longitude: 43.248203,
          show_entrances: false,
          entrances: [
            {
              id: 27,
              houseId: 5,
              number: 7,
              latitude: 76.93403454301009,
              longitude: 43.24851551677011,
              cameraNumber: 8,
              clients: [],
            },
            {
              id: 28,
              houseId: 5,
              number: 6,
              latitude: 76.93405116184283,
              longitude: 43.24836284258221,
              cameraNumber: 2,
              clients: [],
            },
            {
              id: 29,
              houseId: 5,
              number: 5,
              latitude: 76.93407137393672,
              longitude: 43.24818127471295,
              cameraNumber: 0,
              clients: [],
            },
            {
              id: 30,
              houseId: 5,
              number: 4,
              latitude: 76.93409023855769,
              longitude: 43.24800988465089,
              cameraNumber: 3,
              clients: [],
            },
            {
              id: 31,
              houseId: 5,
              number: 3,
              latitude: 76.93411000149395,
              longitude: 43.24783127073606,
              cameraNumber: 7,
              clients: [],
            },
            {
              id: 32,
              houseId: 5,
              number: 2,
              latitude: 76.93412931527253,
              longitude: 43.24765593965222,
              cameraNumber: 9,
              clients: [],
            },
            {
              id: 33,
              houseId: 5,
              number: 1,
              latitude: 76.93414817989353,
              longitude: 43.247484219764694,
              cameraNumber: 1,
              clients: [],
            },
          ],
        },
        {
          id: 6,
          address: 'улица Шагабутдинова, 31',
          latitude: 76.919603,
          longitude: 43.25731,
          show_entrances: false,
          entrances: [
            {
              id: 34,
              houseId: 6,
              number: 6,
              latitude: 76.91960445544362,
              longitude: 43.256955665538285,
              cameraNumber: 1,
              clients: [],
            },
            {
              id: 35,
              houseId: 6,
              number: 5,
              latitude: 76.91958154840387,
              longitude: 43.25710405033393,
              cameraNumber: 2,
              clients: [],
            },
            {
              id: 36,
              houseId: 6,
              number: 4,
              latitude: 76.91955504810299,
              longitude: 43.25727278835374,
              cameraNumber: 1,
              clients: [],
            },
            {
              id: 37,
              houseId: 6,
              number: 3,
              latitude: 76.9195325902209,
              longitude: 43.257415591562896,
              cameraNumber: 1,
              clients: [],
            },
            {
              id: 38,
              houseId: 6,
              number: 2,
              latitude: 76.91951103065406,
              longitude: 43.25755675302436,
              cameraNumber: 1,
              clients: [],
            },
            {
              id: 39,
              houseId: 6,
              number: 1,
              latitude: 76.91949171687546,
              longitude: 43.257679530399585,
              cameraNumber: 2,
              clients: [],
            },
          ],
        },
        {
          id: 7,
          address: 'улица Муратбаева, 94',
          latitude: 76.91848,
          longitude: 43.257225,
          show_entrances: false,
          entrances: [
            {
              id: 40,
              houseId: 7,
              number: 6,
              latitude: 76.9185192905804,
              longitude: 43.25758465699517,
              cameraNumber: 1,
              clients: [],
            },
            {
              id: 41,
              houseId: 7,
              number: 5,
              latitude: 76.91854085014722,
              longitude: 43.25744546529501,
              cameraNumber: 1,
              clients: [],
            },
            {
              id: 42,
              houseId: 7,
              number: 4,
              latitude: 76.91856330802932,
              longitude: 43.25730233387296,
              cameraNumber: 1,
              clients: [],
            },
            {
              id: 43,
              houseId: 7,
              number: 3,
              latitude: 76.91858486759614,
              longitude: 43.257163798091305,
              cameraNumber: 1,
              clients: [],
            },
            {
              id: 44,
              houseId: 7,
              number: 2,
              latitude: 76.91860777463589,
              longitude: 43.257016398297345,
              cameraNumber: 1,
              clients: [],
            },
            {
              id: 45,
              houseId: 7,
              number: 1,
              latitude: 76.91862888504505,
              longitude: 43.25688015986086,
              cameraNumber: 1,
              clients: [],
            },
          ],
        },
        {
          id: 8,
          address: 'улица Муратбаева, 108',
          latitude: 76.918668,
          longitude: 43.255649,
          show_entrances: false,
          entrances: [
            {
              id: 46,
              houseId: 8,
              number: 3,
              latitude: 76.91878294611628,
              longitude: 43.255452099945,
              cameraNumber: 2,
              clients: [],
            },
            {
              id: 47,
              houseId: 8,
              number: 2,
              latitude: 76.91876048823418,
              longitude: 43.25566614693643,
              cameraNumber: 2,
              clients: [],
            },
            {
              id: 48,
              houseId: 8,
              number: 1,
              latitude: 76.91873668287914,
              longitude: 43.25589266823397,
              cameraNumber: 1,
              clients: [],
            },
          ],
        },
      ],
    }),
    async mounted () {
      const settings = { lang: 'en_US' }
      await loadYmap(settings)
    },
    methods: {
      onClick (marker) {
        this.coords = [marker.longitude, marker.latitude]
        marker.show_entrances = !marker.show_entrances
      },
      bindListener () {
      },
      unbindListener () {
      },
    },
  }
</script>

<style>
  .ymap-container {
    height: 100%
  }
</style>
