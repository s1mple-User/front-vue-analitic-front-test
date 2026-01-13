<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { useRoute } from 'vue-router';
import ArchLogo from '@/components/icons/ArchLogo.vue';

const props = defineProps({
  getValueSaidbar: {
    type: Function,
    required: true
  },
  activeTab:{
    type:String,
    required:true
  }
});

const route = useRoute();
</script>

<script lang="ts">
export interface ISidebarItem {
  id: string;
  label: string;
  icon: string; 
}

export interface ISidebarGroup {
  title: string;
  items: ISidebarItem[];
}

export const sidebarGroups: ISidebarGroup[] = [
  {
    title: "Analytics",
    items: [
           { id: "operation-metrics", label: "Company", icon: "lucide:building-2" },
      { id: "analitic", label: "analytics", icon: "lucide:layout-dashboard"},
    ]
  },
  {
    title: "Finance",
    items: [
      { id: "financial-metrics", label: "Metrics", icon: "lucide:wallet" },
      { id: "expenses", label: "Expenses", icon: "lucide:receipt" }
    ]
  },
  {
    title: "Resources",
    items: [
      { id: "product", label: "Products", icon: "lucide:package" },
      { id: "emoplyee", label: "Team", icon: "lucide:users" }
    ]
  }
];
</script>

<template>
  <aside class="w-[450px]  h-[95vh]  absolute top-11 left-2 border border-gray-700 rounded-[40px] bg-gray-900/95
   backdrop-blur-xl py-10 flex flex-col items-center shadow-2xl ">
    
    <div class="flex flex-col items-center pt-10 pb-14">
      <ArchLogo class="w-20 h-20 drop-shadow-[0_0_15px_rgba(3,233,244,0.4)]" />
    </div>

    <nav class="flex-1 flex flex-col gap-10 w-full px-8  ">
      <div v-for="group in sidebarGroups" :key="group.title" class="flex flex-col items-center">
        <h3 class="text-xl font-black text-white mb-6 tracking-widest uppercase">
          {{ group.title }}
        </h3>
        
        <ul class="flex flex-col gap-4">
          <li v-for="item in group.items" :key="item.id">
            <button
             v-on:click="getValueSaidbar(item.id)"
            :class="activeTab === item.id ? 'active' :''"
              class="neon-button flex items-center justify-start gap-5 w-[330px] rounded-2xl transition-all duration-500"
            >
              <Icon :icon="item.icon" class="text-2xl icon-layer ml-2" />
              <span class="font-bold text-sm tracking-widest uppercase">{{ item.label }}</span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  </aside>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.neon-button {
  position: relative;
  padding: 18px 25px;
  color: #666; 
  background: transparent;
  border: 1px solid rgba(3, 233, 244, 0.1);
  text-decoration: none;
  overflow: hidden;
  transition: 0.5s;
}

/* Эффект при наведении */
.neon-button:hover {
  color: #fff;
  background: #03e9f4;
  box-shadow: 0 0 5px #03e9f4,
              0 0 25px #03e9f4;
}

.neon-button:hover {
  color: #fff;
  background: #03e9f4;
  box-shadow: 0 0 5px #03e9f4,
              0 0 25px #03e9f4;
}

/* СТИЛЬ ДЛЯ АКТИВНОЙ КНОПКИ (когда мы на этой странице) */
.neon-button.active {
  color: #fff;
  background: #03e9f4;
  border-color: #03e9f4;
  box-shadow: 0 0 10px #03e9f4,
              0 0 40px #03e9f4;
}

/* Чтобы иконка тоже меняла яркость */
.icon-layer {
  transition: transform 0.3s ease;
}

.neon-button:hover .icon-layer,
.neon-button.active .icon-layer {
  transform: scale(1.2);
}

.neon-button.active span {
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
}
</style>