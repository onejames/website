<template>
  <div>
    <p>
      This is all about the Coil Accellerator here!
    </p>

    <img id="coilAccelleratorImg" usemap="#image-map" src="static/projectImages/coilAccellerator/coilAccellerator.jpg" style="width:100%">

    <map id="coilAccelleratorImgMap" name="image-map">
        <area target="" alt="Diode array" title="Diode array" href="javascript://" coords="708,284,613,148,1058,158,1127,290" shape="poly">
        <area target="" alt="SCRs" title="SCRs" href="javascript://" coords="1153,435,1815,432,1815,778,1124,788" shape="poly">
        <area target="" alt="Chargers" title="Chargers" href="javascript://" coords="1837,429,1828,50,2137,50,2146,104,2458,104,2468,425" shape="poly">
        <area target="" alt="Battery Bank" title="Battery Bank" href="javascript://" coords="2629,413,3332,413,3335,60,2660,54,2616,107" shape="poly">
        <area target="" alt="Voltage of Capacitor Bank" title="Voltage of Capacitor Bank" href="javascript://" coords="2228,1242,2250,501,2701,492,2651,1235" shape="poly">
        <area target="" alt="Control group" title="Control group" href="javascript://" coords="3231,1320,3202,422,3471,413,3483,448,3546,448,3556,533,3483,592,3509,1302" shape="poly">
        <area target="" alt="Capacitor Bank" title="Capacitor Bank" href="javascript://" coords="14,1078,33,362,471,359,888,794,881,1100" shape="poly">
        <area target="" alt="Breach" title="Breach" href="javascript://" coords="3256,1632,3244,1421,2704,1424,2711,1632" shape="poly">
        <area target="" alt="Primary Coil" title="Primary Coil" href="javascript://" coords="2685,1664,2685,1396,2206,1399,2209,1664" shape="poly">
        <area target="" alt="Secondary Coil" title="Secondary Coil" href="javascript://" coords="1578,1658,1582,1437,1178,1437,1175,1655" shape="poly">
        <area target="" alt="Tertiary Coil" title="Tertiary Coil" href="javascript://" coords="402,1651,408,1406,52,1412,43,1658" shape="poly">
        <area target="" alt="Trigger A" title="Trigger A" href="javascript://" coords="1856,1639,1859,1424,1966,1428,1966,1645" shape="poly">
        <area target="" alt="Trigger B" title="Trigger B" href="javascript://" coords="736,1642,888,1645,897,1421,730,1424" shape="poly">
        <area target="" alt="Bolts" title="Bolts" href="javascript://" coords="3367,1402,3376,1648,3559,1658,3553,1377" shape="poly">
    </map>
  </div>
</template>

<script>
import config from '@/data/config.json'

import Footer from '@/components/Footer.vue'

import ImageMap from 'image-map'

export default {
  name: 'ProjectCoilAccellerator',
  components: {
    Footer
  },
  methods: {

  },
  mounted: function () {
    $.mapster = mapster
    ImageMap('img[usemap]', 500)
  },
  data () {
    return {
      config: config
    }
  }
}
</script>

<style scoped>

</style>
