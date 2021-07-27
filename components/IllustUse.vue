<template>
    <div class="l-use-padding">
        <div class="l-use">
            <p class="l-use_title">イラストのご利用について</p>
            <p class="l-use_desc">
                本サイトからお好みのイラストを選択し、<br class="l-pc">画像(PNG形式)をダウンロードしてご利用ください。<br>
                ※イラストはSNSアイコン、壁紙のみ利用可能です。<br>
                その他の利用や加工、無断転載等はお控えください。<br>
            </p>
        </div>
    </div>
</template>

<style lang="scss">
    .l-use{
        font-family: 'Noto Sans JP', sans-serif;
        text-align: center;
        padding: 19px 0;
        border: 0.3px solid #999;
        width: 912px;
        margin: 0 auto 47px auto;

        @media screen and (max-width: 834px) {
            width: 600px;
        }

        @media screen and (max-width: 599px) {
            width: 313px;
        }

        &_title{
            font-size: 18px;
            margin-bottom: 5px;

            @media screen and (max-width: 599px) {
                font-size: 12px;
            }
        }

        &_desc{
            font-size: 13px;

            @media screen and (max-width: 599px) {
                font-size: 8px;
            }
        }

        @media screen and (max-width: 599px) {
            &-padding{
                padding-bottom: 30px;
            }
        }
    }
</style>