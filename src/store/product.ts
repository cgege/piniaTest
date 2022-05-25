import {defineStore} from 'pinia'
import {product,productInter} from '../assets/json/product'

export const useProductStore = defineStore('product',{
    state:()=>({
        productList:[] as productInter[]
    }),

    getters:{},
    actions:{
        getProduct(){
            this.productList = product
        }
        // decrement(product:productInter){
        //     const isProduct = this.productList.find(item=>item.name === product.name)
        //     if(isProduct){
        //         isProduct.inventory--
        //     }
        // }
    }

})