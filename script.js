var headerItems = document.querySelectorAll(".headerItems > a");
var backItem;
var menuIcon = document.querySelector("#menuIcon");
var menu = document.querySelector(".pagesMenu");
var menuShow = false;

function deleteBottomBorder(){
    items = document.querySelectorAll(".activeItem");
    items.forEach(function(item){
        item.classList.remove("activeItem");
    });
}

headerItems.forEach(function(item){
    item.addEventListener('mouseover', function(item){
        backItem = item.target;
        deleteBottomBorder();
        item.target.classList.add('activeItem');
    });
    item.addEventListener('mouseout',function(item){
        backItem.classList.remove('activeItem');
    });
});

menuIcon.addEventListener('click',function(item){
    if(!menuShow){
        menu.style.display = 'flex';
        menuShow = true;
    }
    else{
        menu.style.display = 'none';
        menuShow = false;
    }
});