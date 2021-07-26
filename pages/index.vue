<template>
    <div>
        <main class="l-main fade fade1">
            <nav class="l-main-gnav fade fade2">
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
        <nuxt-link to="/gallery">
            <div class="l-gallery">
                <img src="/img/gallery/mihoko09.png" class="fade_img fade3">
                <img src="/img/gallery/mihoko34.png" class="fade_img fade4">
                <img src="/img/gallery/mihoko23.png" class="fade_img fade5">
                <img src="/img/gallery/mihoko12.png" class="fade_img fade6">
                <img src="/img/gallery/mihoko01.png" class="fade_img fade7">
                <img src="/img/gallery/mihoko30.png" class="fade_img fade8">
                <img src="/img/gallery/mihoko02.png" class="fade_img fade9">
                <img src="/img/gallery/mihoko05.png" class="fade_img fade10">
                <img src="/img/gallery/mihoko17.png" class="fade_img fade11">
                <img src="/img/gallery/mihoko32.png" class="fade_img fade12">
                <img src="/img/gallery/mihoko28.png" class="fade_img fade13">
                <img src="/img/gallery/mihoko15.png" class="fade_img fade14">
                <img src="/img/gallery/mihoko20.png" class="fade_img fade15">
                <img src="/img/gallery/mihoko25.png" class="fade_img fade16">
                <img src="/img/gallery/mihoko21.png" class="fade_img fade17">
                <img src="/img/gallery/mihoko03.png" class="fade_img fade18">
            </div>
        </nuxt-link>
    </div>
</template>

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