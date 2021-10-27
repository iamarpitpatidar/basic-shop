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
<!--  <div class="grid grid-cols-5 overflow-hidden col-gap-6 mb-5">-->
<!--    -->
<!--    <img class="block col-span-1 w-full rounded bg-gray-600" :src="item.image" alt />-->
<!--    <div class="col-span-4">-->
<!--      <div class="flex">-->
<!--        <h6 class="text-sm font-semibold text-gray-800 flex-grow">{{ item.name }}</h6>-->
<!--        <button>-->
<!--          <svg class="w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">-->
<!--            <path-->
<!--                d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"-->
<!--            />-->
<!--          </svg>-->
<!--        </button>-->
<!--      </div>-->
<!--      <p class="text-xs truncate text-gray-400">{{item.description}}</p>-->
<!--      <span class="text-sm text-gray-200">$ {{ item.price }} USD</span>-->
<!--    </div>-->
<!--  </div>-->
</template>

<script>
export default {
  name: "Item",
  props: {
    item: Object
  }
}
</script>
