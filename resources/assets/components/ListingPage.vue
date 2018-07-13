<template>
<div>
    <header-image :image-url="images[0]" @header-clicked="openModal">
    </header-image>
    <div class="container">
    <div class="heading">
      <h1>{{ title }}</h1>
      <p>{{ address }}</p>
    </div>
    <hr>
    <div class="about">
      <h3>A propos de la listes d'annonces</h3>
      <expandable-text>{{ about }}</expandable-text>
    </div>
    <div class="lists">
                <feature-list title="Requirements" :items="requirements">
                    <template slot-scope="requirement">
                        <i class="fa fa-lg" :class="requirement.icon"></i>
                        <span>{{ requirement.title }}</span>
                    </template>
                </feature-list>
                <feature-list title="Prix" :items="prices">
                    <template slot-scope="price">
                        {{ price.title }}: <strong>{{ price.value }}</strong>
                    </template>
                </feature-list>
            </div>
        </div>
        <modal-window ref="imagemodal">
            <image-carousel :images="images"></image-carousel>
        </modal-window>
    </div>
</template>
<script>
   import { remplirRequirement_et_prix } from '../js/helpers';

    let model = JSON.parse(window.vuelarabnb_listing_model);
    model = remplirRequirement_et_prix(model);
    console.log(model);

    import ImageCarousel from './ImageCarousel.vue';
    import ModalWindow from './ModalWindow.vue';
    import FeatureList from './FeatureList.vue';
    import HeaderImage from './HeaderImage.vue';
    import ExpandableText from './ExpandableText.vue';
    
    export default {
        data() {
            return Object.assign(model, {});
        },
        components: {
            ImageCarousel,
            ModalWindow,
            FeatureList,
            HeaderImage,
            ExpandableText
        },
        methods: {
            openModal() {
                this.$refs.imagemodal.modalOpen = true;
            }
        }
    }
</script>
<style>
    .about {
        margin: 2em 0;
    }

    .about h3 {
        font-size: 22px;
    }
</style>
