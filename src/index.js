import './styles.css';
import list from "./list.js";
import list_item from "./list-item.js";
import { dom_list, dom_list_item } from './dom.js';

const new_list_btn = document.getElementById("new-list-btn");
new_list_btn.addEventListener("click", () => {
    createList();
});

function createList() {
    const lists_wrapper = document.getElementById("lists-wrapper");
    const list = lists_wrapper.appendChild(dom_list.cloneNode(true));
    createListItem(list);

    const list_delete_btns = document.getElementsByClassName("list-delete-btn");
    for (let list_delete_btn of list_delete_btns) {
        list_delete_btn.addEventListener("click", (event) => {
            event.target.closest(".list").remove();
        });
    };

    const list_add_item_btns = document.getElementsByClassName("list-add-item-btn");
    for (let list_add_item_btn of list_add_item_btns) {
        if (list_add_item_btn.getAttribute("listener") !== "true") {
            list_add_item_btn.addEventListener("click", (event) => {
                createListItem(event.target.closest(".list"));
            });
            list_add_item_btn.setAttribute("listener", "true");
        }
    }
};

function createListItem(parent) {
    let newListItem = dom_list_item.cloneNode(true);
    parent.insertBefore(newListItem, parent.querySelector(".list-add-item-btn"));

    const list_item_delete_btns = document.getElementsByClassName("list-item-delete-btn");
    for (let list_item_delete_btn of list_item_delete_btns) {
        list_item_delete_btn.addEventListener("click", (event) => {
            event.target.closest(".list-item").remove();
        });
    };
}

createList();