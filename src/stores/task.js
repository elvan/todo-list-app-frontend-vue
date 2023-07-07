import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { allTasks } from '../http/task-api';

const tmp = {
  state: () => ({}),
  getters: {},
  actions: {},
};

export const useTaskStore = defineStore('taskStore', () => {
  const tasks = ref([]);

  const uncompletedTasks = computed(() =>
    tasks.value.filter((task) => !task.is_completed)
  );

  const completedTasks = computed(() =>
    tasks.value.filter((task) => task.is_completed)
  );

  const fetchAllTasks = async () => {
    const { data } = await allTasks();
    tasks.value = data.data;
  };

  return {
    tasks,
    completedTasks,
    uncompletedTasks,
    fetchAllTasks,
  };
});
