<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-06-09 14:43:39
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-09 15:01:02
 * @FilePath: \basic\src\layout\components\Sidebar\MenuItem.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <!-- <i>{{route.path}}</i> -->
    <span>
        <router-link :to="route.path">{{ route.name }}</router-link>
    </span>
</template>

<script setup>


const props = defineProps({
    route: {
        type: Object,
        required: true
    }
})
</script>