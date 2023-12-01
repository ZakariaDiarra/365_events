

<template>
    <div @click="handleClick" class="cursor-pointer hover:bg-emerald-100 transition duration-300 ease-in-out">
      <img :src="category.imageUrl" alt="Image de la catégorie" class="w-full h-48 object-cover rounded-t-lg" />
      <div class="p-4">
        <h3 class="text-lg">{{ category.name }}</h3>
      </div>
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

</style>
