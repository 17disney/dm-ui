<style lang='stylus'>
</style>
<template>
  <li class="dm-menu-item" role="menuitem" @click="handleClick" @mouseenter="onMouseEnter" @focus="onMouseEnter" @blur="onMouseLeave" @mouseleave="onMouseLeave">
    <!-- <el-tooltip> -->

    <!-- <div slot="content"></div> -->
    <slot></slot>
    <!-- </el-tooltip> -->
    <span class="icon el-icon-arrow-right"></span>
  </li>
</template>

<script>
export default {
  components: {},

  props: {
    index: {
      type: String,
      required: true
    },
    route: [String, Object],
    disabled: Boolean
  },

  data() {
    return {
    }
  },

  computed: {},

  mounted() { },

  methods: {
    onMouseEnter() {
      if (this.mode === 'horizontal' && !this.rootMenu.backgroundColor) return
      this.$el.style.backgroundColor = this.hoverBackground
    },
    onMouseLeave() {
      if (this.mode === 'horizontal' && !this.rootMenu.backgroundColor) return
      this.$el.style.backgroundColor = this.backgroundColor
    },
    handleClick() {
      if (!this.disabled) {
        this.dispatch('DmMenu', 'item-click', this)
        this.$emit('click', this)
      }
    }
  }
}
</script>
