<template>
    <div class="l-calender-header">
        <Header />
            <h1>Calender</h1>
            <div class="l-calender">
                <div class="l-calender_box" v-for="calender in reverseCalenders" :key="calender.id">
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
                    <a href="" class="l-calender_page_back">&lt; back</a>
                    <a href="" class="l-calender_page_next">next ></a>
            </div>

        <IllustUse />
        <Footer />
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default{
    computed: {
        ...mapGetters({
            calenders: 'json/getAll2',
        }),

        reverseCalenders() {
        return this.calenders.slice().reverse();
    },
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
            width: 912px;
            font-size: 24px;
            margin-bottom: 60px;
            margin-right: auto;
            margin-left: auto;
            font-family: 'Assistant', sans-serif;

            @media screen and (max-width: 599px) {
                width: 313px;
                font-size: 12px;
                margin-bottom: 40px;
                margin-right: auto;
                margin-left: auto;
            }

            &_back{
                float: left;
            }
            &_next{
                float: right;
            }
        }
    }
</style>