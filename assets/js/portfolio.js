$.extend(true, $.fancybox.defaults, {
  infobar: false,
  animationEffect: "fade",
  transitionEffect: false,
  media: {
    youtube: {
      params: {
        autoplay: 0,
        rel: 0,
        showinfo: 0
      }
    }
  }
});

$.fancybox.defaults.buttons = ["close"];
