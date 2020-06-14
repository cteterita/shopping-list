$(function() {
    $('#js-shopping-list-form').submit(function(event){
        event.preventDefault();
        console.log(event);
        let itemName = $(this).find('input').val();
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
});