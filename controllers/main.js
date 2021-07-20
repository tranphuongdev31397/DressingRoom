import MenuTabServices from "../services/MenuTabServices.js";
import ProductServices from "../services/ProductServices.js";
import MenuTab from "../models/MenuTab.js";



const getEle = id => document.getElementById(id);
//Tạo đối tượng menuTab từ MenuTab
const menuTab = new MenuTab()
//Tạo đối tượng menuTabServices để lấy data từ mockAPI
const menuTabServices = new MenuTabServices()
//Tạo đối tượng productServices từ lớpđối tượng ProductServices
const productServices = new ProductServices()
const setLocalStorage = (arrProduct) => {
    localStorage.setItem('ArrProduct', JSON.stringify(arrProduct))
}
const getLocalStorage = () => {
    return JSON.parse(localStorage.getItem('ArrProduct'))
}

//Gọi data Product từ API về
const callDataProduct = () => {
    productServices.callProductData()
        .then(result => {
            //Đưa data lên Local để xử lý mảng
            setLocalStorage(result.data)
        })
}
callDataProduct()
//Mảng Product
let arrProduct = getLocalStorage()
//Hàm filter để lọc mảng sản phẩm
const Filter = (arrProduct, type) => {
    return arrProduct.filter(product => {
        return product.type === type
    })
}
//Hàm render sản phẩm đã lọc
const renderFilter = (arrProduct, type) => {
    let arrFilter = Filter(arrProduct, type)
    let content = ""
    getEle('tabProduct').innerHTML = ''
    arrFilter.map((product, index) => {

        content += `

            <div class="col-3 float-left">
                <img class="img-fluid" src="${product.imgSrc_jpg}">
                <h4>${product.name}</h4>
                <button class="btn btn-success" id="${product.type}_${index}"  style="width:100%"  onclick="clickThuDo('${product.id}')">Thử đồ</button>
            </div>
    
            `

    })

    getEle('tabProduct').innerHTML = content
}

//Gọi data TabMenu từ mockAPI
const callDataMenuTab = () => {
    menuTabServices.callMenuTab()
        .then(result => {
            menuTab.renderMenuTab(result.data)
            //Tạo sự kiện click để renderFilter sản phẩm
            getEle('tabTopClothes').addEventListener('click', () => renderFilter(arrProduct, "topclothes"))
            getEle('tabBotClothes').addEventListener('click', () => renderFilter(arrProduct, "botclothes"))
            getEle('tabShoes').addEventListener('click', () => renderFilter(arrProduct, "shoes"))
            getEle('tabHandBags').addEventListener('click', () => renderFilter(arrProduct, "handbags"))
            getEle('tabNecklaces').addEventListener('click', () => renderFilter(arrProduct, "necklaces"))
            getEle('tabHairStyle').addEventListener('click', () => renderFilter(arrProduct, "hairstyle"))
            getEle('tabBackground').addEventListener('click', () => renderFilter(arrProduct, "background"))
        })
        .catch(err => {
            console.log(err)
        })
}

callDataMenuTab()
//Tạo hàm click để Thử đồ
const clickThuDo = (id) => {
    productServices.callProduct(id)
        .then((result) => {
            let productItem = result.data
            switch (productItem.type) {
                case "topclothes":
                    document.querySelector('.bikinitop').style.backgroundImage = `url('${productItem.imgSrc_png}')`
                    break
                case "botclothes":
                    document.querySelector('.bikinibottom').style.backgroundImage = `url('${productItem.imgSrc_png}')`
                    break
                case "shoes":
                    document.querySelector('.feet').style.backgroundImage = `url('${productItem.imgSrc_png}')`
                    break
                case "handbags":
                    document.querySelector('.handbag').style.backgroundImage = `url('${productItem.imgSrc_png}')`
                    break
                case "necklaces":
                    document.querySelector('.necklace').style.backgroundImage = `url('${productItem.imgSrc_png}')`
                    break
                case "hairstyle":
                    document.querySelector('.hairstyle').style.backgroundImage = `url('${productItem.imgSrc_png}')`
                    break
                case "background":
                    document.querySelector('.background').style.backgroundImage = `url('${productItem.imgSrc_png}')`
                    break

            }
        })
        .catch((err) => {
            console.log(err)
        })

}
//Đưa hàm clickThuDo vào window
window.clickThuDo = clickThuDo










