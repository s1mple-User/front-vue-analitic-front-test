<script setup lang="ts">
import { ref } from 'vue';
import { products } from '@/const/data';
import ProductCard from '../custom-component/product-card.vue';

// Note: No external motion library needed, avoiding the "Module not found" errors.
</script>

<template>
  <div class="p-10 !pt-10">
    <TransitionGroup 
      appear
      tag="div"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      enter-active-class="transition duration-700 ease-out"
      enter-from-class="transform translate-y-12 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
    >
      <ProductCard 
        v-for="(product, index) in products" 
        :key="product.id"
        :title="product.title"
        :price="product.price"
        :spend_time_to_create="product.spend_time_to_create"
        :spend_money_to_create="product.spend_money_to_create"
        :amount="product.amount"
        :style="{ transitionDelay: `${index * 150}ms` }"
        class="hover:scale-[1.02] transition-transform duration-300"
      />
    </TransitionGroup>
  </div>
</template>

<style scoped>

.v-move {
  transition: transform 0.6s ease;
}
</style>