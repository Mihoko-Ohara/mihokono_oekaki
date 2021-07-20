<template>
    <div>
        {{ $route.params.id }}
        <img :src="getAll[($route.params.id)-1].img_top" width="100px" height="100px">
        <div v-for="icon in getAll[($route.params.id)-1].img_detail" :key="icon.img_detail">
                <img :src="icon.img" width="100px" height="100px">
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      getAll: 'json/getAll',
    }),
  },
}
</script>
