<template>
  <v-container>
    <div>
      <!-- Pizza Tracker Table -->
      <v-card>
        <v-card-title>
          pizza tracker
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table :headers="headers" :items="tableArrayOfList" :search="search">
          <template v-slot:item="row">
            <tr>
              <td>
                <v-chip
                  class="ma-2"
                  color="primary"
                  @click="onButtonClick(row.item)"
                >
                  {{ row.item.name }}
                </v-chip>
              </td>
              <td>{{ row.item.noOfOrdered }}</td>
              <td>{{ row.item.amount }}</td>
              <td>{{ row.item.status }}</td>
              <td>
                <v-btn
                  dark
                  small
                  color="pink"
                  @click="onClickChangeStatus(row.item, row.index)"
                >
                  Change Satus
                </v-btn>
              </td>
            </tr>
          </template>
        </v-data-table>
      </v-card>
      <!-- Pizza Tracker Table End -->

      <!-- Customer Pizza Details Dialog-->
      <div class="text-center">
        <v-dialog v-model="dialog" width="500">
          <v-card>
            <v-card-title class="headline grey lighten-2">
              Customer Pizza Details
            </v-card-title>

            <v-card-text>
              <PizzaDetails :pizzaData="pizzaData"></PizzaDetails>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="dialog = false">
                Close
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
      <!-- Customer Pizza Details Dialog End-->

      <!-- Change Status Dialog -->
      <div class="text-center">
        <v-dialog v-model="changeStatusDialog" width="500">
          <v-card>
            <v-card-title class="headline grey lighten-2">
              Change Status
            </v-card-title>

            <v-card-text>
              <v-col class="d-flex" cols="12" sm="12">
                <v-select
                  v-model="select"
                  :items="items"
                  label="Select Status"
                  outlined
                  return-object
                  v-on:change="selectStatus(select)"
                ></v-select>
              </v-col>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="changeStatusDialog = false">
                Close
              </v-btn>
              <v-btn color="primary" @click="changeStatus()"> Change </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
      <!-- Change Status Dialog End -->
    </div>
  </v-container>
</template>

<script>
import PizzaDetails from '@/components/PizzaDetails.vue';
export default {
  name: 'Home',
  components: {
    PizzaDetails,
  },
  data() {
    return {
      pizzaData: [],
      items: ['Order Received', 'Preparing', 'Ready to serve'],
      dialog: false,
      changeStatusDialog: false,
      search: '',
      select: '',
      selectedStatus: '',
      tableArrayOfList: [],
      pizzaDataIndex: '',
      headers: [
        {
          text: 'Customer Name',
          sortable: false,
          value: 'name',
        },
        { text: 'No. Of Items Ordered', value: 'noOfOrdered' },
        { text: 'Total Amount Of The Order', value: 'amount' },
        { text: 'Status Of The Order', value: 'status' },
        { text: 'Action', value: 'actions', sortable: false },
      ],
      
      desserts: [
        {
          name: 'Mohit',
          noOfOrdered: 2,
          amount: 200,
          status: 'Order Received',
        },
        {
          name: 'Ankit',
          noOfOrdered: 3,
          amount: 300,
          status: 'Order Received',
        },
        {
          name: 'Ayush',
          noOfOrdered: 4,
          amount: 400,
          status: 'Order Received',
        },
        {
          name: 'Shubham',
          noOfOrdered: 5,
          amount: 500,
          status: 'Order Received',
        },
      ],
    }; 
  },
  mounted() {
    if (JSON.parse(localStorage.getItem('pizzaTrackerList'))) {
      this.tableArrayOfList = JSON.parse(localStorage.getItem('pizzaTrackerList'));
    } else {
      localStorage.setItem('pizzaTrackerList', JSON.stringify(this.desserts));
       this.tableArrayOfList = JSON.parse(localStorage.getItem('pizzaTrackerList'));
    }
  },
  methods: {
    onButtonClick: function (item) {
      this.pizzaData = item;
      this.dialog = true;
    },
    onClickChangeStatus: function (item, index) {
      this.pizzaData = item;
      this.changeStatusDialog = true;
      this.pizzaDataIndex = index;
    },
    selectStatus: function (item) {
      this.selectedStatus = item;
    },
    changeStatus: function () {
      var array = JSON.parse(localStorage.getItem('pizzaTrackerList'));
      array[this.pizzaDataIndex].status = this.selectedStatus;
      localStorage.setItem('pizzaTrackerList', JSON.stringify(array));
      this.changeStatusDialog = false;
      this.tableArrayOfList = JSON.parse(localStorage.getItem('pizzaTrackerList'));
    },
  },
};
</script>
