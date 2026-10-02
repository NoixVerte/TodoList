import './styles.css';
import list from "./list.js";
import list_item from "./list-item.js";
import { dom_list, dom_list_item } from './dom.js';

const new_list_btn = document.getElementById("new-list-btn");
new_list_btn.addEventListener("click", () => {
    createList();
})

function createList() {
    const lists_wrapper = document.getElementById("lists-wrapper");
    const list = lists_wrapper.appendChild(dom_list.cloneNode(true));
    createListItem(list);
    addEventListenerToListDeleteButton(list);
    addEventListenerToListAddItemButton(list);
}

function addEventListenerToListDeleteButton(list) {
    list.querySelector(".list-delete-btn").addEventListener("click", () => {
        list.remove();
    });
}

function addEventListenerToListAddItemButton(list) {
    list.querySelector(".list-add-item-btn").addEventListener("click", () => {
        createListItem(list);
    })
}

function createListItem(parent) {
    let newListItem = dom_list_item.cloneNode(true);
    parent.insertBefore(newListItem, parent.querySelector(".list-add-item-btn"));
    addEventListenerToListItemCheckButton(newListItem);
    addEventListenerToListItemDeleteButton(newListItem);
    addEventListenerToLisItemPriority(newListItem)
}

function addEventListenerToListItemCheckButton(listItem) {
    let listItemCheckbox = listItem.querySelectorAll(".list-item-checkbox")[listItem.querySelectorAll(".list-item-checkbox").length - 1];
    listItemCheckbox.addEventListener("click", () =>  {
        let list_item_name = listItem.querySelector(".list-item-name");
        let list_item_description = listItem.querySelector(".list-item-description");
        if (!listItemCheckbox.checked) {
            list_item_name.style.color = "black";
            list_item_name.style.textDecoration = "none";
            list_item_description.style.color = "black";
            list_item_description.style.textDecoration = "none";
        } else {
            list_item_name.style.color = "gray";
            list_item_name.style.textDecoration = "line-through";
            list_item_description.style.color = "gray";
            list_item_description.style.textDecoration = "line-through";
        }
    })
}

function addEventListenerToListItemDeleteButton(listItem) {
    listItem.querySelector(".list-item-delete-btn").addEventListener("click", () => {
        listItem.remove();
    })
}

function addEventListenerToLisItemPriority(listItem) {
    let list_item_priority = listItem.querySelector(".list-item-priority");
    list_item_priority.addEventListener("click", () => {
        switch (list_item_priority.innerHTML) {
            case "low":
                list_item_priority.innerText = "medium";
                list_item_priority.style.color = "red"
                list_item_priority.style.backgroundColor = "orange";
                break;
            case "medium":
                list_item_priority.innerText = "high";
                list_item_priority.style.color = "pink"
                list_item_priority.style.backgroundColor = "red";
                break;
            case "high":
                list_item_priority.innerText = "low";
                list_item_priority.style.color = "green"
                list_item_priority.style.backgroundColor = "lightgreen";
        }
    })
}

createList();