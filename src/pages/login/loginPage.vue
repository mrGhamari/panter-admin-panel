<template>
  <q-page class="login-page fit row justify-center items-center">
    <div class="col-2">
      <div class="row text-h6">
        Welcome to
        <div class="text-bold text-h5 q-px-xs text-primary">Panter</div>
        admin panel :)
      </div>
      <q-form ref="loginFormRef" class="column fit q-col-gutter-y-sm q-mt-xs">
        <q-input
          label="User Name"
          outlined
          dense
          no-error-icon
          :rules="[rules.required]"
          v-model="loginForm.userName"
        />
        <q-input
          label="Password"
          outlined
          dense
          no-error-icon
          :rules="[rules.required, rules.password]"
          v-model="loginForm.password"
        />
      </q-form>
      <q-btn
        label="login"
        color="primary"
        class="fit q-mt-md"
        @click="goToPage"
      />
    </div>
  </q-page>
</template>

<script setup lang="ts">
name: 'LoginPage';
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useRules } from 'src/composables/use-rules';

// ------ Variables ------
// compose
const rules = useRules();
const router = useRouter();
// data
const loginFormRef = ref();
const loginForm: { userName?: string; password?: string } = reactive({});

// ------ Methods ------
const goToPage = () => {
  loginFormRef.value.validate().then(async (success: boolean) => {
    if (success) router.push({ name: 'Dashboard' });
  });
};
</script>
