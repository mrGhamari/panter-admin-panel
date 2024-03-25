<template>
  <q-layout view="hHh lpR fFf">
    <q-header>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <q-list class="q-mt-md">
        <q-item
          v-for="(item, index) in sideBarItem"
          :key="index"
          clickable
          class="row items-center q-mx-sm rounded-borders"
          :class="
            currentPage == item.name ? 'bg-primary text-white' : 'bg-white'
          "
          @click="goToPage(item.route)"
        >
          <q-icon :name="item.icon" size="30px" />
          <div class="text-h6 text-bold q-ml-md">{{ item.name }}</div>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';

// ------ Variabels ------
const route = useRoute();
const router = useRouter();
const sideBarItem = [
  {
    name: 'Dashboard',
    icon: 'dashboard',
    route: 'Dashboard',
  },
];

// ------ Variabels ------
const leftDrawerOpen = ref<boolean>(false);

// ------ Computed ------
const currentPage = computed(
  () => sideBarItem.find((item) => item.name === route.name)?.name,
);

// ------ Methods ------
const goToPage = (route: string) => router.push({ name: route });
const toggleLeftDrawer = () => (leftDrawerOpen.value = !leftDrawerOpen.value);
</script>
