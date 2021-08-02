<template>
<svg id="Component_9_1" data-name="Component 9 – 1" xmlns="http://www.w3.org/2000/svg" style="margin: 0 1em" width="93.186" height="93.186" viewBox="0 0 93.186 93.186">
  <path v-show="active === 'true'" id="Path_295" data-name="Path 295" d="M10.65,0H82.536a10.65,10.65,0,0,1,10.65,10.65V82.536a10.65,10.65,0,0,1-10.65,10.65H10.65A10.65,10.65,0,0,1,0,82.536V10.65A10.65,10.65,0,0,1,10.65,0Z" fill="#ff5614" />
  <path v-show="active !== 'true'" id="Path_295" data-name="Path 295" d="M10.65,0H82.536a10.65,10.65,0,0,1,10.65,10.65V82.536a10.65,10.65,0,0,1-10.65,10.65H10.65A10.65,10.65,0,0,1,0,82.536V10.65A10.65,10.65,0,0,1,10.65,0Z" fill="#fff" />
  <text v-show="active === 'true'" id="_1" data-name="1" transform="translate(45.813 60)" fill="#fff" font-size="33" font-family="SourceSansPro-Regular, Source Sans Pro"><tspan x="-8.2" y="0">{{ number }}</tspan></text>
  <text v-show="active !== 'true'" id="_1" data-name="1" transform="translate(45.813 60)" fill="#000" font-size="33" font-family="SourceSansPro-Regular, Source Sans Pro"><tspan x="-8.2" y="0">{{ number }}</tspan></text>
</svg>
</template>

<script>
export default {
   name: 'Num',
  props: ['number','active']
}
</script>