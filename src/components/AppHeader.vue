<script>
import vscIcon from "@/assets/icons/vsc-icon.svg";
    export default {
        data(){
            return{
                vscIcon: vscIcon,
                menuOptions : ["Edit","Selection","View","Go","Run","Terminal","Help"]
            }
        }
        
    }
</script>

<template>
    <div class="col-12 cmd-bar">
        <div class="col-4 left-side">
            <ul class="d-flex gap-2 align-items-center">
                <li><img :src="vscIcon" alt="Icona" ></li>
                <li>File</li>
                <li class="d-none d-md-block" v-for="menuOption in menuOptions">
                    <span>{{ menuOption }}</span>
                </li>
            </ul>
        </div>
        
        <div class="col-4">
            barra di ricerca
        </div>
        <div class="col-4">
            dx
        </div>
    </div>
</template>


<style lang="scss" scoped>
.left-side{
    img{
        height: 30px;
        margin-left: -20px;
    }
    ul{
        li{
            cursor: pointer;
            padding: 5px;
            &:hover{
                background-color: var(--hover-bg-bar);
                border-radius: 5px;
            }
        }
    }
}
</style>