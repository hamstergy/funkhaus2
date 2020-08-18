<template>
  <div v-if="!loading">
    <header-app />
    <div class="progress-bar" :style="{width: progressBarWidth+'%'}"></div>
    <div class="carousel">
      <div class="carousel-item" v-for="(slide, i) in slides" >
        <div :class="'carousel-post '+'post-'+i">
          <div class="info">
            <h2 class="info-title">{{slide.title}}</h2>
            <h3 class="info-subtitle">{{slide.subtitle}}</h3>
            <div class="info-play">▶ PLAY</div>
          </div>
        </div>
        <img class="carousel-image" :src="slide.url" alt="" >
      </div>
    </div>
    <footer-app />
  </div>
</template>

<script>
  import HeaderApp from '~/components/Header';
  import FooterApp from '~/components/Footer';
  export default {
    name: 'Editors',
    components: { HeaderApp, FooterApp },
    data() {
      return {
        slides: [
          {
            title: 'Lorin Askill',
            subtitle: 'Sia — The Greatest',
            url: '//fuxt-backend.funkhaus.us/wp-content/uploads/2020/06/alexine.jpg'
          },
          {
            title: 'Conor O’Neill',
            subtitle: 'Toyota — Highlander Heroes',
            url: '//fuxt-backend.funkhaus.us/wp-content/uploads/2020/06/wave.jpg'
          },
          {
            title: 'Stephania Dulowski',
            subtitle: 'Rainn — Wait',
            url: '//fuxt-backend.funkhaus.us/wp-content/uploads/2020/06/boxer.jpg'
          },
          {
            title: 'Grant Surmi',
            subtitle: 'Zelle — Pay It Safe',
            url: '//fuxt-backend.funkhaus.us/wp-content/uploads/2020/06/bond.jpg'
          },
        ],
        siteMeta: {
          title: '',
          description: '',
          thumbnail: ''
        },
        page: {
          title: ''
        },
        loading: true,
        timer: null,
        scrollDelay: null,
        moveDelay: null,
        currentIndex: 0,
        scrollHeight: 100,
        direction: 'down',
        progressBarWidth: 0,
        i: 0,
      }
    },
    head () {
      return {
        title: this.siteMeta.title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            property: "og:description",
            content: this.siteMeta.description
          },
          {
            hid: "og:image",
            property: "og:image",
            content: this.siteMeta.thumbnail
          }
        ],
      }
    },
    async fetch() {
      const data = await (await fetch(
        'https://raw.githubusercontent.com/funkhaus/technical-assessment-round-2/master/db.json'
      )).json();
      this.siteMeta = data.siteMeta;
      this.images = data.images;
      this.loading = false;
    },
    mounted() {
      window.scrollTo(0, 0);
      this.startSlide();
    },
    computed: {
      getHeight() {
        if (process.client) {
          return this.$store.state.winHeight;
        }
      }
    },
    methods: {
      startSlide() {
        this.move();
      },
      next() {
        if(this.currentIndex === this.slides.length-1) {
          this.currentIndex = 0;
          (this.direction == 'top') ? this.direction = 'down' : this.direction = 'top'
        }
        this.currentIndex += 1;
        this.scrollHeight = this.getHeight;
        this.pageScroll();
        this.move();
      },
      pageScroll() {
        (this.direction =='down') ? window.scrollBy(0,3) : window.scrollBy(0,-3)
        this.scrollHeight -= 3;
        if (this.scrollHeight <= 0 ) return;
        this.scrollDelay = setTimeout(this.pageScroll, 1);
      },
      move() {
        this.moveDelay = setTimeout(()=> {
          this.timer = setInterval(this.frame, 20);
        }, 2000);
      },
      frame() {
        if (this.progressBarWidth >= 100) {
          clearInterval(this.timer);
          this.progressBarWidth = 0;
          this.next();
        } else {
          this.progressBarWidth+=0.5;
        }
      }
    },
    destroyed() {
      clearInterval(this.timer)
      clearTimeout(this.scrollDelay)
      clearTimeout(this.moveDelay)
    }
  }
</script>

<style lang="scss" scoped>
  .carousel {
    .carousel-item {
      z-index: 10;
      height: 100vh;
      text-align: center;
      color: #FFFFFF;

      position: relative;
      .carousel-post {
        z-index:20;
        position: absolute;
        clip: rect(0, auto, auto, 0);
        width: 100%;
        height: 100%;
        overflow: hidden;
      }
      .carousel-image {
        z-index:10;
        position: relative;
        width:100%;
        height:100%;
        object-fit: cover;
      }
    }
  }
  .info {
    overflow: visible;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    @media only screen and (max-width: 600px) {
      font: normal 38px/42px 'Lota Grotesque Alt';
      width:100%;
      left:0%;
      transform: translate(0%, -50%);
    }

    &-title {
      font: bold 76px/85px 'Lota Grotesque Alt';
      -moz-transition: all .3s linear;
      -webkit-transition: all .3s linear;
      transition: all .3s linear;
      transform: translate(0px,0px);

      @media only screen and (max-width: 600px) {
        font: normal 38px/42px 'Lota Grotesque Alt';
      }
    }
    &-subtitle {
      font: normal 28px/48px 'Lota Grotesque Alt';
      -moz-transition: all .3s linear;
      -webkit-transition: all .3s linear;
      transition: all .3s linear;
      transform: translate(0px,0px);

      @media only screen and (max-width: 600px) {
        font: normal 20px/36px 'Lota Grotesque Alt';
      }
    }
    &-play {
      font: normal 16px/28px 'Lota Grotesque Alt';
      opacity: 0;
      -moz-transition: all .3s linear;
      -webkit-transition: all .3s linear;
      transition: all .3s linear;
    }

    &:hover {
      .info-title {
        -moz-transition: all .3s linear;
        -webkit-transition: all .3s linear;
        transition: all .3s linear;
        transform: translate(0px,-10px);
      }
      .info-subtitle {
        -moz-transition: all .3s linear;
        -webkit-transition: all .3s linear;
        transition: all .3s linear;
        transform: translate(0px,-15px);
      }
      .info-play {
        opacity: 1;
        cursor: pointer;
        transform: translate(0px,-15px);
      }
    }
  }
  .progress-bar {
    width: 10%;
    z-index: 20;
    position: fixed;
    top: 0;
    height: 6px;
    background: #f7f8fb;
  }
</style>
