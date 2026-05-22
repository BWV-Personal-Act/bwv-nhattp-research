<template>
  <div v-if="visible" class="global-loading-overlay">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      style="
        margin: auto;
        background: transparent;
        display: block;
        shape-rendering: auto;
      "
      width="204px"
      height="204px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <g
        v-for="(item, index) in spinnerConfig"
        :key="index"
        :transform="`rotate(${item.rotate} 50 50)`"
      >
        <rect x="47" y="30" rx="3" ry="5.28" width="6" height="12">
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1.0204081632653061s"
            :begin="item.begin"
            repeatCount="indefinite"
          />
        </rect>
      </g>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

import { useLoadingStore } from "../../stores/loadingStore";

const loadingStore = useLoadingStore();
const visible = computed(() => loadingStore.shouldShowLoading);
const spinnerConfig = [
  { rotate: 0, begin: "-0.8746355685131196s" },
  { rotate: 51.42857142857143, begin: "-0.728862973760933s" },
  { rotate: 102.85714285714286, begin: "-0.5830903790087464s" },
  { rotate: 154.28571428571428, begin: "-0.4373177842565598s" },
  { rotate: 205.71428571428572, begin: "-0.2915451895043732s" },
  { rotate: 257.14285714285717, begin: "-0.1457725947521866s" },
  { rotate: 308.57142857142856, begin: "0s" },
];
</script>

<style scoped>
.global-loading-overlay {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  width: 100vw !important;
  height: 100vh !important;
  z-index: 2147483647 !important;
  background-color: rgba(107, 114, 128, 0.5) !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}

.global-loading-overlay .loading-spinner-svg {
  width: 204px;
  height: 204px;
  background: transparent;
  display: block;
  shape-rendering: auto;
}
</style>
