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
        </MDBCardBody>

        <MDBCardBody>
        <MDBCardLink href="#">Card link</MDBCardLink>
        <MDBCardLink href="#">Another link</MDBCardLink>
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
</style>