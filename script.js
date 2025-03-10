let myArray = ["Ant", "Bird", "Cat", "Dog"];

function updateList() {
    let list = document.getElementById("arrayList");
    list.innerHTML = "";
    myArray.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
    });
}

function addToArray() {
    let newItem = prompt("กรุณากรอกชื่อสัตว์ที่ต้องการ :");
    if (newItem !== null && newItem.trim() !== "") {
        myArray.push(newItem.trim());
        updateList();
    }
}

updateList();
