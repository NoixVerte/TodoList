import list from "./list";
import list_item from "./list-item";

const list_wrapper = document.getElementById("list-wrapper");
let default_list = new list("default");
for (i = 0; i < 3; i++) {
    let new_item = new list_item("name" + i + 1, "Generic description " + i + 1, Date.getDate(), "low");
    default_list.items.push();
};