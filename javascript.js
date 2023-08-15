

let addTodoBtn = document.querySelector(".add-todo-btn");
let wholeDiv = document.querySelector(".mydiv")
let getFormData = () => {
    let addTodo = document.querySelector(".add-todo")
    let todoData = addTodo.value;
    let dataObj = {
        title: todoData
    }
    todoData.value = "";
    return dataObj;
     
 
}

let getDataInLocalStorage = () => {
    let data = localStorage.getItem("notes") || "[]";
    let parsedData = JSON.parse(data)
    return parsedData;

}
let saveDataInLocalStorage = (item) => {
    let data = getDataInLocalStorage();
    data.push(item);
    localStorage.setItem("notes", JSON.stringify(data));
    let addTodo = document.querySelector(".add-todo")
    addTodo.value = ""

}
let showData = () => {
    let holder = document.querySelector("#holder");
    holder.innerHTML = ""
    let data = getDataInLocalStorage();
    data.forEach(
        (item) => {
            let html = `<tr>
                        <th scope="row">${item.title}</th>
                        <td>Mark</td>
                    
                        <td>
                            <button class="btn btn-sm btn-primary px-2 mx-2 delete-btn" >Edit</button>
                            <button class="btn btn-sm btn-danger px-2">Delete</button>
                        </td>
                    </tr>`;
                    
                    holder.innerHTML += html;    



        }
    )
    
}


// let deleteBtn = document.querySelector(".delete-btn");
// deleteBtn.addEventListener("click",()=>){
//    localStorage.removeItem("formdata")
//    showData();
// }

showData()
addTodoBtn.addEventListener("click", () => {
    let formdata = getFormData();
    saveDataInLocalStorage(formdata);
    showData();
    
})

let deleteAllBtn = document.querySelector(".deleteall-btn")
deleteAllBtn.addEventListener("click",()=>{
    localStorage.clear()
    showData()
})

