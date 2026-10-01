import './styles.css';
import list from "./list.js";
import list_item from "./list-item.js";
import { dom_list, dom_list_item } from './dom.js';

const new_list_btn = document.getElementById("new-list-btn");
const lists_wrapper = document.getElementById("lists-wrapper");

function createList() {
    lists_wrapper.appendChild(dom_list.cloneNode(true));
};

function createListItem() {

}

new_list_btn.addEventListener("click", () => {
    createList();
});

createList();

// let myItem = new item("name", "descr", "duedate", "low");
// console.log(myItem.priority);
// myItem.changePriority("high");
// console.log(myItem.priority);
// myItem.changePriority("penis");
// console.log(myItem.priority);