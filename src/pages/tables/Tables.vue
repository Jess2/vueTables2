<template>
  <div class="tables_wrapper">
    <div class="tables">
      <h1>{{ title }}</h1>
      <v-client-table :data="tableData" :columns="columns" :options="options">
        <a slot="email" slot-scope="props" :href="`mailto:${props.row.email}`">
          {{props.row.email}}
        </a>
        <template slot="image" scope="props">
          <img :src="props.row.image" alt="" width="50" height="50">
        </template>
        <template slot="child_row" slot-scope="props">
          The link to {{props.row.name}} is <a :href="props.row.url" target="_blank">{{props.row.url}}</a>
        </template>
      </v-client-table>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Tables',
    data () {
      return {
        title: 'JESSIE\'s vue-tables-2 Example',
        columns: ["id", "image", "name", "age", "email", "isTrue" ], // 테이블 컬럼
        tableData: this.getData(), // 테이블 데이터
        options: {
          filterByColumn: true, // 컬럼별 검색 기능
          perPage: 10, // 한 페이지에 몇 개 보여줄 지 설정
          listColumns: { // 드롭다운 선택 필터
            isTrue: [
              { id: 'true', text: 'O' },
              { id: 'false', text: 'X' }
            ],
          },
          headings: { // thead 이름 set
            id: 'User Id',
            name: 'User Name',
            age: 'User Age',
            email: 'User Email',
            isTrue: 'User isTrue',
            image: 'User Image'
          },
          sortable: ['id', 'name', 'age', 'isTrue'], // 정렬 기준에 포함시킬 데이터
          filterable: ['id', 'name', 'age', 'email', 'isTrue'], // 검색 필터에 포함시킬 데이터
          texts: { // 텍스트 대치
            filterPlaceholder: 'Search',
            filter: "Search :",
            filterBy: 'Search {column}',
            // count: "", // 기본값 예시 : Showing 1 to 10 of 250 records
          },
          pagination: { chunk: 5, dropdown: false }, // 페이지네이션 세팅
          // compileTemplates: true,
          fields: ['__slot:image'],
          highlightMatches: true,
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
            'image': 'https://www.netfort.com/assets/user.png',
            'url': 'http://maxst.com',
          })
        }
        return arr;
      },
      // min 포함, max 불포함
      getRandomInt (min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
    },
    components: {
    }
  }
</script>

<style lang="scss">
  @import "Tables.scss";
</style>
