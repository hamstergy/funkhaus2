<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
  import _throttle from "lodash/throttle"

  export default {
  data() {
    let output = {
      winHeight: 0,
      winWidth: 0,
      sTop: 0,
    }
    // On client side, we have window so set the height/width
    if (process.client) {
      output.winHeight = window.innerHeight
      output.winWidth = window.innerWidth
    }
    return output
  },
  mounted() {
    // Throttle common events
    window.addEventListener("resize", _throttle(this.onResize, 30))
    window.addEventListener("scroll", _throttle(this.onScroll, 10))
    // Trigger a resize and scroll to start, so data is correct on load
    this.onResize()
    this.onScroll()
    // Monitor keydown
    window.addEventListener("keydown", (e) => {
      switch (e && e.key) {
        case "Escape":
          // Close menu on ESC press
          this.$store.commit("SET_MENU", FALS)
          break
      }
    })
  },
  methods: {
    onResize() {
      // Save window dimensions to store
      this.winWidth = window.innerWidth
      this.winHeight = window.innerHeight
      let dimensions = {
        height: this.winHeight,
        width: this.winWidth,
      }
      this.$store.commit("SET_WIN_DIMENSIONS", dimensions)
      this.set100vhVar()
    },
    onScroll() {
      // Save window scroll position to store
      this.sTop = window.pageYOffset || document.documentElement.scrollTop
      this.$store.commit("SET_S_TOP", this.sTop)
    },
    set100vhVar() {
      // This fixes the 100vh iOS bug/feature.
      // If less than most tablets, set var to window height.
      let value = ""
      if (this.winWidth <= 1024) {
        value = `${window.innerHeight}px`
      }
      document.documentElement.style.setProperty("--unit-100vh", value)
    },
  },
}
</script>

<style>
html {
  background: black;
}
body {
  overflow: hidden;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
