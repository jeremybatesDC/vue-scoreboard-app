<template lang="">
    <header :class="['pb-rem-2', {hasBottomBorder: hasBottomBorder}]">
        <b-row>
          <b-col sm="8">
            <h1 class="m-0">{{title}}</h1>
          </b-col>
           <b-col class="d-flex justify-content-end">
            <slot></slot>
          </b-col>
        </b-row>
    </header>
</template>
<script>
export default {
  name: 'PageHeader',
  props: {
    title: {
      type: String,
      required: true,
    },
    // not really a boolean here...
    hasBottomBorder: {
      type: String,
    },
  },
}
</script>
<style lang="scss">

// custom utility style
.pb-rem-2 {
  padding-bottom: 2rem;
}

.hasBottomBorder {
  // yes this is called "border"
  // but am using box-shadow to avoid future pixel shifting between views (an actual border affects an element's size)
  box-shadow: 0 1px var(--greyLight);
}
</style>