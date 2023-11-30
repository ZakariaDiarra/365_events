

<template>
    <div class="category-item" @click="handleClick">
        <img :src="category.imageUrl" alt="Image de la catégorie" class="category-image" />
        <h3>{{ category.name }}</h3>
    </div>
</template>

<script>
export default {
    props: {
    category: {
        type: Object,
        required: true
    }
},
    methods: {
        handleClick() {
        this.$emit('categoryClicked', this.category.name);
        }
    }
};
</script>

<style>
.category-item {
cursor: pointer;
text-align: center;
}

.category-image {
width: 100%;
height: 200px;
object-fit: cover;
}
</style>
