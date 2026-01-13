<script setup lang="ts">
import { Icon } from '@iconify/vue';
</script>

<template>
    <div data-aos="fade-up" class="rounded-[40px] border-gray-600 relative top-32  border-2 h-[600px] bg-gray-900 opacity-90 px-10 overflow-hidden ">
        <div class="relative top-28 left-12">
             <h1 class="text-white text-3xl font-bold font-serif mb-6">PLATFORAM CAPABILITIES:</h1>
             
             <div class="flex items-center gap-6">
                
                <div class="group flex items-center relative top-10 w-full max-w-xs cursor-pointer hover:-top-5 transition-all duration-500">
                    <div class="border-4 rounded-2xl border-[#03e9f4] group-hover:bg-[#03e9f4] w-full backdrop-blur-sm h-80 shadow-[0_0_25px_#03e9f4] transition-all duration-300">
                        <div class="flex flex-col items-center gap-5 relative top-5">
                            <Icon icon="ci:window-code-block" class="text-[#03e9f4] group-hover:text-white text-9xl transition-colors duration-300" />
                            <div class="text-center px-4">
                                <h1 class="text-white text-2xl font-bold font-serif">Seamless Integrations</h1>
                                <p class="text-gray-400 group-hover:text-white/80 font-bold font-serif text-xl transition-colors duration-300">Connect to all data sources</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="group flex items-center relative top-10 w-full max-w-xs cursor-pointer hover:-top-5 transition-all duration-500">
                    <div class="border-4 rounded-2xl border-green-600 group-hover:bg-green-600 w-full backdrop-blur-sm h-80 shadow-[0_0_25px_#16a34a] transition-all duration-300">
                        <div class="flex flex-col items-center gap-5 relative top-5">
                            <Icon icon="f7:antenna-radiowaves-left-right" class="text-green-600 group-hover:text-white text-9xl transition-colors duration-300" />
                            <div class="text-center px-4">
                                <h1 class="text-white text-2xl font-bold font-serif">Predictive AI</h1>
                                <p class="text-gray-400 group-hover:text-white/80 font-bold font-serif text-xl transition-colors duration-300">Forecast trends with precision</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="group flex items-center relative top-10 w-full max-w-xs cursor-pointer hover:-top-5 transition-all duration-500">
                    <div class="border-4 rounded-2xl border-purple-700 group-hover:bg-purple-700 w-full backdrop-blur-sm h-80 shadow-[0_0_25px_#7e22ce] transition-all duration-300">
                        <div class="flex flex-col items-center gap-5 relative top-5">
                            <Icon icon="ic:round-access-time" class="text-purple-700 group-hover:text-white text-9xl transition-colors duration-300" />
                            <div class="text-center px-4">
                                <h1 class="text-white text-2xl font-bold font-serif">Real-time Analytics</h1>
                                <p class="text-gray-400 group-hover:text-white/80 font-bold font-serif text-xl transition-colors duration-300">Always have all the latest data</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="group flex items-center relative top-10 w-full max-w-xs cursor-pointer hover:-top-5 transition-all duration-500">
                    <div class="border-4 rounded-2xl border-red-700 group-hover:bg-red-700 w-full backdrop-blur-sm h-80 shadow-[0_0_25px_#b91c1c] transition-all duration-300">
                        <div class="flex flex-col items-center gap-5 relative top-5">
                            <Icon icon="ic:outline-sentiment-satisfied" class="text-red-700 group-hover:text-white text-9xl transition-colors duration-300" />
                            <div class="text-center px-4">
                                <h1 class="text-white text-2xl font-bold font-serif">Customer Success</h1>
                                <p class="text-gray-400 group-hover:text-white/80 font-bold font-serif text-xl transition-colors duration-300">Actionable user insights</p>
                            </div>
                        </div>
                    </div>
                </div>

             </div>
        </div>
    </div>
</template>