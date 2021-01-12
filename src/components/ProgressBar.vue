<template>
  <vue-ellipse-progress
    :progress="progress"
    :angle="-90"
    color="blue"
    emptyColor="#8ec5fc"
    :size="300"
    :thickness="10"
    emptyThickness="5%"
    lineMode="in 10"
    :legend="false"
    :legendValue="0"
    legendClass="legend-custom-style"
    dash="60 0.0"
    animation="reverse 700 400"
    :noData="false"
    :loading="false"
    fontColor="black"
    :half="false"
    :gap="10"
    dot="10 blue"
    fontSize="2rem"
  >
    <p slot="legend-caption">{{ pizzaData.status }}</p>
  </vue-ellipse-progress>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'ProgressBar',
  props: ['pizzaData'],

  components: {
  },
  
  data: function () {
    return {
      progress: '',
      maxTasks: 3,
      tasksDone: '',
      pizaaStatus: [],
      val: '',
      theData: this.pizzaData,
    };
  },
  watch: {
    pizzaData: {
      // Run as soon as the component loads
      immediate: true,
      handler() {
        // Set the 'somevar' value as props
        this.somevar = this.pizzaData;
        if (this.somevar.status === 'Order Received') {
          this.tasksDone = 1;
          this.progress = (this.tasksDone * 100) / this.maxTasks;
        } else if (this.somevar.status === 'Preparing') {
          this.tasksDone = 2;
          this.progress = (this.tasksDone * 100) / this.maxTasks;
        } else if (this.somevar.status === 'Ready to serve') {
          this.tasksDone = 3;
          this.progress = (this.tasksDone * 100) / this.maxTasks;
        }
      },
    },
  },

  mounted() {},
  methods: {},
};
</script>
