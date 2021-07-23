<template>
    <div class="l-gallery-header">
        <Header />
        <h1>Free icon</h1>
        <div class="l-icon_page">
          <nuxt-link to="/gallery" class="l-calender_page_back">&lt; back</nuxt-link>
        </div>
        <div class="l-icon">
          <div class="l-icon_box slide-bottom show">
            <img :src="getAll[($route.params.id)-1].img_top">
            <a :href="`https://mihoko.netlify.app${getAll[($route.params.id)-1].img_top}`" download target="_blank" rel="noopener noreferrer">
              <div class="download_btn">
                Download
              </div>
            </a>
          </div>
          <div v-for="icon in getAll[($route.params.id)-1].img_detail" :key="icon.img_detail" class="l-icon_box slide-bottom show">
            <img :src="icon.img">
              <a :href="`https://mihoko.netlify.app${icon.img}`" download target="_blank" rel="noopener noreferrer">
                <div class="download_btn">
                  Download
                </div>
              </a>
          </div>
        </div>
        <IllustUse />
        <Footer />
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
      ...mapGetters({
        getAll: 'json/getAll',
      }),
    },
    mounted: function(){
        $(function(){
            $(window).on('load scroll', function() {
                var winScroll = $(window).scrollTop();
                var winHeight = $(window).height();
                var scrollPos = winScroll + (winHeight * 0.8);

                $(".show").each(function() {
                    if($(this).offset().top < scrollPos) {
                        $(this).css({opacity: 1, transform: 'translate(0, 0)'});
                    }
                });
            });
        });
    },
}
</script>

<style lang="scss">
  .l-icon{
    font-family: 'Assistant', sans-serif;
    width: 900px;
    margin: 53px auto 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    @media screen and (max-width: 599px) {
      width: 360px;
      margin: 20px auto 0 auto;
    }

    &_box{
      margin-bottom: 48px;

        img{
          width: 200px;
          height: 200px;
          margin: 0 50px;

          @media screen and (max-width: 599px) {
            width: 120px;
            height: 120px;
            margin: 0 30px;
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
    }

    &_page{
      width: 800px;
      font-size: 24px;
      margin-bottom: 60px;
      margin-right: auto;
      margin-left: auto;
      font-family: 'Assistant', sans-serif;

        @media screen and (max-width: 599px) {
          width: 300px;
          font-size: 12px;
          margin-bottom: 30px;
          margin-right: auto;
          margin-left: auto;
        }

        &_back{
          float: left;
        }
    }
  }
</style>
