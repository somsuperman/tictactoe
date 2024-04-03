<template>
  <div class="p-4 flex flex-col items-center text-white font-bold">
    <div v-if="winner" class="mb-4">
      <div class="py-2 px-4 rounded text-center" :class="winnerColor">
        {{ winner }} vyhral!
      </div>
      <button @click="startNewGame" class="bg-blue-500 text-white py-2 px-4 rounded mt-2">New Game</button>
    </div>

    <div class="mb-4" v-if="!winner">
      <div class="py-2 px-4 rounded" :class="currentPlayerColor">
        na ťahu je {{ currentPlayer }}
      </div>
    </div>
    <div class="mb-4 text-white">čas: {{ formattedTime }}</div>
    <div class="mb-4"><span class="bg-red-500 px-1">X</span> výhier: {{ stats.X }} | <span class="px-1 bg-green-500">O</span> výhier: {{ stats.O }}</div>
    <div class="grid" :style="gridStyle">
      <div v-for="(cell, index) in cells" :key="index" class="border border-gray-300 flex justify-center items-center hover:bg-gray-800 cursor-pointer" @click="makeMove(index)" :class="cellColor(cell)">
        <span class="text-2xl">{{ cell }}</span>
      </div>
    </div>
    <button v-if="!winner" @click="resetGame" class="mt-4 bg-gray-500 text-white py-2 px-4 rounded">resetovať hru</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onUnmounted, computed } from 'vue';

export default defineComponent({
  name: 'TicTacToe',
  setup() {
    const cells = ref<Array<string | null>>(Array(15 * 15).fill(null));
    const currentPlayer = ref<'X' | 'O'>('X');
    const winner = ref<string | null>(null);
    const stats = ref({ X: 0, O: 0 });
    const gridSize = 15;
    const timer = ref(0);
    const gameStarted = ref(false);
    let intervalId: number | undefined;

    const gridStyle = ref({
      display: 'grid',
      gridTemplateColumns: `repeat(${gridSize}, 2rem)`,
      gridTemplateRows: `repeat(${gridSize}, 2rem)`,
      gap: '2px',
    });

    onUnmounted(() => {
      stopTimer();
    });

    function startTimer() {
      if (!gameStarted.value) {
        gameStarted.value = true;
        intervalId = window.setInterval(() => {
          timer.value++;
        }, 1000);
      }
    }

    function stopTimer() {
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = undefined;
      }
    }

    function makeMove(index: number) {
      if (!winner.value && cells.value[index] === null) {
        if (!gameStarted.value) startTimer();
        cells.value[index] = currentPlayer.value;
        if (checkWin(index)) {
          winner.value = currentPlayer.value;
          stats.value[currentPlayer.value as keyof typeof stats.value]++;
          stopTimer();
          return;
        }
        currentPlayer.value = currentPlayer.value === 'X' ? 'O' : 'X';
      }
    }

    function checkWin(index: number): boolean {
      const row = Math.floor(index / gridSize);
      const col = index % gridSize;
      const player = cells.value[index];

      // Direction vectors (horizontal, vertical, two diagonals)
      const directions = [
        { dr: 0, dc: 1 }, // Horizontal
        { dr: 1, dc: 0 }, // Vertical
        { dr: 1, dc: 1 }, // Diagonal (down-right)
        { dr: 1, dc: -1 } // Diagonal (down-left)
      ];

      // Check in all directions
      for (let { dr, dc } of directions) {
        let count = 1; // Include the current cell

        // Check in the positive direction
        for (let i = 1; i < 5; i++) {
          const nr = row + dr * i;
          const nc = col + dc * i;
          if (nr < 0 || nr >= gridSize || nc < 0 || nc >= gridSize || cells.value[nr * gridSize + nc] !== player) break;
          count++;
        }

        // Check in the negative direction
        for (let i = 1; i < 5; i++) {
          const nr = row - dr * i;
          const nc = col - dc * i;
          if (nr < 0 || nr >= gridSize || nc < 0 || nc >= gridSize || cells.value[nr * gridSize + nc] !== player) break;
          count++;
        }

        if (count >= 5) return true; // Found a winning sequence
      }

      return false; // No win found
    }


    function resetGame() {
      cells.value.fill(null);
      currentPlayer.value = 'X';
      timer.value = 0;
      gameStarted.value = false;
      stopTimer();
    }

    function startNewGame() {
      resetGame();
      winner.value = null;
    }

    function cellColor(cell: string | null) {
      return {
        'bg-red-500': cell === 'X',
        'bg-green-500': cell === 'O',
      };
    }

    const formattedTime = computed(() => {
      const minutes = Math.floor(timer.value / 60);
      const seconds = timer.value % 60;
      return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    });

    const currentPlayerColor = computed(() => {
      return {
        'bg-red-500': currentPlayer.value === 'X',
        'bg-green-500': currentPlayer.value === 'O',
        'text-white': true,
      };
    });

    const winnerColor = computed(() => {
      return {
        'bg-red-500': winner.value === 'X',
        'bg-green-500': winner.value === 'O',
        'text-white': true,
      };
    });

    return { cells, makeMove, resetGame, startNewGame, gridStyle, cellColor, formattedTime, winner, stats, currentPlayer, currentPlayerColor, winnerColor };
  },
});
</script>

<style scoped>
.grid > div {
  width: 2rem;
  height: 2rem;
}
</style>
