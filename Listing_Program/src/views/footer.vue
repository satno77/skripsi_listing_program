<template>
    <footer>
        <p>{{footerText}}</p>
    </footer>
    
</template>

<script>
export default {
    data(){
        return{
            footerText:'copyright @2019'
        }
    }
    
}
</script>

<style scoped>
    footer {
        /* background-color: #BDD1DD;
        padding: 10px;
        text-align: center; */
        background-color: #BDD1DD;
        text-align: center;
        flex-shrink: none;
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
    }
</style>