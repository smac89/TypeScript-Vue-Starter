<!-- src/components/Hello.vue -->
<template src="./hello.html"></template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";

    @Component
    export default class extends Vue {
        @Prop({required: true, type: String}) name!: string;
        @Prop({required: true, type: Number}) initialEnthusiasm!: number;

        private enthusiasm: number = this.initialEnthusiasm;

        increment(): void {
            this.enthusiasm++;
        }

        decrement() {
            if (this.enthusiasm > 1) {
                this.enthusiasm--;
            }
        }

        get exclamationMarks() {
            return "!".repeat(this.enthusiasm);
        }
    }
</script>

<style scoped src="./hello.css"></style>
