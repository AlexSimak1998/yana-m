<template>
  <div >
    <button class="btn">
        <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
    name:'my-btn'
};
</script>

<style>
.btn {
  padding:  3px 50px 3px 14px;
  flex-shrink: 0;
  background: #282828;
  font-size: 10px;
  color: white;

}
</style>