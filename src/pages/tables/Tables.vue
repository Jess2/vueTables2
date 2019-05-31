<template>
  <div class="tables_wrapper">
    <div class="tables">
      <h1>{{ title }}</h1>
      <button class="blue-button" @click="isOpenCreatePopup = true">등록하기</button>
      <v-client-table :data="userList" :columns="columns" :options="options">
        <a slot="email" slot-scope="props" :href="`mailto:${props.row.email}`">
          {{props.row.email}}
        </a>
        <template slot="image" scope="props">
          <img :src="props.row.image" alt="" width="50" height="50">
        </template>
        <template slot="child_row" scope="props">
          {{props.row.name}}의 부가 설명 : <a :href="props.row.url" target="_blank">{{props.row.explanation}}</a>
        </template>
      </v-client-table>
    </div>
    <create-component :show="isOpenCreatePopup" @save="saveUser" @close="closeCreatePopup"></create-component>
  </div>
</template>

<script>
  import CreateComponent from '../../components/create/Create'

  export default {
    name: 'Tables',
    data () {
      return {
        title: 'JESSIE\'s vue-tables-2 Example',
        columns: ["id", "image", "name", "age", "email", "isTrue" ], // 테이블 컬럼
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
            image: 'User Image',
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
        },
        userList: [],
        isOpenCreatePopup: false,
        newUser: {},
      }
    },
    watch: {
    },
    computed: {
    },
    mounted () {
      this.getData();
    },
    methods: {
      getData () {
        for (let i = 0; i < 9; i++) {
          this.userList.push({
            'id': i,
            'name': `sample${i}`,
            'email': `sample${i}@example.com`,
            'age': `${this.getRandomInt(10, 100)}`,
            'isTrue': `${i % 2 == 0 ? true : false}`,
            'image': 'https://www.netfort.com/assets/user.png',
            'explanation': 'http://maxst.com',
          })
        }
      },
      // min 포함, max 불포함
      getRandomInt (min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      },
      closeCreatePopup () {
        this.isOpenCreatePopup = false;
      },
      saveUser (user) {
        this.newUser = JSON.parse(JSON.stringify(user));
        this.newUser.id = this.userList[this.userList.length - 1].id + 1;
        this.userList.push(this.newUser);
        this.isOpenCreatePopup = false;
      }
    },
    components: {
      CreateComponent,
    }
  }
</script>

<style lang="scss">
  @import "Tables.scss";
</style>
