<template>
    <div>
        <header class="l-header">
            <nav class="l-header-gnav">
                <ul class="l-header-ul">
                    <nuxt-link to="/">
                        <li>Top</li>
                    </nuxt-link>
                    <nuxt-link to="/gallery">
                        <li>Gallery</li>
                    </nuxt-link>
                    <nuxt-link to="/shop">
                        <li>Shop</li>
                    </nuxt-link>
                    <nuxt-link to="/calender">
                        <li>Calender</li>
                    </nuxt-link>
                    <nuxt-link to="/works">
                        <li>Works</li>
                    </nuxt-link>
                    <a href="https://www.instagram.com/mihokono_oekaki" target="_blank" rel="noopener noreferrer">
                        <li>instagram</li>
                    </a>
                    <a href="https://twitter.com/mihokono_oekaki" target="_blank" rel="noopener noreferrer">
                        <li class="li-last">Twitter</li>
                    </a>
                </ul>
            </nav>
        </header>
    </div>
</template>

<style lang="scss">
    body{
        padding-top: 87px;
    }

    .l-header{
        position: fixed;
        width: 100%;
        text-align: center;
        top: 0;
        font-family: 'Assistant', sans-serif;
        font-size: 18px;
        margin-top: 30px;

        li{
            width: 150px;
            height: 57px;
            text-align: center;
            line-height: 57px;
            background-color: #eaeaea;
            margin-right: 11px;
        }

        .li-last{
            margin-right: 0;
        }

        &-ul{
            padding-left: 0;
            display: inline-flex;
        }
    }
</style>