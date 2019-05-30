<template>
  <div class="tables_wrapper">
    <div class="tables">
      <h1>{{ msg }}</h1>
      <v-client-table :data="tableData" :columns="columns" :options="options">
        <a slot="email" slot-scope="props" :href="`mailto:${props.row.email}`">
          {{props.row.email}}
        </a>
      </v-client-table>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Tables',
    data () {
      return {
        msg: 'Sample Table',
        columns: ["id", "name", "age", "email", "isTrue"],
        tableData: this.getData(),
        options: {
          filterByColumn: true,
          perPage: 10,
          listColumns: {
            isTrue: [
              { id: 'true', text: 'O' },
              { id: 'false', text: 'X' }
            ],
          },
          headings: {
            id: 'User Id',
            name: 'User Name',
            age: 'User Age',
            email: 'User Email',
            isTrue: 'User isTrue'
          },
          sortable: ['id', 'name', 'age', 'isTrue'],
          // 검색 filter에 포함시킬 데이터
          filterable: ['id', 'name', 'age', 'email', 'isTrue'],
          texts: {
            filterPlaceholder: 'Search',
            filter: "Search",
            filterBy: 'Search {column}',
            count: "",
          },
          pagination: { chunk: 5, dropdown: false },
          datepickerOptions: {
            showDropdowns: true
          },
        }
      }
    },
    watch: {
    },
    computed: {
    },
    mounted () {
    },
    methods: {
      getData () {
        const arr = [];
        for (let i = 0; i < 250; i++) {
          arr.push({
            'id': i,
            'name': `sample${i}`,
            'email': `sample${i}@example.com`,
            'age': `${this.getRandomInt(10, 100)}`,
            'isTrue': `${i % 2 == 0 ? true : false}`,
            // 'birth_date': `${this.randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))}`
          })
        }
        return arr;
      },
      // min 포함, max 불포함
      getRandomInt (min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      },
      randomDate(start, end) {
        return this.moment(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
      }
    },
    components: {
    }
  }
</script>

<style lang="scss">
  @import "Tables.scss";
</style>
