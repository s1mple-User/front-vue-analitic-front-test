<script setup lang="ts">
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardFooter 
} from '@/components/ui/card'

import { Icon } from '@iconify/vue'
import { Badge } from 'lucide-vue-next';
import { Progress } from 'reka-ui/namespaced';
import Button from '../ui/button/Button.vue';
import Dialog from '../ui/dialog/Dialog.vue';
import DialogTrigger from '../ui/dialog/DialogTrigger.vue';
import DialogContent from '../ui/dialog/DialogContent.vue';
import DialogHeader from '../ui/dialog/DialogHeader.vue';
import DialogTitle from '../ui/dialog/DialogTitle.vue';
import { ref } from 'vue';

export interface IEmployee {
  user: {
    name: string;
    email: string;
  };
  role?: string;
  salary: number;
  efficiency: number;
}

defineProps<{
  employee: IEmployee
}>()

const isOpen = ref<boolean>(false)
const isOpenDelete = ref<boolean>(false)
</script>

<template>
  <Card class="relative w-[350px] max-w-md bg-gray-900/95 text-white border-gray-600 border-2 
  rounded-[30px] overflow-hidden shadow-[0_0_15px_rgba(3,233,244,0.1)]">
    
    <div class="card-glow">
        <span></span><span></span><span></span><span></span>
    </div>

    <CardHeader class="h-[300px] w-[1000px] relative z-10">
      <div class="flex justify-between items-start">
        <div class="flex items-center gap-3">
          <div class="p-2 bg-transparent border border-[#03e9f4] rounded-full shadow-[0_0_10px_#03e9f4]">
            <Icon icon="lucide:user" class="size-5 h-[50px] w-[50px]  text-[#03e9f4]" />
          </div>
          <div>
            <CardTitle class="text-xl font-bold font-serif tracking-wide">{{ employee.user.name }}</CardTitle>
            <CardDescription class="text-gray-400 flex items-center gap-1 mt-1 font-serif">
              <Icon icon="lucide:mail" class="size-3" /> {{ employee.user.email }}
            </CardDescription>
          </div>
        </div>
        <Badge class="bg-transparent border border-[#03e9f4] text-[#03e9f4] hover:bg-[#03e9f4] hover:text-black transition-all duration-300">
          {{ employee.role || 'Сотрудник' }}
        </Badge>
      </div>
    </CardHeader>

    <CardContent class="space-y-6 pt relative z-10">
      <div class="flex items-center justify-between group">
        <div class="flex items-center gap-2 text-gray-400">
          <Icon icon="lucide:dollar-sign" class="size-4 text-[#facc15] drop-shadow-[0_0_5px_#facc15]" />
          <span class="font-serif font-bold uppercase tracking-tighter">Rate:</span>
        </div>
        <span class="font-mono text-xl font-bold text-[#facc15] drop-shadow-[0_0_8px_#facc15]">
          {{ employee.salary.toLocaleString() }} $
        </span>
      </div>

      <div class="space-y-3">
        <div class="flex items-center justify-between text-sm">
          <div class="flex items-center gap-2 text-gray-400 font-serif font-bold uppercase">
            <Icon icon="lucide:zap" class="size-4 text-[#03e9f4] animate-pulse" />
            <span>Efficiency:</span>
          </div>
          <span class="text-[#03e9f4] font-bold drop-shadow-[0_0_5px_#03e9f4]">
            {{ employee.efficiency }}%
          </span>
        </div>
        <Progress 
          :model-value="employee.efficiency" 
          class="h-1.5 bg-gray-800 border border-gray-700" 
          :style="{ '--progress-background': '#03e9f4' }"
        />
      </div>
    </CardContent>

<CardFooter class="border-t border-gray-800 p-8 pt-10 flex flex-col gap-4 relative z-10">
    
    <div class="flex justify-end gap-3 w-[300px] relative top-3">
        <Dialog v-model:open="isOpen">
          <DialogTrigger as-child>
        <Button 
          variant="outline" 
          class="flex-1 border-[#03e9f4] text-[#03e9f4] bg-transparent hover:bg-[#03e9f4] hover:text-black transition-all
           duration-300 shadow-[0_0_10px_rgba(3,233,244,0.3)] hover:shadow-[0_0_20px_#03e9f4] uppercase tracking-widest font-bold text-xs py-6"
        >
          Update
        </Button>
        </DialogTrigger>
         </Dialog>

            <Dialog v-model:open="isOpenDelete">
                <DialogTrigger as-child>
        <Button 
          variant="secondary" 
          class="flex-1 border-[#facc15] text-[#facc15] bg-transparent hover:bg-[#facc15] hover:text-black 
          transition-all duration-300 shadow-[0_0_10px_rgba(250,204,21,0.3)] hover:shadow-[0_0_20px_#facc15] 
          uppercase tracking-widest font-bold border text-xs py-6"
        >
          Delete
        </Button>
        </DialogTrigger>
        </Dialog>
    </div>

    <p class="text-[10px] text-gray-600 uppercase tracking-[4px] text-center w-full mt-2">
      Personnel Analytics System v.4.0
    </p>
</CardFooter>
  </Card>

  <Dialog v-model:open="isOpen">
    <DialogContent class="bg-gray-900/95 w-[1200px] h-[300px] rounded-xl">
     <div class="flex items-center flex-col gap-5">

          <Input class="w-[300px] h-[45px] text-white border-2 border-white rounded-xl !mt-[30px]  !pl-[15px]" type="email" placeholder="Efficiency" />
          <Input class="w-[300px] h-[45px] text-white border-2 border-white rounded-xl !pl-[15px]" type="email" placeholder="salary" />
          <Input class="w-[300px] h-[45px] text-white border-2 border-white rounded-xl !pl-[15px]" type="email" placeholder="role" />
      <div class="flex items-center   gap-6">
        <Button class="hover:bg-green-400 bg-green-500 shadow-green-600 shadow-lg border-green-500
         border-2 text-white w-[100px]" @click="isOpen = false">UpDate</Button>
          <Button class="text-white hover:bg-red-500 hover:shadow-red-500 shadow-lg
           shadow-red-700 bg-red-700 w-[100px]" @click="isOpen = false">refusal</Button>
      </div>
      </div>
    </DialogContent>
  </Dialog>

    <Dialog  v-model:open="isOpenDelete">
    <DialogContent class="bg-gray-900/95 w-[600px] flex justify-center items-center h-[140px]">
      <div class="flex items-center flex-col gap-7">
        <h2 class="text-white text-[20px]"> Are you sure?</h2>
      <div class="flex items-center   gap-6">
        <Button class="hover:bg-green-400 bg-green-500 shadow-green-600 shadow-lg border-green-500 border-2 text-white w-[100px]" @click="isOpenDelete = false">Yes</Button>
          <Button class="text-white hover:bg-red-500 hover:shadow-red-500 
          shadow-lg shadow-red-700 bg-red-700 w-[100px]" @click="isOpenDelete = false">refusal</Button>
      </div>
      </div>
    </DialogContent>
  </Dialog>
</template>

<style scoped>
.neon-update {
  border: 1px solid #03e9f4;
  color: #03e9f4;
  animation: pulse-cyan 3s infinite;
}

.neon-update:hover {
  border: 1px solid #03e9f4;
  color: #ffffff;
  animation: pulse-cyan 3s infinite;
}

.neon-delete {
  border: 1px solid #facc15;
  color: #facc15;
  animation: pulse-gold 3s infinite;
}

@keyframes pulse-cyan {
  0%, 100% { box-shadow: 0 0 5px rgba(3, 233, 244, 0.4); }
  50% { box-shadow: 0 0 15px rgba(3, 233, 244, 0.8); }
}

@keyframes pulse-gold {
  0%, 100% { box-shadow: 0 0 5px rgba(250, 204, 21, 0.4); }
  50% { box-shadow: 0 0 15px rgba(250, 204, 21, 0.8); }
}
</style>