<script>
import { store } from '../store/store';
import vscIcon from "@/assets/icons/vsc-icon.svg";
    export default {
        data(){
            return{
                store,
                vscIcon: vscIcon,
            }
        }
        
    }
</script>

<template>
    <div class=" cmd-bar d-flex position-relative">
        <div class="col-4 left-side min-h ">
            <ul class="d-flex gap-2 align-items-center">
                <li><img :src="vscIcon" alt="Icona" ></li>

                <!-- menu non dropdown mostrato al brekpoint xl -->
                <div class="gap-2 align-items-center d-none d-xl-block d-xl-flex">  
                    <li class="file-btn">File</li>
                    <li v-for="menuOption in store.menuOptions">
                        <span>{{ menuOption.name }}</span>
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
        
        <div class="d-flex justify-content-start col-5 align-items-center d-none d-md-block d-md-flex center-section">
            <div class="input-group">
              <input type="text" placeholder="Gianluca De Martino - Jr Full Stack Web Developer" aria-describedby="button-addon1" class="form-control border-0 search-bar">
            </div>
        </div>

        <div class="d-flex align-items-center justify-content-end gap-4 px-4 right-side">
            <font-awesome-icon icon="fa-solid fa-minus" />
            <font-awesome-icon icon="fa-regular fa-window-restore" />
            <font-awesome-icon icon="fa-solid fa-xmark" />
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
        width: 10px;
        &:focus{
            outline: none;
        }
    }
.search-bar:focus {
    border: none;
    outline: none;
    box-shadow: none;
}
.right-side{
    cursor: pointer;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(0,-50%);
}

@media (min-width: 1200px) {
  .min-h {
    min-width: 500px;
  }
}

</style>