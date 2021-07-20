class MenuTabServices {
    callMenuTab(){
        return axios({
            url: 'https://60ed6c15a78dc700178adeeb.mockapi.io/menutab',
            method: 'GET',
        })
    }
}
export default MenuTabServices