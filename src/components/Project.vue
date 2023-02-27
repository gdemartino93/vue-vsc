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
    <MDBCard class="col-12 col-md-4 col-lg-3 project">
        <MDBCardImg top :src="`/assets/${project.img}`" alt="..."/>
        <MDBCardBody>
            <MDBCardTitle>{{ project.nome }}</MDBCardTitle>
            <MDBCardText>
                {{ project.descrizione }}
            </MDBCardText>
            <span class="fw-bold">Cosa è stato usato:</span>
            <ul>
                <li v-for="tecnologia in project.tecnologieUsate" class="tecnologieUsate">
                    <img :src="`assets/${tecnologia.img}`" :alt="tecnologia.nome">
                    <span class="mx-2">{{ tecnologia.nome }}</span>             
                </li>
            </ul>
        </MDBCardBody>

        <MDBCardBody class="d-flex justify-content-between">
        
        <a :href="project.linkRepo">Demo Github</a>
        <a href="www.google.it">Live Preview</a>

        <!-- <MDBCardLink :href="project.linkRepo">Card link</MDBCardLink>
        <MDBCardLink href="#">Another link</MDBCardLink> -->
        </MDBCardBody>
    </MDBCard>
</template>

<style lang="scss" scoped>
*{
    cursor: text;
}
.project{
    background: var(--color-bg-code);
}
.tecnologieUsate{
    img{
        width: 20px;
    }
}
</style>