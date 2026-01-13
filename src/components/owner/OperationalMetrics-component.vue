<script setup lang="ts">
import { ref, computed } from 'vue';
import { Motion } from '@motionone/vue';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';
import { Radar, Doughnut } from 'vue-chartjs';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend, ArcElement);

// Mock Data from your Schema
const inventoryData = ref({
  inventoryLevel: 450,
  turnoverDays: 14,
  totalOrders: 1250,
  cogs: 28000,
  products: 48,
  employees: 12
});

const radarData = computed(() => ({
  labels: ['Stock Level', 'Turnover Speed', 'Order Vol', 'Product Variety', 'Staffing'],
  datasets: [{
    label: 'Operational Balance',
    data: [75, 90, 65, 80, 50], // Scaled percentages for visualization
    backgroundColor: 'rgba(250, 204, 21, 0.2)',
    borderColor: '#facc15',
    pointBackgroundColor: '#facc15',
  }]
}));

const cogsData = computed(() => ({
  labels: ['COGS', 'Margin'],
  datasets: [{
    data: [inventoryData.value.cogs, 15000], // Example comparison
    backgroundColor: ['#ef4444', '#22c55e'],
    borderWidth: 0,
  }]
}));

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    r: {
      grid: { color: '#374151' },
      angleLines: { color: '#374151' },
      pointLabels: { color: '#9ca3af', font: { size: 12 } },
      ticks: { display: false }
    }
  },
  plugins: {
    legend: { labels: { color: '#ffffff' } }
  }
};
</script>

<template>
  <div class="!p-8  min-h-screen text-gray-100">
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 !mb-8">
      <Motion
        v-for="(val, key, i) in inventoryData"
        :key="key"
        tag="div"
        :initial="{ opacity: 0, scale: 0.8 }"
        :animate="{ opacity: 1, scale: 1 }"
        :transition="{ delay: i * 0.05 }"
        class="bg-gray-900 border border-gray-800 !p-4 rounded-xl flex flex-col items-center justify-center text-center"
      >
        <span class="text-[10px] uppercase tracking-widest text-gray-500 mb-1">{{ key.replace(/([A-Z])/g, ' $1') }}</span>
        <span class="text-xl font-bold text-[#facc15]">
          {{ key === 'cogs' ? '$' + val.toLocaleString() : val }}
        </span>
      </Motion>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Motion
        tag="div"
        :initial="{ opacity: 0, x: -20 }"
        :animate="{ opacity: 1, x: 0 }"
        class="lg:col-span-2 bg-gray-900 border border-gray-800 p-6 rounded-2xl h-[450px]"
      >
        <h3 class="text-lg font-bold !mb-6 flex items-center gap-2">
          <span class="w-2 h-2  !ml-10 bg-[#facc15] rounded-full"></span>
          Inventory Performance Radar
        </h3>
        <div class="h-[340px]">
          <Radar :data="radarData" :options="chartOptions" />
        </div>
      </Motion>

      <Motion
        tag="div"
        :initial="{ opacity: 0, x: 20 }"
        :animate="{ opacity: 1, x: 0 }"
        class="bg-gray-900 border border-gray-800 p-6 rounded-2xl h-[450px] flex flex-col"
      >
        <h3 class="text-lg font-bold mb-6">Financial Impact (COGS)</h3>
        <div class="flex-1">
          <Doughnut :data="cogsData" />
        </div>
        <div class="mt-4 pt-4 border-t border-gray-800 text-sm text-gray-400">
          <div class="flex justify-between mb-2">
            <span>Turnover Days</span>
            <span class="text-white font-mono">{{ inventoryData.turnoverDays }} Days</span>
          </div>
          <div class="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
            <div class="bg-green-500 h-full" :style="{ width: '70%' }"></div>
          </div>
        </div>
      </Motion>
    </div>
  </div>
</template>