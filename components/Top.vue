<template>
    <div>
        <main class="l-main">
            <nav class="l-main-gnav">
                <ul>
                    <li>
                        <a href="">Gallery</a>
                    </li>
                    <li>
                        <a href="">Shop</a>
                    </li>
                    <li>
                        <a href="">Calender</a>
                    </li>
                    <li>
                        <a href="">Works</a>
                    </li>
                    <div class="l-main-gnav_sns">
                        <li>
                            <a href="">
                                <img src="../assets/img/common/instagram.svg" alt="instagram">
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="../assets/img/common/twitter.svg" alt="twitter">
                            </a>
                        </li>
                    </div>
                </ul>
            </nav>
        </main>
    </div>
</template>

<style lang="scss">
    .l-main{
        font-family: 'Assistant', sans-serif;
        background-image: url(../assets/img/common/image_top.svg);
        background-size: 700px 550px;
        min-height: 550px;
        background-repeat: no-repeat;
        background-position: 65%;
        position: relative;

        &-gnav{
            margin-left: 30%;
            margin-top: 200px;
            position: absolute;
            z-index: 10;

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
</style>