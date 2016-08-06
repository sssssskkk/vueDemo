<template>
</template>
<script>
  module.exports = {
   show () {
    if ($('.infinite-scroll-preloader')[0]) {
      return
    }
    var modalContainer = document.body
    $('.infinite-scroll-preloader').append('.preloader')
    $(modalContainer).append($('.infinite-scroll-preloader'))
  },
  hide () {
   $('.infinite-scroll-preloader').remove();
 }
};
</script>
