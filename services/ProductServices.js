class ProductServices {
    callProductData (){
        return axios({
            url: 'https://60ed6c15a78dc700178adeeb.mockapi.io/products',
            method: 'GET',
        })
    }
    callProduct (id){
        return axios({
            url: `https://60ed6c15a78dc700178adeeb.mockapi.io/products/${id}`,
            method: 'GET',
        })
    }
}
export default ProductServices