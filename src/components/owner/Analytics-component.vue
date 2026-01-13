<script setup lang="ts">
import { ref, computed } from 'vue';
import { Motion } from '@motionone/vue';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement
} from 'chart.js';
import { Bar, Line } from 'vue-chartjs';

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, ArcElement, Title, Tooltip, Legend);


const metrics = ref({
  finance: { revenue: 15400, profit: 8200, expenses: 7200 },
  operations: { efficiency: 88, downtime: 4, tasksCompleted: 142 },
  lastUpdated: new Date().toLocaleTimeString()
});

const financeChartData = computed(() => ({
  labels: ['Revenue', 'Profit', 'Expenses'],
  datasets: [{
    label: 'Financial Metrics ($)',
    backgroundColor: ['#4ade80', '#facc15', '#f87171'],
    data: [metrics.value.finance.revenue, metrics.value.finance.profit, metrics.value.finance.expenses]
  }]
}));

const opsChartData = computed(() => ({
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [{
    label: 'Efficiency %',
    borderColor: '#60a5fa',
    backgroundColor: '#60a5fa',
    data: [82, 85, 88, 84, 90, 92, 88],
    fill: false,
    tension: 0.4
  }]
}));

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { labels: { color: '#9ca3af' } }
  },
  scales: {
    y: { grid: { color: '#374151' }, ticks: { color: '#9ca3af' } },
    x: { grid: { color: '#374151' }, ticks: { color: '#9ca3af' } }
  }
};
</script>

<template>
  <div class="p-8  w-[1000px] text-white">
    <div class="mb-10 flex justify-between items-end">
      <div>
        <h1 class="text-3xl font-bold tracking-tight">Analytics Dashboard</h1>
        <p class="text-gray-400">Monitoring User Metrics Overview</p>
      </div>
      <div class="text-xs font-mono text-gray-500 uppercase">
        Last Sync: {{ metrics.lastUpdated }}
      </div>
    </div>

    <div class="grid grid-cols-1 !mt-10 md:grid-cols-3 gap-6 mb-10">
      <Motion 
        v-for="(val, key, i) in metrics.finance" :key="key"
        tag="div"
        :initial="{ opacity: 0, y: 20 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ delay: i * 0.1 }"
        class="p-6  border-2 border-gray-600 text-center rounded-2xl hover:border-gray-600 transition-colors"
      >
        <p class="text-gray-400 !mt-3 text-sm uppercase font-semibold mb-1">{{ key }}</p>
        <p class="text-2xl !mb-3  font-bold" :class="key === 'profit' ? 'text-green-400' : 'text-white'">
          ${{ val.toLocaleString() }}
        </p>
      </Motion>
    </div>

    <div class=" gap-8 flex flex-col !mt-5">
      <Motion
        tag="div"
        :initial="{ opacity: 0, scale: 0.95 }"
        :animate="{ opacity: 1, scale: 1 }"
        class="p-6 bg-gray-900  border-2 border-gray-600 rounded-2xl h-[400px]"
      >
        <h3 class="text-lg font-bold text-shadow-md text-shadow-blue-600 !pt-5 !ml-5 text-blue-500 mb-4">Financial Distribution</h3>
        <div class="h-[300px]">
          <Bar :data="financeChartData" :options="chartOptions" />
        </div>
      </Motion>

      <Motion
        tag="div"
        :initial="{ opacity: 0, scale: 0.95 }"
        :animate="{ opacity: 1, scale: 1 }"
        :transition="{ delay: 0.2 }"
        class="p-6 bg-gray-900  border-2 border-gray-600  rounded-2xl h-[400px]"
      >
        <h3 class="text-lg font-bold text-shadow-md text-shadow-blue-600 !pt-5 !ml-5 text-blue-500 mb-4">Operational Efficiency (Weekly)</h3>
        <div class="h-[300px]">
          <Line :data="opsChartData" :options="chartOptions" />
        </div>
      </Motion>
    </div>
  </div>
</template>