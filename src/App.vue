<template>
    <b-container fluid>
        <b-alert show>Default Alert</b-alert>
        <label for="name">Name:</label>
        <input v-model="name" type="text" id="name">
        <h1>Hello Component</h1>
        <hello-component :name="name" :initialEnthusiasm="5" />
        <h1>Hello Decorator Component</h1>
        <hello-decorator-component :name="name" :initialEnthusiasm="5" />
    </b-container>
</template>

<script lang="ts">
    import HelloDecoratorComponent from '@/components/hello-dec/HelloDecorator.vue';
    import HelloComponent from '@/components/hello-split/Hello.vue';
    import {Component, Vue} from "vue-property-decorator";

    @Component({
        components: {
            helloComponent: HelloComponent,
            helloDecoratorComponent: HelloDecoratorComponent,
        }
    })
    export default class App extends Vue {
        name = "World";
    }

</script>

<style lang="scss">
    /*https://bootstrap-vue.js.org/docs*/
    @import "~bootstrap/dist/css/bootstrap.css";
    @import "~bootstrap-vue/dist/bootstrap-vue.css";
</style>
