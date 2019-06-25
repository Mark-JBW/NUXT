<template>
  <div>
    <nuxt />
  </div>
</template>
<script>
export default {}
</script>

<style>
.van-sku__close-icon {
  display: none !important;
}
.van-sku-row__item {
  border-radius: 16px !important;
}
.van-sku__stock {
  display: none !important;
}
.van-button--bottom-action {
  background: #cab078 !important;
}
.van-button--bottom-action.van-button--primary {
  background: #c44044 !important;
}
.van-sku-header__img-wrap {
  margin-top: -20px !important;
}
.van-sku-header__img-wrap img {
  width: 89px !important;
  height: 89px !important;
  border-radius: 4px;
}
.van-sku-row__item--active {
  color: #fff;
  border-color: #c44044 !important;
  background: #c44044 !important;
}

.van-sku__stock {
  position: absolute;
  top: 37px;
  left: 124px;
}
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;

  font-size: 16px;

  word-spacing: 1px;

  -ms-text-size-adjust: 100%;

  -webkit-text-size-adjust: 100%;

  -moz-osx-font-smoothing: grayscale;

  -webkit-font-smoothing: antialiased;

  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;

  margin: 0;
}

.button--green {
  display: inline-block;

  border-radius: 4px;

  border: 1px solid #3b8070;

  color: #3b8070;

  text-decoration: none;

  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;

  background-color: #3b8070;
}

.button--grey {
  display: inline-block;

  border-radius: 4px;

  border: 1px solid #35495e;

  color: #35495e;

  text-decoration: none;

  padding: 10px 30px;

  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;

  background-color: #35495e;
}
</style>
