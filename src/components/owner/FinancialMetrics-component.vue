<template>
  <Motion 
    :initial="{ opacity: 0 }" 
    :animate="{ opacity: 1 }" 
    :transition="{ duration: 0.8 }"
    class="min-h-screen !mt-10 bg-gray-900 text-white p-6 font-serif"
  >
    <div class="max-w-6xl mx-auto">
      
      <header class="!mb-10 border-b border-gray-800 pb-6">
        <Motion
          :initial="{ x: -50, opacity: 0 }"
          :animate="{ x: 0, opacity: 1 }"
          :transition="{ delay: 0.2 }"
        >
          <h1 class="text-4xl font-bold tracking-widest text-[#03e9f4] !mb-5 uppercase">
            Financial Intelligence
          </h1>
        </Motion>
      </header>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 !mb-12">
        <Motion 
          v-for="(item, index) in statCards" 
          :key="index"
          :initial="{ y: 20, opacity: 0 }"
          :animate="{ y: 0, opacity: 1 }"
          :transition="{ delay: 0.1 * index, duration: 0.5 }"
          class="bg-gray-900 border-2 border-gray-700 p-6 rounded-[20px] transition-all hover:border-[#03e9f4] hover:scale-105 group cursor-pointer"
        >
          <p class="text-xs font-bold !pt-2 !ml-5 text-gray-500 uppercase tracking-widest mb-2 group-hover:text-[#03e9f4]">
            {{ item.label }}
          </p>
          <p class="text-3xl !pl-5 !pb-2 font-bold" :class="item.neonColor">
            {{ formatCurrency(item.value) }}
          </p>
        </Motion>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Motion
          :initial="{ scale: 0.9, opacity: 0 }"
          :animate="{ scale: 1, opacity: 1 }"
          :transition="{ delay: 0.5, duration: 0.6 }"
          class="bg-gray-900 border-2 border-gray-700 p-8 rounded-[30px] shadow-[0_0_15px_rgba(0,0,0,0.5)]"
        >
          <h3 class="text-xl font-bold !mb-6 !pt-5 !pl-5 text-[#facc15] uppercase tracking-wider italic">Income vs. Payroll</h3>
          <div class="h-[350px]">
            <Bar :data="barChartData" :options="(chartOptions as any)" />
          </div>
        </Motion>

        <Motion
          :initial="{ scale: 0.9, opacity: 0 }"
          :animate="{ scale: 1, opacity: 1 }"
          :transition="{ delay: 0.7, duration: 0.6 }"
          class="bg-gray-900 border-2 border-gray-700 p-8 rounded-[30px] shadow-[0_0_15px_rgba(0,0,0,0.5)]"
        >
          <h3 class="text-xl font-bold !mb-6 !pt-5 !pl-5 text-[#03e9f4] uppercase tracking-wider italic">Expenses Breakdown</h3>
          <div class="h-[350px] flex justify-center">
            <Doughnut :data="doughnutData" :options="(chartOptions as any)" />
          </div>
        </Motion>
      </div>
    </div>
  </Motion>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Motion } from "@motionone/vue";
import { Bar, Doughnut } from 'vue-chartjs';
import { 
  Chart as ChartJS, Title, Tooltip, Legend, BarElement, 
  CategoryScale, LinearScale, ArcElement, type ChartOptions, type ChartData 
} from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement);

// Types and Data (Kept exactly as you had them)
interface FinanceData {
  revenue: number;
  netProfit: number;
  expenses: number;
  cashFlow: number;
  totalPayroll: number;
}

const financeData: FinanceData = {
  revenue: 150000,
  netProfit: 55000,
  expenses: 65000,
  cashFlow: 30000,
  totalPayroll: 45000
};

const formatCurrency = (val: number) => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);
};

const statCards = computed(() => [
  { label: 'Revenue', value: financeData.revenue, neonColor: 'text-[#03e9f4]' },
  { label: 'Net Profit', value: financeData.netProfit, neonColor: 'text-[#facc15]' },
  { label: 'Cash Flow', value: financeData.cashFlow, neonColor: 'text-white' },
  { label: 'Payroll', value: financeData.totalPayroll, neonColor: 'text-red-500' },
]);

const barChartData = computed<ChartData<'bar'>>(() => ({
  labels: ['Revenue', 'Net Profit', 'Payroll'],
  datasets: [{
    label: 'USD',
    backgroundColor: ['#03e9f4', '#facc15', '#ef4444'],
    data: [financeData.revenue, financeData.netProfit, financeData.totalPayroll],
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#374151'
  }]
}));

const doughnutData = computed<ChartData<'doughnut'>>(() => ({
  labels: ['Expenses', 'Cash Flow'],
  datasets: [{
    backgroundColor: ['#374151', '#03e9f4'], 
    hoverBackgroundColor: ['#4b5563', '#00d8e2'],
    data: [financeData.expenses, financeData.cashFlow],
    borderWidth: 0
  }]
}));

const chartOptions: ChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { 
      position: 'bottom',
      labels: { 
        color: '#9ca3af', 
        font: { family: 'serif', size: 12 },
        padding: 20
      }
    }
  },
  scales: {
    y: {
      grid: { color: '#1f2937' }, 
      ticks: { color: '#9ca3af' }
    },
    x: {
      grid: { display: false },
      ticks: { color: '#9ca3af' }
    }
  }
};
</script>

<style scoped>
h1, h3, p {
  text-shadow: 0 0 10px rgba(3, 233, 244, 0.2);
}
</style>