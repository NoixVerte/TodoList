export const dom_list = document.createElement("div");
export const dom_list_item = document.createElement("div");


dom_list.className = "list";
const list_header_wrapper = document.createElement('div');
list_header_wrapper.className = "list-header-wrapper";
const list_header = document.createElement("input");
list_header.className = "list-header";
list_header.type = "text";
list_header.placeholder = "List";
const list_delete_btn = document.createElement("button");
list_delete_btn.className = "list-delete-btn";
list_delete_btn.innerText = "X";


list_header_wrapper.appendChild(list_header);
list_header_wrapper.appendChild(list_delete_btn);
dom_list.appendChild(list_header_wrapper);

dom_list_item.className = "list-item";
const list_item_wrapper = document.createElement("div");
const list_item_check = document.createElement("input");
list_item_check.type = "checkbox";
list_item_check.className = "list-item-checkbox";
const list_item_name = document.createElement("input");
list_item_name.style = "text"
list_item_name.maxLength = 21;
list_item_name.placeholder = "Task"
list_item_name.className = "list-item-name";
const list_item_descr = document.createElement("textarea");
list_item_descr.className = "list-item-description";
list_item_descr.placeholder = "Description"

list_item_wrapper.appendChild(list_item_check);
list_item_wrapper.appendChild(list_item_name);

dom_list_item.appendChild(list_item_wrapper);
dom_list_item.appendChild(list_item_descr);

//Test
dom_list.appendChild(dom_list_item);
dom_list.appendChild(dom_list_item.cloneNode(true));
