<template>
    <div class="main-box">
        <!-- 商品列表 -->
        <div class="card-box" v-for="(item, index) in productStore.productList" :key="index">
            <!-- 左侧主图 -->
            <aside>
                <img :src="item.img" class="card-img" />
            </aside>
            <!-- 右侧 -->
            <ul class="card-right">
                <div class="item-title">
                    <div class="card-cite">{{ item.title }}</div>
                    <small class="card-small">{{ item.name }}</small>
                </div>
                <div class="item-bottom">
                    <li class="item-low-price">
                        <div>历史最低价</div>
                    </li>
                    <div class="item-desc">
                        <div class="price">
                            <b class="item-price">{{ item.price }}</b>
                            <del class="item-del">{{ item.oldPrice }}</del>
                        </div>
                        <!-- 抢购 -->
                        <div class="btn-progress" @click="cartStore.addCart(item)">
                            <button class="my-btn" >加入购物车</button>
                            <div class="lm-progress">
                                <div class="progress">库存剩余:</div>
                                <div class="percent">{{ item.progress }}%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </ul>
        </div>
        <!-- 购物车按钮 -->
        <div class="cartButton" @click="pushCart">
            <div class="cartCenter">{{cartStore.totalCount}}</div>
            <img src="../assets/cart.png" />
        </div>
    </div>
</template>

<script setup lang="ts">
import {useProductStore} from '../store/product'
import {useCartStore} from '../store/cart'
import { useRouter } from 'vue-router';
const productStore = useProductStore()
const cartStore = useCartStore()
const router = useRouter()

productStore.getProduct()

const pushCart = ()=>{
    router.push({path:'/cart'})
}
</script>

<style lang="scss" scoped>
.main-box {
    margin: 16px;

    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .cartButton {
    position: fixed;

    right: 0px;
    top: 60%;
    z-index: 999;
    .cartCenter{
        position: absolute;
        top:-10%;
        right: 40%;
        color: #d8182d;
        font-weight: bold;
    }
    img {
        width: 46px;
        height: 46px;
    }
}
    .card-box {
        padding: 16px;
        border-radius: 8px;
        box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.1);
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: inherit;
        margin-top: 10px;
        
        .card-img {
            width: 110px;
            height: 110px;
            display: inline-block;
        }
        .card-right {
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            align-items: flex-start;
            padding-left: 10px;
            .item-title {
                display: flex;
                flex-direction: column;
                .card-cite {
                    font-size: 13px;
                    color: #3a3a3a;
                    padding-bottom: 3px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    width: 200px;
                }
                .card-small {
                    display: flex;
                    width: 200px;
                    justify-content: flex-start;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    font-size: 9px;
                    color: #d8182d;
                }
            }
            .item-bottom {
                width: 100%;
                .item-low-price {
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    background-color: #efeff4;
                    font-size: 9px;
                    color: #949497;
                    width: 64px;
                    text-align: center;
                    border-radius: 4px;
                    height: 18px;
                    line-height: 18px;
                }
                .item-desc {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding-right: 16px;
                    padding-top: 2px;
                    .price {
                        display: flex;
                        flex-direction: column;
                        .item-price {
                            font-size: 17px;
                            color: #d8182d;
                        }
                        .item-del {
                            width: auto;
                            font-size: 13px;
                        }
                    }
                    .btn-progress {
                        display: flex;
                        flex-direction: column;
                        background-color: #d8182d;
                        border-radius: 5px;
                        box-shadow: #3a3a3a;
                        .lm-progress {
                            display: flex;
                            flex-wrap: nowrap;
                            justify-content: center;
                            align-items: center;

                            width: 80px;
                            height: 20px;
                            margin: 3px 5px;

                            .percent {
                                margin-left: 5px;
                                width: 20px;
                                color: #ffffff;
                                font-size: 5px;
                            }
                            .progress {
                                width: 60px;
                                color: #ffffff;
                                font-size: 5px;
                                border-radius: 35px;
                            }
                        }
                        .my-btn {
                            background-color: #d8182d;
                            border-radius: 2px;
                            width: 74px;
                            height: 24px;
                            color: #fff;
                            font-size: 11px;
                            border: none;
                            text-align: center;
                        }
                    }
                    .btn-remind {
                        display: flex;
                        flex-direction: column;
                        background-color: #ffffff;
                        border-radius: 5px;
                        box-shadow: #3a3a3a;
                        .remind-me-btn {
                            background-color: #91c95b;
                            border-radius: 2px;
                            width: 80px;
                            height: 24px;
                            color: #fff;
                            border: none;
                            font-size: 11px;
                            text-align: center;
                        }

                        .set-reminder {
                            font-size: 6px;
                            margin-top: 3px;
                            color: #949497;
                        }
                    }
                }
            }
        }
    }
}

</style>