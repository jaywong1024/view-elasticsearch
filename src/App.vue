<template>
    <div id="app">
        <elastic-search></elastic-search>
    </div>
</template>

<script>

    import ElasticSearch from "@/components/ElasticSearch.vue";

    export default {
        name: 'App',
        components: {
            ElasticSearch
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        margin: 60px auto;
        width: 1110px;
    }
    html {
      background-color: #f8f8f8;
    }
</style>
