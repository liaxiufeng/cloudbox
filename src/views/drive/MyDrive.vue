<template>
    <FileView/>
</template>

<script>
    import Index from "../index/Index";
    import FileView from "../../components/FileView/FileView";

    export default {
        name: "MyDrive",
        components: {FileView, Index}
    }
</script>