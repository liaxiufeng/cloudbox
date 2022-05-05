<template>
    <div id="editorBox">
        <div>
            <slot name="theme"></slot>
            <slot name="type"></slot>
        </div>

        <slot name="textEditor"></slot>
    </div>
</template>

<script>
    export default {
        name: "LayOut"
    }
</script>

<style scoped>
#editorBox{
    font-size: 20px;
}
</style>