function main(){
function createShoppingList() {
    $('#js-shopping-list-form').on('submit', function(e) {
        e.preventDefault()
        console.log('button click')
    })
}
createShoppingList()
}
$(main)