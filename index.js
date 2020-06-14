$(function() {
    // Listener to add new items to list
    $('#js-shopping-list-form').submit(function(event){
        event.preventDefault();
        console.log(event);
        let itemName = $(this).find('input').val();
        $(this).find('input').val('');
        $('.shopping-list').append(`<li>
            <span class="shopping-item">${itemName}</span>
            <div class="shopping-item-controls">
                <button class="shopping-item-toggle">
                    <span class="button-label">check</span>
                </button>
                <button class="shopping-item-delete">
                    <span class="button-label">delete</span>
                </button>
            </div>
        </li>`);
    });

    // Listener to delete item from list
    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
        console.log(event.currentTarget);
        $(event.target).closest('li').remove();
    });
});