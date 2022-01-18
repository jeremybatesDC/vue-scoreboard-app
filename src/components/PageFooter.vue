<template>
  <footer class="footer--global">
    <slot></slot>
  </footer>
</template>
<script>
export default {
  name: 'PageFooter',
}
</script>
<style lang="scss">
.footer {
  &--global {
    // otherwise important action buttons will be "below the scroll"
    position: sticky;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.75);
  }
}
</style>
