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

    <div class="col-12 cmd-bar d-flex">
        <div class="col-4 left-side">
            <ul class="d-flex gap-2 align-items-center">
                <li><img :src="vscIcon" alt="Icona" ></li>

                <!-- menu non dropdown mostrato al brekpoint xl -->
                <div class="gap-2 align-items-center d-none d-xl-block d-xl-flex">  
                    <li class="file-btn">File</li>
                    <li v-for="menuOption in menuOptions">
                        <span>{{ menuOption }}</span>
                    </li>
                </div>
                <!-- menu dropdown nascosto al breakpoint xl  -->
                <div class="d-xl-none" >
                    <li class="dropdown-toggle file-btn" data-bs-toggle="dropdown" aria-expanded="false">File</li>
                    <ul class="dropdown-menu myDropDown">
                        <li v-for="(menuOption,index) in menuOptions" :key="index"><span class="dropdown-item" href="#">{{ menuOption }}</span></li>
                    </ul>
                </div>
            </ul>
        </div>
        
        <div class="col-4 d-flex align-items-center">
            <div class="input-group">
              <input type="search" placeholder="What're you searching for?" aria-describedby="button-addon1" class="form-control border-0 search-bar">
            </div>
        </div>

        <div class="col-4">
            
        </div>
    </div>
</template>


<style lang="scss" scoped>
.left-side{
    .file-btn{
        color: var(--color-text);
        background-color: var(--color-bg-side);
        border-radius: 5px;
        &:hover{
            background-color: var(--hover-bg-bar);
            color: var(--color-text);
        }
    }
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
            span{
                color: var(--color-text);
                &:hover{
                    color: var(--color-text);
                    background: var(--hover-bg-bar);
                    border-radius: 5px;
                }
            }

        }
    }
    .myDropDown{
        background: var(--color-bg-side);
        li{
            span{
                &:hover{
                    color: var(--color-text);
                    background: var(--hover-bg-bar);
                }
            }
        }
    }
}
input.search-bar{
        background-color: var(--color-bg-search);
        color: var(--color-text);
        height: 30px;
        &:focus{
            outline: none;
        }
    }
.search-bar:focus {
    border: none;
    outline: none;
    box-shadow: none;
}

</style>