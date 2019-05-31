<template>
  <div class="create_wrapper" v-show="show">
    <div class="create">
      <div class="title">
        <h2>{{ title }}</h2>
        <input type="text" placeholder="name" v-model="user.name">
        <input type="text" placeholder="age" v-model="user.age">
        <input type="text" placeholder="email" v-model="user.email">
        <input type="text" placeholder="explanation" v-model="user.explanation">
        <div>
          isTrue :
          <input type='radio' value='true' id="true" v-model="user.isTrue"/>
          <label for="true">O</label>
          <input type='radio' value='false' id="false" v-model="user.isTrue"/>
          <label for="false">X</label>
        </div>
      </div>

      <div class="buttons">
        <button class="btn blue-button" @click="onSave">저장</button>
        <button class="button grey-button" @click="closePopup">취소</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Create',
    props: ['show', 'editUser'],
    data () {
      return {
        title : 'Create',
        user: {
          isTrue: true,
          name: '',
          age: '',
          email: '',
          explanation: '',
          image: 'https://www.netfort.com/assets/user.png',
        }
      }
    },
    watch: {
      show (newValue, oldValue) {
        if (newValue === true) {
          this.user.isTrue = true;
          this.user.name = '';
          this.user.age = '';
          this.user.email = '';
          this.user.explanation = '';
          this.user.image = 'https://www.netfort.com/assets/user.png';
        }
      },
      editUser (newValue, oldValue) {
        if (newValue) {
          if (newValue.isTrue === 'O') {
            newValue.isTrue = true;
          } else {
            newValue.isTrue = false;
          }
          this.user = newValue;
        }
      }
    },
    computed: {
    },
    mounted () {
    },
    methods: {
      closePopup () {
        this.$emit('close');
      },
      onSave () {
        if (this.editUser) {
          this.$emit('edit', this.user);
        } else {
          this.$emit('save', this.user);
        }
      }
    },
    components: {
    }
  }
</script>

<style lang="scss">
  @import "Create.scss";
</style>
