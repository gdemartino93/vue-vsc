<script>
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardLink, MDBCardImg, MDBCardGroup, } from "mdb-vue-ui-kit";
import { store } from "../store/store";

    export default {
        props :{
            project : Object
        },
        components :{
            MDBCard,
            MDBCardBody,
            MDBCardTitle,
            MDBCardText,
            MDBCardLink,
            MDBCardImg,
            MDBCardGroup,
        },
    }
</script>
<template>
    <MDBCard class="col-11 col-md-4 col-lg-3 project">
        <MDBCardImg top :src="`/assets/progetti/${project.img}`" alt="..."/>
        <MDBCardBody>
            <MDBCardTitle class="fw-bold">{{ project.nome }}</MDBCardTitle>
            <MDBCardText>
                {{ project.descrizione }}
            </MDBCardText>
            <span class="fw-bold">Come è stato creato:</span>
            <ul>
                <li v-for="tecnologia in project.tecnologieUsate" class="tecnologieUsate">
                    <img :src="`assets/${tecnologia.img}`" :alt="tecnologia.nome">
                    <span class="mx-2">{{ tecnologia.nome }}</span>             
                </li>
            </ul>
        </MDBCardBody>

        <MDBCardBody class="d-flex justify-content-between align-items-end">     
            <a :href="project.linkRepo" target="_blank">Link Github</a>
            <a :href="project.livePreview" target="_blank" v-if="project.livePreview.length !== 0 ">Live Preview</a>
        </MDBCardBody>
    </MDBCard>
</template>

<style lang="scss" scoped>
*{
    cursor: text;
}
.project{
    background: var(--color-bg-code);
    a{
        cursor: pointer;
    }
}
.tecnologieUsate{
    img{
        width: 20px;
    }
}
</style>