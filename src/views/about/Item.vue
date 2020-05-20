<template>
    <a class="item">
        <div class="left">
            <slot name="left">
                <img src="../../assets\homeImage\category-img\0.png" alt="">
            </slot>
        </div>
        <div class="center">
            <slot name="center">填入文字</slot>
        </div>
        <div>
            <van-icon class="right" name="arrow" />
        </div>
    </a>
</template>

<script>
export default {
    name: 'item'
}
</script>

<style lang="scss" scoped>
.item {
    position: relative;
    display: flex;
    height: 54px;
    .left {
        width: 58px;
        // line-height: 58px;               
        text-align: center; 
        img {
            width: 40px;
            height: 40px;
            margin-top: 7px;
            // vertical-align: middle;
        }
    }
    .center {
        flex: 1;
        padding-left: 10px;
        line-height: 54px;
        font-size: 14px;
    }
    .right {
        font-size: 20px;
        width: 58px;
        line-height: 54px;    
        text-align: center;    
    } 
}
</style>