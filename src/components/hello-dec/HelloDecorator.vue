<!-- src/components/HelloDecorator.vue -->
<!-- This is an alternative way to define the Hello component using decorators -->
<template>
    <div>
        <div class="greeting">Hello {{name}}{{exclamationMarks}}</div>
        <button @click="decrement">-</button>
        <button @click="increment">+</button>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";

    @Component
    export default class HelloDecorator extends Vue {
        @Prop({required: true, type: String}) name!: string;
        @Prop({required: true, type: Number}) initialEnthusiasm!: number;

        private enthusiasm = this.initialEnthusiasm;

        increment() {
            this.enthusiasm++;
        }

        decrement() {
            if (this.enthusiasm > 1) {
                this.enthusiasm--;
            }
        }

        get exclamationMarks(): string {
            return "!".repeat(this.enthusiasm);
        }
    }
</script>

<style scoped>
    .greeting {
        font-size: 30px;
    }
</style>
