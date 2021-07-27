<template>
    <div class="l-gallery-header">
        <Header />
            <h1>Gallery</h1>
            <p class="l-gallery_desc">イラストをクリックすると、SNSアイコン用のフリー画像をご利用いただけます。</p>
        <div class="l-galley">
            <nuxt-link  v-for="item in reverseItems" :key="item.id" :to="`/icon/${item.id}`">
                <img :src="item.img_top" class="fade fade1">
            </nuxt-link>
        </div>
        <Footer />
    </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default{
    computed: {
        ...mapGetters({
            items: 'json/getAll',
        }),

        reverseItems() {
        return this.items.slice().reverse();
        },
    }
}
</script>

<style lang="scss">
    .l-gallery-header{
        .l-header_gallery{
            li{
                background-color: #666;
                color: #fff;
            }
        }
    }

    .l-gallery_desc{
        font-family: 'Noto Sans JP', sans-serif;
        text-align: center;
        font-size: 18px;
        margin-top: 12px;
        margin-bottom: 53px;

        @media screen and (max-width: 599px) {
            font-size: 7px;
            margin-bottom: 18px;
        }
    }

    .l-galley{
        margin: 0 150px;
        padding-bottom: 60px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;

        @media screen and (max-width: 768px) {
            margin: 0 10px;
        }

        @media screen and (max-width: 599px) {
            width: 318px;
            margin: 0 auto;
        }

        img{
            width: 200px;
            height: 200px;
            border-radius: 50%;
            margin-bottom: 50px;

            @media screen and (max-width: 599px) {
                width: 90px;
                height: 90px;
                margin-bottom: 17px;
                margin-right: 8px;
                margin-left: 8px;
            }
        }
    }
</style>