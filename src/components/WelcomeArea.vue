<template>
    <div>
    <barrita></barrita>
    <parallax speedFactor="0.40" direction ="down">
    <img src="../img/Veterinaria_El_Sol_Frente_Noche.jpg" alt="very cool bg">
    </parallax>
    </div>
    
</template>

<script>
import Barrita from './Barrita.vue';
import Parallax from 'vue-parallaxy';
export default {
  components: {
    Barrita,
    Parallax
  }
};
</script>

<style>
body {
}
</style>
