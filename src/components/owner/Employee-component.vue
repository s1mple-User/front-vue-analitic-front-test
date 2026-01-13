<script setup lang="ts">
import { ref } from 'vue';
import { Input } from '../ui/input';
import EmployeesCard from '../custom-component/employees-card.vue';
import { employees } from '@/const/data';
import { Motion } from '@motionone/vue';

const searchQuery = ref('');
</script>

<template>
  <div class="!py-10">
    <Input 
      v-model="searchQuery"
      class="w-[800px] !mt-10 h-[45px] text-white !pl-[15px]" 
      type="text" 
      placeholder="Search employees..." 
    />
         
    <div class="grid !mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      <Motion
        v-for="(emp, i) in employees"
        :key="emp.user.email"
        tag="div"
        :initial="{ opacity: 0, y: 30 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ 
          delay: i * 0.1, 
          duration: 0.6, 
          easing: [0.17, 0.67, 0.83, 0.67] 
        }"
      >
        <EmployeesCard :employee="emp" />
      </Motion>
    </div>
  </div>
</template>