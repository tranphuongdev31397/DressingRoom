
class MenuTab {

    //Tạo hàm hiển thị danh sách menuTab
    renderMenuTab(arrMenu) {
        let content = ''

        arrMenu.map((tab, index) => {

            content +=
                `<li class="nav-item" role="presentation">
            <a class="nav-link" id="${tab.tabName}" data-toggle="pill" href="#tabProduct" role="tab" aria-controls="pills-home" aria-selected="true" >${tab.showName}</a>
          </li>`
         
        })
        document.getElementById('tabMenu').innerHTML = content;
    }
    
}

export default MenuTab