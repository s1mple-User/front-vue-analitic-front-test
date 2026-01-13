<script setup lang="ts">
import { ref } from 'vue';
import { Motion } from "@motionone/vue"; // Correct import for Motion One Vue
import Button from '../ui/button/Button.vue';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Dialog, DialogTrigger, DialogContent } from '../ui/dialog';

defineProps<{
  title: string;
  price: number | string;
}>();

const isOpenDelete = ref<boolean>(false);
</script>

<template>
  <div class="inline-block">
    <Motion
      tag="div"
      :initial="{ opacity: 0, y: 20 }"
      :animate="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.5, easing: 'ease-out' }"
    >
      <Card class="border-2 border-gray-700 bg-gray-900 w-[220px] h-auto transition-all hover:border-gray-500 !mt-10">
        <CardHeader class="text-white !p-5 !pb-5">
          <h1 class="text-lg font-bold truncate">{{ title }}</h1>
          <p class="text-green-400 font-mono text-sm">${{ price }}</p>
        </CardHeader>

        <CardContent class="!p-5 !pt-0">
          <Dialog v-model:open="isOpenDelete">
            <DialogTrigger as-child>
              <Motion tag="div" :hover="{ scale: 1.05 }" :press="{ scale: 0.95 }">
                <Button 
                  variant="secondary" 
                  class="w-full mt-4 border-[#facc15] text-[#facc15] bg-transparent hover:bg-[#facc15] hover:text-black 
                  transition-all duration-300 shadow-[0_0_10px_rgba(250,204,21,0.3)] hover:shadow-[0_0_20px_#facc15] 
                  uppercase tracking-widest font-bold border text-[10px] py-4"
                >
                  Delete
                </Button>
              </Motion>
            </DialogTrigger>

            <DialogContent class="bg-gray-900/98 border-gray-700 w-[400px] rounded-xl">
              <div class="flex items-center flex-col gap-6 !p-6">
                <h2 class="text-white text-xl font-semibold text-center">
                  Are you sure you want to delete <span class="text-[#facc15]">{{ title }}</span>?
                </h2>
                <div class="flex items-center gap-4">
                  <Button 
                    class="bg-green-500 hover:bg-green-400 text-white w-[120px] shadow-lg shadow-green-900/50" 
                    @click="isOpenDelete = false"
                  >
                    Confirm
                  </Button>
                  <Button 
                    class="bg-red-700 hover:bg-red-600 text-white w-[120px] shadow-lg shadow-red-900/50" 
                    @click="isOpenDelete = false"
                  >
                    Refusal
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>
    </Motion>
  </div>
</template>