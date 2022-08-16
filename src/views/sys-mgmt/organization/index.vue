<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-03 18:11:25
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-16 18:25:16
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
  </a-row>
  <div id="mountNode"></div>
  <div id="container"></div>
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

//节点管理弹窗
const visible = ref(true)
// g6工具库
const Util = G6.Util
// Background Animation
G6.registerNode(
  'background-animate',
  {
    afterDraw(cfg, group) {
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
          fill: cfg.color,
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
          fill: 'blue', // 为了显示清晰，随意设置了颜色
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
          fill: 'green',
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
const searchRes = ref('')

onMounted(async () => {
  await getOrganization()
  g6(data.value)
  //main()
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



const main = async () => {
  const response = await fetch(
    'https://gw.alipayobjects.com/os/basement_prod/6cae02ab-4c29-44b2-b1fd-4005688febcb.json',
  );
  console.log(response)
  const remoteData = await response.json();
  console.log(remoteData)
  const testGraph = new G6.Graph({
  container: 'container',
  width: 1000,
  height: 600,
  fitView: true,
  fitViewPadding: [20, 40, 50, 20],
})
  testGraph.data(remoteData);
  testGraph.render();
};


const defineColor = () => {
  const subjectColors = ['#5B8FF9', '#F6BD16', '#5AD8A6', '#945FB9', '#E86452', '#6DC8EC', '#FF99C3', '#1E9493', '#FF9845', '#5D7092'];
  const backColor = '#fff';
  const theme = 'default';
  const disableColor = '#777';
  const colorSets = G6.Util.getColorSetsBySubjectColors(
    subjectColors,
    backColor,
    theme,
    disableColor,
  );
  const data = { nodes: [] };

  subjectColors.forEach((color, i) => {
    data.nodes.push({
      id: `node-${color}`,
      label: color,
      labelCfg: {
        position: 'bottom',
      },
      style: {
        fill: colorSets[i].mainFill,
        stroke: colorSets[i].mainStroke,
      },
      stateStyles: {
        active: {
          fill: colorSets[i].activeFill,
          stroke: colorSets[i].activeStroke,
          shadowColor: colorSets[i].activeStroke,
        },
        inactive: {
          fill: colorSets[i].inactiveFill,
          stroke: colorSets[i].inactiveStroke,
        },
        selected: {
          fill: colorSets[i].selectedFill,
          stroke: colorSets[i].selectedStroke,
          shadowColor: colorSets[i].selectedStroke,
        },
        highlight: {
          fill: colorSets[i].highlightFill,
          stroke: colorSets[i].highlightStroke,
        },
        disable: {
          fill: colorSets[i].disableFill,
          stroke: colorSets[i].disableStroke,
        },
      },
    });
  });

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
        <a-menu-item key="1">1st menu item</a-menu-item>
        <a-menu-item key="2">2nd menu item</a-menu-item>
        <a-menu-item key="3">3rd menu item</a-menu-item>
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
        {
          type: 'collapse-expand',
          onChange: function onChange(item, collapsed) {
            const data = item.getModel();
            data.collapsed = collapsed;
            return true;
          },
        },
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
    //console.log(node)
    return {
      label: node.name || node.id,
      labelCfg: {
        offset: 10,
        position: node.children && node.children.length > 0 ? 'left' : 'right',
      },
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
    console.log(123)
    visible.value = true
  });
}


const getOrganization = async () => {
  data.value = await getOrganizationData()
  console.log(data.value)
  //g6(data.value)
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