<template>
  <div id="app">
    <div class="App">
      <div class="wrapper">
        <div class="workspace" ref="workspace">
          <free-transform
            v-for="element in elements"
            :key="element.id"
            :x="element.x"
            :y="element.y"
            :scale-x="element.scaleX"
            :scale-y="element.scaleY"
            :width="element.width"
            :height="element.height"
            :angle="element.angle"
            :offset-x="offsetX"
            :offset-y="offsetY"
            :disable-scale="element.disableScale"
            :scale-from-center="element.scaleForCenter"
            :aspectRatio="element.aspectRatio"
            :selected="element.id === selectedElementId"
            selectOn="mousedown"
            @onSelect="setSelected(element.id)"
            @update="update(element.id, $event);"
          >
            <div v-if="element.type === 'figure'" class="element" :style="getElementStyles(element)">
              {{ element.text }}
            </div>
            <div v-if="element.type === 'title'" class="element">
              <!-- <i class="fa fa-times-circle" @click="deleteOn('title', i-1)"></i> -->
<!--              <img class="icon" src="/static/images/times-circle-solid.svg" @click="deleteOn('title', i-1)"/>-->
              <input class="titleInputClass" type="text" placeholder="타이틀 텍스트" v-model="element.text">
            </div>
          </free-transform>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import FreeTransform from '@/util/freeTransform/FreeTransForm'

  export default {
    name: "Authoring",
    components: {
      FreeTransform
    },
    data() {
      return {
        selectedElementId: 0, // 현재 selected 된 element의 id
        elements: [
          {
            id: "el-1",
            type: "figure",
            x: 100,
            y: 50,
            scaleX: 1,
            scaleY: 1,
            width: 100,
            height: 100,
            angle: 0,
            classPrefix: "tr",
            text: "el-1",
            styles: {
              background: "linear-gradient(135deg, #0FF0B3 0%,#036ED9 100%)",
              width: "100%",
              height: "100%",
            },
            disableScale: true, // 내부 텍스트 크기는 고정
            scaleForCenter: true, // 크기 조절 시, 가운데 기준
            aspectRatio: true, // 크기 조절 시, 비율 고정
          },
          {
            id: "el-2",
            type: "figure",
            x: 225,
            y: 225,
            scaleX: 1,
            scaleY: 1,
            width: 100,
            height: 100,
            angle: 0,
            classPrefix: "tr2",
            text: "el-2",
            styles: {
              padding: `5px`,
              background: "linear-gradient(135deg, #fad961 0%,#f76b1c 100%)",
              width: "100%",
              height: "100%",
            },
            disableScale: true,
            scaleForCenter: false,
            aspectRatio: true,
          },
          {
            id: "el-3",
            type: "figure",
            x: 100,
            y: 225,
            scaleX: 1,
            scaleY: 1,
            width: 100,
            height: 100,
            angle: 0,
            classPrefix: "tr2",
            text: "el-3",
            styles: {
              padding: 5,
              width: "100%",
              height: "100%",
              background: "linear-gradient(135deg, #fad961 0%,#f76b1c 100%)"
            },
            disableScale: false,
            scaleForCenter: true,
            aspectRatio: false,
          },
          {
            id: "el-4",
            type: "figure",
            x: 100,
            y: 400,
            scaleX: 1,
            scaleY: 1,
            width: 100,
            height: 100,
            angle: 45,
            classPrefix: "tr3",
            text: "el-4",
            styles: {
              background: "linear-gradient(135deg, #b1ea4d 0%,#459522 100%)",
              width: "100%",
              height: "100%",
            },
            disableScale: false,
            scaleForCenter: false,
            aspectRatio: false,
          },
          {
            id: "el-5",
            type: "title",
            x: 200,
            y: 400,
            scaleX: 1,
            scaleY: 1,
            width: 100,
            height: 100,
            angle: 0,
            classPrefix: "tr3",
            text: "el-4",
            styles: {
              background: "linear-gradient(135deg, #b1ea4d 0%,#459522 100%)",
              width: "100%",
              height: "100%",
            },
            disableScale: true,
            scaleForCenter: false,
            aspectRatio: false,
          }
        ],
        offsetX: 0,
        offsetY: 0
      };
    },
    mounted() {
      this.offsetX = this.$refs.workspace.offsetLeft;
      this.offsetY = this.$refs.workspace.offsetTop;
    },
    methods: {
      update(id, payload) {
        this.elements = this.elements.map(item => {
          if (item.id === id) {
            return {
              ...item,
              ...payload
            };
          }
          return item;
        });
      },
      getElementStyles(element) {
        const styles = element.styles ? element.styles : {};
        return {
          width: `${element.width}px`,
          height: `${element.height}px`,
          ...styles
        };
      },
      setSelected(_id) {
        this.selectedElementId = _id;
        console.log('setSelected', _id)
      },
    },
    components: {
      FreeTransform
    }
  };
</script>


<style lang="scss">
  @import "Authoring.scss";
</style>
