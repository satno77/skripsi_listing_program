<template>
    <div>
        <ul>
            <li v-for="(cake, index) in cakes" :key="index">
                {{cake.name}}
            </li>
            
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            cakes: [
                {name: 'Pementasan', show: false},
                {name: 'Tari-tarian', show: false},
                {name: 'Upacara', show: false}
            ]
        }
    }    
}
</script>

<style scoped>
ul {
    display: flex;
    max-width: 1000px;
    margin: 20px auto;
    padding: 10px;
    box-sizing: border-box;
}

li{
    list-style: none;
    padding: 20px;
    margin: 10px;
    text-align: center;
    border: 1px solid #229966;
    flex-grow: 1;
    flex-basis: 200px;
}
</style>