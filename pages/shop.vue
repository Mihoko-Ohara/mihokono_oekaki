<template>
    <div class="l-shop-header">
        <Header />
            <h1>Shop</h1>
            <div class="l-shop">
                <div class="suzuri-widget-product fade fade1" data-suzuri-product-id="16600680" data-suzuri-item-variant-id="1480">
                    <a href="https://suzuri.jp/mihokono_oekaki/6733680/reusable-bag/m/white" target="_blank" rel="noopener noreferrer">
                        <img src="../assets/img/shop/shop01.webp">
                    </a>
                </div>
                <div class="suzuri-widget-product fade fade1" data-suzuri-product-id="16600701" data-suzuri-item-variant-id="81">
                    <a href="https://suzuri.jp/mihokono_oekaki/6733680/tote-bag/m/natural" target="_blank" rel="noopener noreferrer">
                        <img src="../assets/img/shop/shop02.webp">
                    </a>
                </div>
                <div class="suzuri-widget-product fade fade1" data-suzuri-product-id="16600548" data-suzuri-item-variant-id="1">
                    <a href="https://suzuri.jp/mihokono_oekaki/6733642/t-shirt/s/white" target="_blank" rel="noopener noreferrer">
                        <img src="../assets/img/shop/shop03.webp">
                    </a>
                </div>
            </div>
            <p class="l-shop_link">
                <a href="https://suzuri.jp/mihokono_oekaki" target="_blank" rel="noopener noreferrer">> ショップを見る</a>
            </p>
        <Footer />
    </div>
</template>

<style lang="scss">
    .l-shop-header{
        .l-header_shop{
            li{
                background-color: #666;
                color: #fff;
            }
        }
    }

    .l-shop{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
        margin-top: 53px;

        @media screen and (max-width: 599px) {
            margin-top: 20px;
        }

        img{
            width: 323px;
            height: 323px;
        }
    }

    .l-shop_link{
        font-family: 'Noto Sans JP', sans-serif;
        font-size: 20px;
        font-weight: 300;
        text-align: center;
        margin-top: 73px;

        @media screen and (max-width: 599px) {
            margin-top: 40px;
            padding-bottom: 60px;
            font-size: 12px;
        }
    }
</style>