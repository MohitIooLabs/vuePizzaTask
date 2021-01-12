<template>
  <v-container>
    <!-- ProgressBar Component Start -->
    <div class="text-center">
      <ProgressBar :pizzaData="pizzaData"></ProgressBar>
    </div>
    <!-- ProgressBar Component End -->

    <!-- Customer Pizza Details -->
    <div class="text-center">
      <v-list dense>
        <v-list-item>
          <v-list-item-content>Customer Name :</v-list-item-content>
          <v-list-item-content class="align-end">
            {{ pizzaData.name }}
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>No. Of Items Ordered :</v-list-item-content>
          <v-list-item-content class="align-end">
            {{ pizzaData.noOfOrdered }}
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>Total Amount Of The Order :</v-list-item-content>
          <v-list-item-content class="align-end">
            {{ pizzaData.amount }}
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>Status Of The Order :</v-list-item-content>
          <v-list-item-content class="align-end">
            {{ pizzaData.status }}
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </div>
    <!-- Customer Pizza Details End -->
    
  </v-container>
</template>

<script>
// @ is an alias to /src
import ProgressBar from '@/components/ProgressBar.vue';

export default {
  name: 'PizzaDetails',
  props: ['pizzaData'],
  components: {
    ProgressBar,
  },
  data() {
    return {
    };
  },
  mounted() {},
  methods: {},
};
</script>