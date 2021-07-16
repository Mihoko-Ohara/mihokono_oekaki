<template>
    <div>
        <Header />
            <h1>Calender</h1>
            <div class="l-calender">
                <div class="l-calender_box">
                    <p>July 2021</p>
                    <div class="l-calender_box_img">
                        <div class="l-calender_box_img_left">
                            <img src="../assets/img/calender/202107.png" alt="">
                            <a href="https://mihoko.netlify.app/_nuxt/img/202107.0f3f200.png" download="mihoko_202107.png" target="_blank" rel="noopener noreferrer">
                                <div class="download_btn">
                                        Download
                                </div>
                            </a>
                        </div>
                        <div>
                            <img src="../assets/img/calender/202107_illust.png" alt="">
                            <a href="https://mihoko.netlify.app/_nuxt/img/202107_illust.a78a305.png" download="mihoko_202107_illust.png" target="_blank" rel="noopener noreferrer">
                                <div class="download_btn">
                                        Download
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="l-calender_box">
                    <p>June 2021</p>
                    <div class="l-calender_box_img">
                        <div class="l-calender_box_img_left">
                            <img src="../assets/img/calender/202106.png" alt="">
                            <a href="https://mihoko.netlify.app/_nuxt/img/202106.5afc45f.png" download="mihoko_202106.png" target="_blank" rel="noopener noreferrer">
                                <div class="download_btn">
                                        Download
                                </div>
                            </a>
                        </div>
                        <div>
                            <img src="../assets/img/calender/202106_illust.png" alt="">
                            <a href="https://mihoko.netlify.app/_nuxt/img/202106_illust.0996b8e.png" download="mihoko_202106_illust.png" target="_blank" rel="noopener noreferrer">
                                <div class="download_btn">
                                        Download
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="l-calender_box">
                    <p>May 2021</p>
                    <div class="l-calender_box_img">
                        <div class="l-calender_box_img_left">
                            <img src="../assets/img/calender/202105.png" alt="">
                            <a href="https://mihoko.netlify.app/_nuxt/img/202105.fb6fe32.png" download="mihoko_202105.png" target="_blank" rel="noopener noreferrer">
                                <div class="download_btn">
                                        Download
                                </div>
                            </a>
                        </div>
                        <div>
                            <img src="../assets/img/calender/202105_illust.png" alt="">
                            <a href="https://mihoko.netlify.app/_nuxt/img/202105.fb6fe32.png" download="mihoko_202105_illust.png" target="_blank" rel="noopener noreferrer">
                                <div class="download_btn">
                                        Download
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="l-calender_box">
                    <p>April 2021</p>
                    <div class="l-calender_box_img">
                        <div class="l-calender_box_img_left">
                            <img src="../assets/img/calender/202104.png" alt="">
                            <a href="https://mihoko.netlify.app/_nuxt/img/202104.d53b724.png" download="mihoko_202104.png" target="_blank" rel="noopener noreferrer">
                                <div class="download_btn">
                                        Download
                                </div>
                            </a>
                        </div>
                        <div>
                            <img src="../assets/img/calender/202104_illust.png" alt="">
                            <a href="https://mihoko.netlify.app/_nuxt/img/202104_illust.e2d7f56.png" download="mihoko_202104_illust.png" target="_blank" rel="noopener noreferrer">
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

<style lang="scss">
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