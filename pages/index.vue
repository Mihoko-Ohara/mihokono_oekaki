<template>
    <div>
        <main class="l-main">
            <nav class="l-main-gnav">
                <ul>
                    <li>
                        <nuxt-link to="/gallery">Gallery</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/shop">Shop</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/calender">Calender</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/works">Works</nuxt-link>
                    </li>
                    <div class="l-main-gnav_sns">
                        <li>
                            <a href="https://www.instagram.com/mihokono_oekaki" target="_blank" rel="noopener noreferrer">
                                <img src="../assets/img/common/instagram.svg" alt="instagram">
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/mihokono_oekaki" target="_blank" rel="noopener noreferrer">
                                <img src="../assets/img/common/twitter.svg" alt="twitter">
                            </a>
                        </li>
                    </div>
                </ul>
            </nav>
        </main>
        <div class="l-gallery slider">
            <img src="../assets/img/top/illust_01.png" alt="">
            <img src="../assets/img/top/illust_02.png" alt="">
            <img src="../assets/img/top/illust_03.png" alt="">
            <img src="../assets/img/top/illust_04.png" alt="">
            <img src="../assets/img/top/illust_05.png" alt="">
            <img src="../assets/img/top/illust_06.png" alt="">
            <img src="../assets/img/top/illust_07.png" alt="">
            <img src="../assets/img/top/illust_08.png" alt="">
            <img src="../assets/img/top/illust_09.png" alt="">
            <img src="../assets/img/top/illust_10.png" alt="">
            <img src="../assets/img/top/illust_11.png" alt="">
            <img src="../assets/img/top/illust_12.png" alt="">
            <img src="../assets/img/top/illust_13.png" alt="">
            <img src="../assets/img/top/illust_14.png" alt="">
            <img src="../assets/img/top/illust_15.png" alt="">
            <img src="../assets/img/top/illust_16.png" alt="">
        </div>
    </div>
</template>

<script>
export default{
  methods: {
    // execHideElement(selector) {
    //   // jQuery はDOM操作のライブラリのため browser のみで動作させる
    //   if (process.browser) {
    //     // main.js を読み込む
    //     const main = require('../assets/js/main')
    //     // main.js の hideElement(selector) を発火する
    //     main.hideElement(selector)
    //   }
    // }
  }
}
</script>

<style lang="scss">
    .l-main{
        font-family: 'Assistant', sans-serif;
        background-image: url(../assets/img/common/image_top.svg);
        background-size: 700px 520px;
        min-height: 520px;
        background-repeat: no-repeat;
        background-position: 65%;
        position: relative;

        @media screen and (max-width: 599px) {
            background-size: 600px 540px;
            background-position: 50%;
            background-color:rgba(255,255,255,0.7);
            background-blend-mode:lighten;
        }

        &-gnav{
            margin-left: 30%;
            margin-top: 200px;
            position: absolute;
            z-index: 10;

            @media screen and (max-width: 599px) {
                margin-left: 15%;
                margin-top: 215px;
            }

            li{
                font-size: 36px;
                margin-bottom: 5px;
            }

            &_sns{
                display: flex;
                margin-top: 10px;

                li{
                    &:first-child{
                        margin-right: 15px;
                    }
                }
            }
        }
    }

    .l-gallery{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;

        img{
            opacity: 0.8;
            height: 130px;
            width: 12.5%;
            object-fit: cover;

            @media screen and (max-width: 599px) {
                height: 70px;
                width: 25%;
            }
        }
    }
</style>