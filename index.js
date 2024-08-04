const categoriesButton = [];
const lists = [];
const collectionButton = document.getElementsByClassName('reproduction__header__categories-item');
const collectionLists = document.getElementsByClassName('reproduction__list');

for(let i = 0; i < collectionButton.length;i++) {
    categoriesButton[i] = collectionButton[i];
    lists[i] = collectionLists[i];
    categoriesButton[i].addEventListener("click", () => switchCategory(categoriesButton[i]));
}
function switchCategory(category) {
    for(let i = 0; i < collectionButton.length;i++) {
        if(categoriesButton[i].classList.contains("active")){
            categoriesButton[i].classList.remove("active");
            lists[i].classList.remove("active");
            break;
        }
    }
    lists[categoriesButton.indexOf(category)].classList.add("active");
    category.classList.add("active");
}   

