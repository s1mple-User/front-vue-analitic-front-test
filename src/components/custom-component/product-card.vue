<script setup lang="ts">
import { ref } from 'vue';
// @ts-ignore
import { Motion } from "@motionone/vue"; 
import Button from '../ui/button/Button.vue';
import { CardContent, CardHeader, Card } from '../ui/card';
import Dialog from '../ui/dialog/Dialog.vue';
import DialogContent from '../ui/dialog/DialogContent.vue';
import DialogTrigger from '../ui/dialog/DialogTrigger.vue';

defineProps<{
  title: string;
  price: number;
  spend_time_to_create: number;
  spend_money_to_create: number;
  amount: number;
}>();

const isOpenDelete = ref<boolean>(false)
</script>

<template>
  <Motion
    :initial="{ opacity: 0, y: 20, scale: 0.95 }"
    :animate="{ opacity: 1, y: 0, scale: 1 }"
    :hover="{ scale: 1.03, borderColor: '#03e9f4' }"
    :transition="{ duration: 0.4 }"
  >
    <Card class="h-[300px] !px-10 !pt-[30px] border-2 border-gray-700 bg-gray-900 shadow-lg cursor-default">
      <CardHeader>
        <div class="text-white px-6 py-4 flex flex-col gap-3">
          <h1 class="text-2xl font-bold border-b border-gray-600 pb-2 mb-2 tracking-tight">
            {{ title }}
          </h1>

          <div class="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p class="text-gray-400">Price</p>
              <p class="text-[#03e9f4] font-semibold text-lg">${{ price }}</p>
            </div>
            <div>
              <p class="text-gray-400">Amount</p>
              <p class="font-semibold text-lg text-white">{{ amount }} units</p>
            </div>
            <div>
              <p class="text-gray-400">Time Investment</p>
              <p class="font-medium text-gray-200">{{ spend_time_to_create }} hrs</p>
            </div>
            <div>
              <p class="text-gray-400">Cost of Materials</p>
              <p class="text-red-400 font-medium">${{ spend_money_to_create }}</p>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent class="!mt-7 flex gap-10">
        <Dialog v-model:open="isOpenDelete">
          <DialogTrigger as-child>
            <Button 
              variant="secondary" 
              class="flex-1 w-[100px] border-[#facc15] text-[#facc15] bg-transparent hover:bg-[#facc15] hover:text-black 
              transition-all duration-300 shadow-[0_0_10px_rgba(250,204,21,0.3)] hover:shadow-[0_0_20px_#facc15] 
              uppercase tracking-widest font-bold border text-xs py-6"
            >
              Delete
            </Button>
          </DialogTrigger>
        </Dialog>
      </CardContent>
    </Card>
  </Motion>

  <Dialog v-model:open="isOpenDelete">
    <DialogContent class="bg-gray-900/95 w-[600px] border-gray-700 flex justify-center items-center h-[160px]">
      <div class="flex items-center flex-col gap-7">
        <h2 class="text-white text-[20px] font-serif tracking-wide">Are you sure?</h2>
        <div class="flex items-center gap-6">
          <Button 
            class="hover:bg-green-400 bg-green-500 shadow-green-600/20 shadow-lg border-green-500 border-2 text-white w-[120px] font-bold" 
            @click="isOpenDelete = false"
          >
            YES
          </Button>
          <Button 
            class="text-white hover:bg-red-500 hover:shadow-red-500/20 shadow-lg bg-red-700 border-red-700 border-2 w-[120px] font-bold" 
            @click="isOpenDelete = false"
          >
            REFUSAL
          </Button>
        </div>
      </div>
    </DialogContent>
  </Dialog>
</template>