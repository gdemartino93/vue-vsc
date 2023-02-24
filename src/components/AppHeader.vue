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

                <!-- menu non dropdown mostrato al brekpoint xl -->
                <div class="gap-2 align-items-center d-none d-xl-block d-xl-flex">  
                    <li>File</li>
                    <li v-for="menuOption in menuOptions">
                        <span>{{ menuOption }}</span>
                    </li>
                </div>
                <!-- menu dropdown nascosto al breakpoint xl  -->
                <div class="d-xl-none" >
                    <li class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">File</li>
                    <ul class="dropdown-menu myDropDown">
                        <li v-for="(menuOption,index) in menuOptions" :key="index"><a class="dropdown-item" href="#">{{ menuOption }}</a></li>
                    </ul>
                </div>
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
        // background-color: var(--color-bg-code);
        color: var(--color-text);
        li{
            cursor: pointer;
            padding: 5px;
            a{
                color: var(--color-text);
            }
            &:hover{
                background-color: var(--hover-bg-bar);
                border-radius: 5px;
            }
        }
    }
    .myDropDown{
        background: var(--color-bg-side);
    }
}
</style>