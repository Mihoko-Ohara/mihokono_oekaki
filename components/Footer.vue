<template>
    <div>
        <footer class="l-footer">
            <nav class="l-footer_gnav">
                <ul class="l-footer_ul">
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
                </ul>
            </nav>
        </footer>
    </div>
</template>
<style lang="scss">
    .l-footer{
        display: none;
    }
    @media screen and (max-width: 834px) {
        .l-footer{
            position: fixed;
            bottom: 0;
            left: 0;
            display: block;
            margin: 18px auto 20px 34px;

            &_ul{
                display: flex;
                padding-left: 0;
                margin: 0;
            }

            img{
                width: 30px;
                height: 30px;

                &:first-child{
                    margin-right: 15px;
                }
            }
        }
    }
    @media screen and (max-width: 834px) {
        img{
            width: 25px;
            height: 25px;
        }
    }
</style>