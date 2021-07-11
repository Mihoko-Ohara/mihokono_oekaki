<template>
    <div>
        <header class="l-header">
            <nav class="l-header-gnav">
                <ul class="l-header-ul">
                    <li>
                        <nuxt-link to="/">Top</nuxt-link>
                    </li>
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
                    <li>
                        <a href="https://www.instagram.com/mihokono_oekaki" target="_blank" rel="noopener noreferrer">instagram</a>
                    </li>
                    <li>
                        <a href="https://twitter.com/mihokono_oekaki" target="_blank" rel="noopener noreferrer">Twitter</a>
                    </li>
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
            &:last-child{
                margin-right: 0;
            }
        }

        &-ul{
            padding-left: 0;
            display: inline-flex;
        }
    }
</style>