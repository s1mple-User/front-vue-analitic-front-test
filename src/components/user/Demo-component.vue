<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { Line } from 'vue-chartjs';
import { 
  Chart as ChartJS, Title, Tooltip, Legend, LineElement, 
  CategoryScale, LinearScale, PointElement, Filler 
} from 'chart.js';
import ArchLogo from '../icons/ArchLogo.vue';

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement, Filler);

const chartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [{
    label: 'Revenue Growth',
    data: [30, 55, 45, 80, 65, 95],
    borderColor: '#03e9f4', 
    backgroundColor: 'rgba(3, 233, 244, 0.1)', 
    fill: true,
    tension: 0.4, 
    borderWidth: 3,
    pointRadius: 6,
    pointBackgroundColor: '#03e9f4',    
    pointHoverRadius: 10,
    pointHoverBackgroundColor: '#fff'
  }]
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  animation: {
    duration: 2000,
    easing: 'easeInOutQuart'
  },
  plugins: {
    legend: { display: false }, 
  },
  scales: {
    y: { 
      grid: { color: 'rgba(255, 255, 255, 0.05)' }, 
      ticks: { color: '#9ca3af' } 
    },
    x: { 
      grid: { display: false }, 
      ticks: { color: '#9ca3af' } 
    }
  }
};

const stats = [
  { 
    title: 'Employees', 
    value: '24', 
    icon: 'lucide:users', 
    color: '#03e9f4'
  },
  { 
    title: 'Products', 
    value: '142', 
    icon: 'lucide:package', 
    color: '#facc15'
  },
  { 
    title: 'Expenses', 
    value: '$12,400', 
    icon: 'lucide:trending-down', 
    color: '#ef4444'
  },
];
</script>

<template>
  <div class="min-h-screen relative top-20  p-10 flex flex-col items-center overflow-x-hidden pb-40">
    
    <header class="mt-20 mb-16  text-center animate-slide-down">
      <h1 class="text-white font-serif font-bold text-6xl tracking-tight">
        Data <span class="text-[#03e9f4] neon-text">Analytics</span>
      </h1>
      <p class="text-gray-500 mt-4 font-sans uppercase tracking-[0.3em] text-sm">
        Operational Performance Metrics
      </p>
    </header>
    <router-link class="flex items-center" to="/">
          <ArchLogo/> 
    </router-link>


    <div class="flex flex-wrap relative top-10 justify-center gap-8 w-full max-w-6xl">
      <div 
        v-for="(stat, index) in stats" 
        :key="index"
        :class="['stat-card group', `delay-${index}`]"
        :style="{ '--accent-color': stat.color }"
      >
        <div class="flex flex-col h-full justify-between">
          <div class="flex justify-between items-start">
            <div>
              <p class="text-gray-400 text-xs uppercase tracking-widest font-bold mb-1">
                {{ stat.title }}
              </p>
              <h2 class="text-4xl font-black transition-all group-hover:scale-110 origin-left" :style="{ color: stat.color }">
                {{ stat.value }}
              </h2>
            </div>
            <div class="icon-box" :style="{ color: stat.color, backgroundColor: stat.color + '15' }">
              <Icon :icon="stat.icon" class="text-3xl" />
            </div>
          </div>
          
          <div class="w-full h-1 bg-gray-800 mt-4 rounded-full overflow-hidden">
            <div class="progress-fill" :style="{ backgroundColor: stat.color }"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full relative top-20 max-w-6xl mt-16 animate-fade-in-up chart-container">
       <div class="rounded-[40px] border border-gray-700 bg-gray-900/40 p-8 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <div class="flex justify-between items-center mb-6">
        
            <div class="flex gap-2">
              <span class="w-3 h-3 rounded-full bg-red-500/50"></span>
              <span class="w-3 h-3 rounded-full bg-yellow-500/50"></span>
              <span class="w-3 h-3 rounded-full bg-green-500/50"></span>
            </div>
          </div>
          <div class="h-[400px]">
            <Line :data="chartData"  />
          </div>
       </div>
    </div>
  </div>
</template>

<style scoped>
/* Входные анимации */
@keyframes slideDown {
  from { opacity: 0; transform: translateY(-50px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(60px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes growWidth {
  from { width: 0; }
  to { width: 100%; }
}

.animate-slide-down {
  animation: slideDown 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

.animate-fade-in-up {
  animation: fadeInUp 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

/* Стили карточек */
.stat-card {
  width: 320px;
  height: 180px;
  background: rgba(17, 17, 19, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 24px;
  position: relative;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  cursor: pointer;
  opacity: 0;
  animation: fadeInUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

.stat-card:hover {
  transform: translateY(-15px) scale(1.02);
  border-color: var(--accent-color);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5), 0 0 20px -5px var(--accent-color);
}

.delay-0 { animation-delay: 0.2s; }
.delay-1 { animation-delay: 0.4s; }
.delay-2 { animation-delay: 0.6s; }

/* Элементы внутри карточек */
.icon-box {
  padding: 12px;
  border-radius: 16px;
  transition: all 0.3s ease;
}

.stat-card:hover .icon-box {
  transform: rotateY(180deg);
}

.progress-fill {
  height: 100%;
  width: 0;
  animation: growWidth 2s 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

/* Неоновый текст */
.neon-text {
  text-shadow: 0 0 10px rgba(3, 233, 244, 0.5), 0 0 20px rgba(3, 233, 244, 0.3);
}

/* Контейнер графика */
.chart-container {
  transition: transform 0.3s ease;
}

.chart-container:hover {
  transform: scale(1.01);
}

/* Кастомный скроллбар (опционально) */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #0a0a0c;
}
::-webkit-scrollbar-thumb {
  background: #222;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: #03e9f4;
}
</style>