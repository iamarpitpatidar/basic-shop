<template>
  <div class="text-gray-300 px-3 py-4 max-h-52 overflow-auto scrollbar">
    <div class="grid gap-3">
      <div class="flex relative">
        <div class="inline-block flex-shrink-0 w-12">
          <img :src="item.image" alt="product">
        </div>
        <div class="relative flex flex-start flex-wrap flex-grow px-2">
          <h3 class="truncate text-left font-bold w-3/4">{{ item.name }}</h3>
          <span class="text-right font-bold w-1/4">$ {{ item.tags.includes('sale') ? item.salePrice : item.price }}</span>
          <div class="flex">
            <span>Qty 1</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: {
    item: Object
  }
}
</script>
