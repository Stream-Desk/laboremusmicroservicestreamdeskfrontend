<template>
    <v-card>
        <v-card-text class="commentsCard">
            <div class="commentsSection ">Comments</div>
            &nbsp;<div>Attachments</div>
        </v-card-text>
        <div style="height:50px"></div>
    </v-card>
</template>

<script>
export default {
    name:"Comments"
}
</script>

<style scoped>
.commentsCard{
    display: flex;
}
.commentsSection{
    border-radius: 40px;
    padding:  2px 
    5px;
    background-color: #0072a2;
    color: #fff;
}
</style>