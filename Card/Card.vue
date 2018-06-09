<style lang='stylus'>
@require '../../../styles/disney/var/color.styl';

.dm-card {
  &__header {
    margin-bottom: 20px;
    padding-bottom: 30px;
    color: $color-grey;
    border-bottom: 1px solid $color-light-grey-ss;

    span {
      font-size: 17px;
      font-weight: 600;
    }
  }
}
</style>
<template>
  <div class="dm-card">
    <div class="dm-card__header">
      <slot name="header"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'dm-card',
  components: {},

  props: {
  },

  data() {
    return {
    }
  },

  computed: {},

  mounted() { },

  methods: {}
}
</script>
