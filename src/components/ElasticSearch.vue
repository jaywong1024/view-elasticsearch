<template>
    <div>
        <el-row>
            <el-col :span="6" :push="6">
                <el-input v-model="keyword" placeholder="请输入内容"></el-input>
            </el-col>
            <el-col :span="6" :push="6">
                <el-button style="margin-left: 12px;" @click="search">搜索</el-button>
            </el-col>
            <el-col :span="6" :push="2">
                <el-button @click="add">添加</el-button>
            </el-col>
        </el-row>
        <el-row style="margin-top: 100px;">
            <el-card class="box-card card-list" :key="index" v-for="(item, index) in list">
                <div class="price">{{ item.price }}</div>
                <img :src="item.img" alt="">
                <p v-html="item.title"></p>
                <p v-html="item.shop"></p>
            </el-card>
        </el-row>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "ElasticSearch",
        data() {
            return {
                keyword: 'Java',
                list: []
            }
        },
        methods: {
            search() {
                axios.get("http://localhost:9090/jd/" + this.keyword + "/0/100").then(res => {
                    this.list = res.data
                })
            },
            add() {
                axios.post("http://localhost:9090/jd", {
                    keyword: this.keyword
                }).then(res => {
                    this.$message(res.data ? '添加成功' : '添加失败');
                })
            }
        }
    }
</script>

<style scoped>
    .card-list {
        width: 200px;
        height: 270px;
        margin: 10px;
        display: inline-block;
        position: relative;
    }
    .card-list img {
        width: 100%;
    }
    .card-list .price {
        position: absolute;
        top: 5px;
        right: 5px;
    }
    .card-list p {
        padding-top: 5px;
        font-size: 12px;
        height: 15px;
        overflow-y: hidden;
    }
</style>