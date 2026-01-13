<script setup lang="ts">
import { miningProducts } from '@/const/data';
import ExpensesCard from '../custom-component/expenses-card.vue';
import { Motion } from "@motionone/vue"; // Import Motion
</script>

<template>
  <div class="p-10 min-h-screen">
    <div class="flex flex-wrap gap-3 justify-center">
      
      <Motion
        v-for="(product, i) in miningProducts"
        :key="product.id"
        tag="div"
        :initial="{ opacity: 0, y: 30 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ 
          delay: i * 0.1, 
          duration: 0.6, 
          easing: [0.17, 0.67, 0.83, 0.67] 
        }"
      >
        <ExpensesCard 
          :title="product.title"
          :price="product.price"
        />
      </Motion>

    </div>
  </div>
</template>