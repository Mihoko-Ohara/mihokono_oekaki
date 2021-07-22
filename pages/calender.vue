<template>
  <v-app>
    <div class="l-calender-header">
        <Header />
            <h1>Calender</h1>
            <div class="l-calender">
                <div class="l-calender_box" v-for="calender in displayLists" :key="calender.id">
                    <p>{{ calender.title }}</p>
                    <div class="l-calender_box_img" v-for="img in calender.calender_detail" :key="img.calender">
                        <div class="l-calender_box_img_left">
                            <img :src="img.num">
                            <a :href="`https://mihoko.netlify.app${img.num}`" download target="_blank" rel="noopener noreferrer">
                                <div class="download_btn">
                                        Download
                                </div>
                            </a>
                        </div>
                        <div>
                            <img :src="img.illust">
                            <a :href="`https://mihoko.netlify.app${img.illust}`" download target="_blank" rel="noopener noreferrer">
                                <div class="download_btn">
                                        Download
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="l-calender_page">
                <v-pagination
                v-model="page"
                :length="length"
                @input = "pageChange"
                ></v-pagination>
            </div>
        <IllustUse />
        <Footer />
    </div>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'App',
    data () {
        return {
            page: 1,
            length:0,
            displayLists: [],
            pageSize: 2,
        }
    },
    methods: {
        pageChange: function(pageNumber){
            this.displayLists = this.calenders.slice().reverse().slice(this.pageSize*(pageNumber -1), this.pageSize*(pageNumber));
        },
    },
    computed: {
        ...mapGetters({
            calenders: 'json/getAll2',
        }),
    },
    mounted: function(){
        this.length = Math.ceil(this.calenders.length/this.pageSize);

        this.displayLists = this.calenders.slice().reverse().slice(0,this.pageSize);
    }
}
</script>

<style lang="scss">
    .l-calender-header{
        .l-header_calender{
            li{
                background-color: #666;
                color: #fff;
            }
        }
    }

    .l-calender{
        font-family: 'Assistant', sans-serif;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
        margin: 53px 150px 0 150px;

        @media screen and (max-width: 599px) {
            margin: 20px 150px 0 150px;
        }

        &_box{
            p{
                font-size: 18px;
                margin-bottom: 5px;

                @media screen and (max-width: 599px) {
                    font-size: 12px;
                }
            }

            &_img{
                    display: flex;
                    margin-bottom: 48px;

                    @media screen and (max-width: 599px) {
                        margin-bottom: 25px;
                    }

                img{
                    width: 200px;
                    height: 282px;

                    @media screen and (max-width: 599px) {
                        width: 120px;
                        height: 169px;
                    }
                }

                .download_btn{
                    width: 80px;
                    height: 30px;
                    color: #fff;
                    font-size: 12px;
                    background-color: #000;
                    margin: 5px auto 0 auto;
                    text-align:center;
                    line-height:30px;
                    border-radius: 3px;

                    @media screen and (max-width: 599px) {
                        width: 50px;
                        height: 20px;
                        font-size: 9px;
                        line-height: 20px;
                    }
                }

                &_left{
                    margin-right: 22px;
                }
            }
        }

        &_page{
            margin-bottom: 30px;
        }
    }

    // vuetify
    .v-application{
        font-family: 'Assistant', sans-serif!important;
    }

    .v-pagination__navigation{
        box-shadow: 0px 0px!important;
    }

    .v-pagination__item{
        box-shadow: 0px 0px!important;
        border-radius: 50%!important;
        @media screen and (max-width: 599px) {
            font-size: 12px!important;
            height: 30px;
            min-width: 30px;
        }
    }

    .mdi-chevron-left::before{
        font-family: 'Assistant', sans-serif!important;
        content: "<"!important;
    }

    .mdi-chevron-right::before{
        font-family: 'Assistant', sans-serif!important;
        content: ">"!important;
    }

    .v-pagination__navigation--disabled{
        opacity: 0!important;
    }

    .v-application .l-calender_page .v-pagination .primary{
        background-color: #666!important;
        border-color: #666!important;
    }

    @media screen and (max-width: 599px) {
        .v-icon.v-icon{
            font-size: 20px!important;
        }
    }

    .v-application ol, .v-application ul{
        padding-left: 0px!important;
    }

    .v-application p{
        padding-bottom: 0px!important;
    }

    .theme--light.v-pagination .v-pagination__item{
        border: 0px none!important;
    }
</style>