<script>

export default {
  name: "contract-creation",
  components: {},
  data() {
    return {
      active: 0
    };
  }
}
</script>

<template>
  <div class="card">
    <div class="flex mb-2 gap-2 justify-content-end">
      <pv-button @click="active = 0" rounded label="1" class="w-2rem h-2rem p-0" :outlined="active !== 0" />
      <pv-button @click="active = 1" rounded label="2" class="w-2rem h-2rem p-0" :outlined="active !== 1" />
      <pv-button @click="active = 2" rounded label="3" class="w-2rem h-2rem p-0" :outlined="active !== 2" />
    </div>

    <pv-tab-view v-model:activeIndex="active">
      <pv-tab-panel header="Header I">
        <p class="m-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </pv-tab-panel>
      <pv-tab-panel header="Header II">
        <p class="m-0">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
          ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
        </p>
      </pv-tab-panel>
      <pv-tab-panel header="Header III">
        <p class="m-0">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
          officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
        </p>
      </pv-tab-panel>
    </pv-tab-view>
  </div>
</template>

<style scoped>

</style>