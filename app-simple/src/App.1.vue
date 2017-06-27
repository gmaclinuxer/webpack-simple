<<template>
<div id="app">
  <h1>Hello App!</h1>
  <p>
    <router-link to="/foo">Go to Foo</router-link>
    <router-link to="/bar">Go to Bar</router-link>
    <router-link to="/user/pitou/1?sex=woman">/user/pitou</router-link>
    <router-link to="/user/miya/2?sex=man">/user/miya</router-link>
  </p>
  <!-- 路由出口 -->
  <router-view></router-view>
</div>
</template>

<<script>

</script>

<<style lang="scss">

</style>
