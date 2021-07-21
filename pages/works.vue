<template>
    <div class="l-works-header">
        <Header />
            <h1>Works</h1>
            <div class="l-works">
                <h2>イラストのご依頼について</h2>
                <div class="l-works_acd">
                    <input id="acd-check1" class="l-works_acd_check" type="checkbox">
                    <label class="l-works_acd_label" for="acd-check1">SNSアイコンのご依頼について</label>
                    <nav class="l-works_acd_content">
                        <ul>
                            <li>人物1人につき1,000円とさせていただきます。</li>
                            <li>小物や動物はオプションとして１アイテム500円の追加料金がかかります。</li>
                            <li>イラストのご提供後、1度InstagramまたはTwitterでメンション付き投稿(@mihokono_oekaki)をお願いします。</li>
                            <li>私のInstagramのストーリーズでの投稿を許可していただきたいです。(名前が入っている場合は伏せさせていただきます。)</li>
                            <li>SNSアイコン以外のご利用、加工、無断転載等はご遠慮ください。</li>
                        </ul>
                    </nav>
                </div>
                <div class="l-works_acd">
                    <input id="acd-check2" class="l-works_acd_check" type="checkbox">
                    <label class="l-works_acd_label" for="acd-check2">その他のご利用、<br class="l-pc">商用利用のご依頼について</label>
                    <nav class="l-works_acd_content">
                        <ul>
                            <li>
                                ご相談にて見積もりをさせて頂きます。お見積もりのご相談に料金は発生いたしませんので、お気軽にご連絡ください。
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="l-works_acd">
                    <input id="acd-check3" class="l-works_acd_check" type="checkbox">
                    <label class="l-works_acd_label" for="acd-check3">イラスト作成の流れ</label>
                    <nav class="l-works_acd_content">
                        <ul>
                            <li>
                                下記のような流れでイラストをご提供させていただきます。<br>
                                イラストのご相談、お見積もり<br>
                                ↓<br>
                                ラフ画のご提供<br>
                                ↓<br>
                                ラフ画をご確認いただいた後、お支払い<br>
                                ↓<br>
                                イラストの修正(何度でも可能)<br>
                                ↓<br>
                                原画のご提供<br>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="l-works_acd">
                    <input id="acd-check4" class="l-works_acd_check" type="checkbox">
                    <label class="l-works_acd_label" for="acd-check4">お支払い方法について</label>
                    <nav class="l-works_acd_content">
                        <ul>
                            <li>お支払いはPayPay支払い、または口座振込みでお願いいたします。</li>
                        </ul>
                    </nav>
                </div>
                <h2 class="l-contact">お問い合わせ</h2>
                <div class="l-use-padding">
                    <div class="l-use">
                        <p class="l-use_desc">
                            お仕事のご依頼、ご相談は<br>
                            <span><a href="mailto:mihokono.oekaki@gmail.com" target="_blank" rel="noopener noreferrer">mihokono.oekaki@gmail.com</a></span> または<br class="l-pc"> <span><a href="https://www.instagram.com/mihokono_oekaki" target="_blank" rel="noopener noreferrer">InstagramのDM</a></span> にご連絡ください。
                        </p>
                    </div>
                </div>
            </div>
        <Footer />
    </div>
</template>

<style lang="scss">
    .l-works-header{
        .l-header_works{
            li{
                background-color: #666;
                color: #fff;
            }
        }
    }

    .l-works{
        font-family: 'Noto Sans JP', sans-serif;
        margin-top: 53px;

        @media screen and (max-width: 599px) {
            margin-top: 30px;
        }

        h2{
            margin-bottom: 40px;
            font-size: 20px;
            font-weight: 100;
            text-align: center;

            @media screen and (max-width: 599px) {
                margin-bottom: 20px;
                font-size: 12px;
            }
        }

        &_acd{
            background-color: #ccc;
            width: 912px;
            margin: 0 auto 15px auto;
            padding: 25px 35px 10px 35px;

            @media screen and (max-width: 599px) {
                width: 230px;
            }

            &_check{
                display: none;
            }

            &_label{
                display: block;
                position: relative;
                font-weight: 100;

                @media screen and (max-width: 599px) {
                    font-size: 12px;
                }

                &::after{
                    box-sizing: border-box;
                    content: '+';
                    display: block;
                    position: absolute;
                    right: 0;
                    top: -8px;
                    font-size: 25px;
                    font-weight: 100;
                    color: #666;

                    @media screen and (max-width: 599px) {
                        top: -11.5px;
                    }
                }
            }

            &_content{
                height: 0;
                opacity: 0;
                transition: .5s;
                visibility: hidden;
                font-weight: 100;

                @media screen and (max-width: 599px) {
                    ul{
                        padding-left: 20px;
                    }
                }

                li{
                    list-style-type: circle;

                    @media screen and (max-width: 599px) {
                        font-size: 10px;
                    }
                }
            }

            &_check:checked + &_label + &_content{
                opacity: 1;
                visibility: visible;
                height: 100%;
            }

            &_check:checked + &_label::after{
                content: '-';
                top: -25px;
                font-size: 41px;

                @media screen and (max-width: 599px) {
                    top: -29px;
                }
            }
        }
    }

    .l-contact{
        margin-top: 70px;

        @media screen and (max-width: 599px) {
            margin-top: 30px;
        }
    }

    .l-use{
        &_desc{
            span{
                font-weight: bold;
                font-size: 16px;

                @media screen and (max-width: 599px) {
                    font-size: 12px;
                }
            }
        }
    }
</style>