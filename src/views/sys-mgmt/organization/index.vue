<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-03 18:11:25
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-17 19:11:56
 * @FilePath: \basic\src\views\sys-mgmt\organization\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
<div>
  <a-row justify="space-between">
    <a-input-search
      v-model:value="searchRes"
      placeholder="input search text"
      style="width: 200px"
      @search="onSearch"
    />
    <a-row>
      <legend-item
        v-for="(item, index) in Tree_Graph_Subject_Colors"
        :color="item"
        v-show="index <= maxDepth"
        @onCollapse="fastCollapseExpand"
        :ind="index"></legend-item>
    </a-row>
  </a-row>
  <div id="mountNode"></div>
  <a-modal
      v-model:visible="visible"
      title="Basic Modal"
      width="100%"
      wrap-class-name="full-modal"
      @ok="handleOk"
    >
      <section>
        
      </section>
  </a-modal>
</div>
 
</template>

<script setup>
import G6 from '@antv/g6'
import { getOrganizationData } from '@/api/sys'
import { ref, watch, onMounted } from 'vue'
import { arrayFlagLevel } from '@/utils/tree'
import { Tree_Graph_Subject_Colors } from '@/constant'
import legendItem from './components/legendItem.vue';

let maxDepth = ref(0)
//节点管理弹窗
const visible = ref(false)
// g6工具库
const Util = G6.Util
// Background Animation
G6.registerNode(
  'background-animate',
  {
    afterDraw(cfg, group) {
      console.log(cfg)
      let r = cfg.size / 2;
      if (isNaN(r)) {
        r = cfg.size[0] / 2;
      }
      // 第一个背景圆
      const back1 = group.addShape('circle', {
        zIndex: -3,
        attrs: {
          x: 0,
          y: 0,
          r,
          fill: cfg.style.stroke,
          opacity: 0.6,
        },
        // must be assigned in G6 3.3 and later versions. it can be any value you want
        name: 'circle-shape1',
      });
      // 第二个背景圆
      const back2 = group.addShape('circle', {
        zIndex: -2,
        attrs: {
          x: 0,
          y: 0,
          r,
          fill: cfg.style.stroke, // 为了显示清晰，随意设置了颜色
          opacity: 0.6,
        },
        // must be assigned in G6 3.3 and later versions. it can be any value you want
        name: 'circle-shape2',
      });
      // 第三个背景圆
      const back3 = group.addShape('circle', {
        zIndex: -1,
        attrs: {
          x: 0,
          y: 0,
          r,
          fill: cfg.style.stroke,
          opacity: 0.6,
        },
        // must be assigned in G6 3.3 and later versions. it can be any value you want
        name: 'circle-shape3',
      });
      group.sort(); // 排序，根据 zIndex 排序

      // 第一个背景圆逐渐放大，并消失
      back1.animate(
        {
          r: r + 10,
          opacity: 0.1,
        },
        {
          repeat: true, // 循环
          duration: 3000,
          easing: 'easeCubic',
          delay: 0, // 无延迟
        },
      );

      // 第二个背景圆逐渐放大，并消失
      back2.animate(
        {
          r: r + 10,
          opacity: 0.1,
        },
        {
          repeat: true, // 循环
          duration: 3000,
          easing: 'easeCubic',
          delay: 1000, // 1 秒延迟
        },
      ); // 1 秒延迟

      // 第三个背景圆逐渐放大，并消失
      back3.animate(
        {
          r: r + 10,
          opacity: 0.1,
        },
        {
          repeat: true, // 循环
          duration: 3000,
          easing: 'easeCubic',
          delay: 2000, // 2 秒延迟
        },
      );
    },
  },
  'circle',
);

let data = ref({})
let treeGraph = null
// 搜索框数据
let searchRes = ref('')

onMounted(async () => {
  await getOrganization()
  g6(data.value)
})


const onSearch = () => {
  searchRes.value = 'techDept'
  //搜索到该节点
  //1.聚焦该节点，同时缩放画布到初始大小
  treeGraph.fitView();
  treeGraph.focusItem(searchRes.value, true, {
    easing: 'easeCubic',
    duration: 500,
  });
  const node = treeGraph.findById(searchRes.value);
  treeGraph.setItemState(node, 'focus', true);
  treeGraph.updateItem(node, {type: 'background-animate'})
  
}


const defineColor = () => {
  // const subjectColors = ['#5B8FF9', '#F6BD16', '#5AD8A6', '#945FB9', '#E86452', '#6DC8EC', '#FF99C3', '#1E9493', '#FF9845', '#5D7092'];
  const backColor = '#fff';
  const theme = 'default';
  const disableColor = '#777';
  const colorSets = G6.Util.getColorSetsBySubjectColors(
    Tree_Graph_Subject_Colors,
    backColor,
    theme,
    disableColor,
  );
  return colorSets
}


const g6 = (data) => {
  const colorSets = defineColor()
  console.log(data)
  const container = document.getElementById('mountNode');
  const width = container.clientWidth;
  const height = document.body.clientHeight - 260;
  //右键菜单
  const contextMenu = new G6.Menu({
    getContent(evt) {
      let header;
      if (evt.target && evt.target.isCanvas && evt.target.isCanvas()) {
        header = 'Canvas ContextMenu';
      } else if (evt.item) {
        const itemType = evt.item.getType();
        header = `${itemType.toUpperCase()} ContextMenu`;
      }
      return `
      <a-menu>
        <a-menu-item key="1" @click="onDelNode">删除此节点</a-menu-item>
        <a-menu-item key="2" @click="onAddNode">新增子节点</a-menu-item>
        <a-menu-item key="3" @click="onCollapseNode">折叠</a-menu-item>
      </a-menu>`;
    },
    handleMenuClick: (target, item) => {
      console.log(target, item);
    },
    // offsetX and offsetY include the padding of the parent container
    // 需要加上父级容器的 padding-left 16 与自身偏移量 10
    offsetX: 16 + 10,
    // 需要加上父级容器的 padding-top 24 、画布兄弟元素高度、与自身偏移量 10
    offsetY: 0,
    // the types of items that allow the menu show up
    // 在哪些类型的元素上响应
    itemTypes: ['node'],
  });
  //小地图
  const minimap = new G6.Minimap({
    size: [150, 100],
  });
  // 图实例化，至少需要为图设置挂载容器、宽、高
  treeGraph = new G6.TreeGraph({
    container: 'mountNode', // 指定挂载容器
    width, // 图的宽度
    height, // 图的高度
    modes: {
      default: [
        // {
        //   type: 'collapse-expand',
        //   onChange: function onChange(item, collapsed) {
        //     console.log('item', item)
        //     const data = item.getModel();
        //     data.collapsed = collapsed;
        //     return true;
        //   },
        // },
        'drag-canvas',
        'zoom-canvas',
      ],
    },
    defaultNode: {
      size: 26,
      anchorPoints: [
        [0, 0.5],
        [1, 0.5],
      ],
    },
    defaultEdge: {
      type: 'cubic-horizontal',
    },
    layout: {
      type: 'compactBox',
      direction: 'LR',
      getId: function getId(d) {
        return d.id;
      },
      getHeight: function getHeight() {
        return 16;
      },
      getWidth: function getWidth() {
        return 16;
      },
      getVGap: function getVGap() {
        return 10;
      },
      getHGap: function getHGap() {
        return 100;
      },
    },
    plugins: [minimap, contextMenu]
  });
  treeGraph.node(function (node) {
   
    const { depth } = node
    maxDepth.value = maxDepth.value > depth ? maxDepth.value : depth
    const color = colorSets[depth]
    return {
      collapsed: false,
      label: node.name || node.id,
      labelCfg: {
        offset: 10,
        position: node.children && node.children.length > 0 ? 'left' : 'right',
      },
      style: {
        fill: color.mainFill,
        stroke: color.mainStroke,
      },
      stateStyles: {
        active: {
          fill: color.activeFill,
          stroke: color.activeStroke,
          shadowColor: color.activeStroke,
        },
        inactive: {
          fill: color.inactiveFill,
          stroke: color.inactiveStroke,
        },
        selected: {
          fill: color.selectedFill,
          stroke: color.selectedStroke,
          shadowColor: color.selectedStroke,
        },
        highlight: {
          fill: color.highlightFill,
          stroke: color.highlightStroke,
        },
        disable: {
          fill: color.disableFill,
          stroke: color.disableStroke,
        },
      }
    };
  });
  // 数据加载和图的渲染
  treeGraph.data(data);
  treeGraph.render();
  treeGraph.fitView();

  treeGraph.on('node:click', (ev) => {
    const node = ev.item; // 被点击的节点元素
    const shape = ev.target; // 被点击的图形，可根据该信息作出不同响应，以达到局部响应效果
    // ... do sth
    visible.value = true
  });
}


const getOrganization = async () => {
  data.value = await getOrganizationData()
  //g6(data.value)
}

const fastCollapseExpand = ( data ) => {
  const findNodes = treeGraph.findAll('node', (node) => {
    return node.get('model').depth == data.ind
  })
  console.log(findNodes)
  findNodes.forEach((node) => {
    console.log(node)
    treeGraph.updateItem(node, {collapsed: true})
    treeGraph.setItemState(node, 'collapsed', true)
    treeGraph.layout()
  })
}
</script>

<style lang="scss" scoped>
#mountNode {
  position: relative;
  width: 100%;
  min-height: calc(100vh - 64px);
}
:v-deep(.g6-minimap-container) {
  border: 1px solid #e2e2e2;
}
:v-deep(.g6-minimap-viewport) {
  border: 2px solid rgb(25, 128, 255);
}
.g6-minimap-container {
  border: 1px solid #e2e2e2;
}
.g6-minimap-viewport {
  border: 2px solid rgb(25, 128, 255);
}
</style>