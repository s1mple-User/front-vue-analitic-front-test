<script setup lang="ts">
import { ref, computed } from 'vue';
import Saidbar from '@/layouts/Saidbar.vue';
import ProductComponent from "./Product-component.vue";
import OperationalMetricsComponent from "./OperationalMetrics-component.vue";
import ExpensesComponent from "./Expenses-component.vue";
import EmoplyeeComponent from "./Employee-component.vue";
import AnaliticComponent from "./Analytics-component.vue";
// @ts-ignore
import FinancialMetricsComponent from './FinancialMetrics-component.vue';


type TabType = "product" | "financial-metrics" | "expenses" | "emoplyee" | "analitic" | "operation-metrics";

const activeTab = ref<TabType>("product");

const componentMap = {
    "product": ProductComponent,
    "financial-metrics": FinancialMetricsComponent,
    "expenses": ExpensesComponent,
    "emoplyee": EmoplyeeComponent,
    "analitic": AnaliticComponent,
    "operation-metrics": OperationalMetricsComponent,
};

function getValueSaidbar(title: TabType) {
    activeTab.value = title;
}
</script>

<template>
    <Saidbar :activeTab="activeTab" :getValueSaidbar="getValueSaidbar"/> 
    
    <div class="relative w-[1200px] h-auto top-[40px] left-[310px] border-2 border-gray-700 bg-gray-900/95 rounded-2xl flex justify-center p-4">
        <component :is="componentMap[activeTab]" />
    </div>
</template>