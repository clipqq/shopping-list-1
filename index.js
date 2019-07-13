function main() {
  function createShoppingList() {
    $('#js-shopping-list-form').on('submit', function(e) {
      e.preventDefault()
      console.log('button click')
      const userItem = $('#shopping-list-entry').val()
      console.log(userItem)
      $('.shopping-list').append(`
        <li>
          <span class="shopping-item">${userItem}</span>
          <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
              <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
              <span class="button-label">delete</span>
            </button>
          </div>
        </li>
        `)
    })
  }

  function checkItem() {
    $('.shopping-item-toggle').on('click', function(e) {
      $(this).closest('.shopping-item').toggleClass('.shopping-item__checked')
      console.log('check button click')
    })
  }


  createShoppingList()
  checkItem()
}

$(main)
