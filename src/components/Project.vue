<template>
    <MDBCard style="width: 18rem">
        <MDBCardImg top src="https://mdbootstrap.com/img/new/standard/city/062.webp" alt="..."/>
        <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
            </MDBCardText>
        </MDBCardBody>

        <MDBCardBody>
        <MDBCardLink href="#">Card link</MDBCardLink>
        <MDBCardLink href="#">Another link</MDBCardLink>
        </MDBCardBody>
    </MDBCard>
</template>

<script>
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardLink, MDBCardImg, MDBCardGroup, } from "mdb-vue-ui-kit";

    export default {
        components :{
            MDBCard,
            MDBCardBody,
            MDBCardTitle,
            MDBCardText,
            MDBCardLink,
            MDBCardImg,
            MDBCardGroup,
      
        }
        
    }
</script>

<style lang="scss" scoped>

</style>