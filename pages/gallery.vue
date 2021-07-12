<template>
    <div>
        <Header />
            <h1>Gallery</h1>
            <p class="l-gallery_desc">イラストをクリックすると、SNSアイコン用のフリー画像をご利用いただけます。</p>

        <!-- フォルダにアップした画像をillust_03,02,01....番号逆順に表示させたい -->
        <!-- <div class="l-galley" v-for="illust in illusts" :key="illust">
                <img :src="illust.img">
        </div> -->

        <div class="l-galley">
                <img src="../assets/img/gallery/mihoko01.png">
                <img src="../assets/img/gallery/mihoko02.png">
                <img src="../assets/img/gallery/mihoko03.png">
                <img src="../assets/img/gallery/mihoko04.png">
                <img src="../assets/img/gallery/mihoko05.png">
                <img src="../assets/img/gallery/mihoko06.png">
                <img src="../assets/img/gallery/mihoko07.png">
                <img src="../assets/img/gallery/mihoko08.png">
                <img src="../assets/img/gallery/mihoko09.png">
                <img src="../assets/img/gallery/mihoko10.png">
                <img src="../assets/img/gallery/mihoko11.png">
                <img src="../assets/img/gallery/mihoko12.png">
                <img src="../assets/img/gallery/mihoko13.png">
                <img src="../assets/img/gallery/mihoko14.png">
                <img src="../assets/img/gallery/mihoko15.png">
                <img src="../assets/img/gallery/mihoko16.png">
                <img src="../assets/img/gallery/mihoko17.png">
                <img src="../assets/img/gallery/mihoko18.png">
                <img src="../assets/img/gallery/mihoko19.png">
                <img src="../assets/img/gallery/mihoko20.png">
                <img src="../assets/img/gallery/mihoko21.png">
                <img src="../assets/img/gallery/mihoko22.png">
                <img src="../assets/img/gallery/mihoko23.png">
                <img src="../assets/img/gallery/mihoko24.png">
                <img src="../assets/img/gallery/mihoko25.png">
                <img src="../assets/img/gallery/mihoko26.png">
                <img src="../assets/img/gallery/mihoko27.png">
                <img src="../assets/img/gallery/mihoko28.png">
                <img src="../assets/img/gallery/mihoko29.png">
                <img src="../assets/img/gallery/mihoko30.png">
                <img src="../assets/img/gallery/mihoko31.png">
                <img src="../assets/img/gallery/mihoko32.png">
                <img src="../assets/img/gallery/mihoko33.png">
                <img src="../assets/img/gallery/mihoko34.png">
                <img src="../assets/img/gallery/mihoko35.png">
                <img src="../assets/img/gallery/mihoko36.png">
                <img src="../assets/img/gallery/mihoko37.png">
                <img src="../assets/img/gallery/mihoko38.png">
        </div>

    </div>
</template>

<script>
export default{
    // data:{
    //     illusts:[
    //         { img: '../assets/img/top/illust_01.png' },
    //         { img: '../assets/img/top/illust_02.png' }
    //     ]
    // }
}
</script>

<style lang="scss">
    .l-gallery_desc{
        font-family: 'Noto Sans JP', sans-serif;
        text-align: center;
        font-size: 18px;
        margin-top: 12px;
        margin-bottom: 53px;
    }

    .l-galley{
        margin: 0 150px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;

        img{
            width: 200px;
            height: 200px;
            border-radius: 50%;
            margin-bottom: 50px;
        }
    }
</style>