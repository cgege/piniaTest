import {defineStore} from 'pinia'
import {productInter} from '../assets/json/product'
import {useProductStore} from './product'

type Icart ={
    quantity:number
} & Omit<productInter,'inventory'>
export const useCartStore = defineStore('cart',{
    state:()=>({
        cartList:[] as Icart[]
    }),

    getters:{
        totalCount(state){
                return  state.cartList.reduce((total,item)=>{
                        return total += item.quantity
                },0)
        },
        totalPrice(state){
            return  state.cartList.reduce((total,item)=>{
                return total + item.quantity*item.price
        },0)
        }
    },
    actions:{
        addCart(product:productInter) {
            // 库存小于1,不能添加购物车
            if(product.inventory<1){
                return
            }
            // 如果商品已经存在,只需要商品数量加1
            const isProduct = this.cartList.find(item=> item.name === product.name)

            if(isProduct) {
                isProduct.quantity++
            } else {
                this.cartList.push({
                    title:product.title,
                    img:product.img,
                    name:product.name,
                    price:product.price,
                    oldPrice:product.oldPrice,
                    progress:product.progress,
                    quantity:1
                })
            }

            // 库存减少
            const productStore = useProductStore()
            // productStore.decrement(product)

        },

        cleanCart() {
            this.cartList = []
            alert('结算成功')
        }
    }
})