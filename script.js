let todos = [];

        function addTodo() {

            todos.push({ title: document.querySelector("input").value });
            document.querySelector("input").value = "";
            render();

        }

        function deleteTodo(index) {
            todos.splice(index, 1);
            render();
        }

        function editTodo() {

        }

        function createTodoComponent(tod, index) {
            const div = document.createElement("div");
            const divel = document.createElement("div");
            const divbut = document.createElement("div");
            const check = document.createElement("input");
            const label = document.createElement("label");
            label.setAttribute("for","checkb"+index);
            label.innerHTML = tod.title;
            check.setAttribute("type","checkbox");
            check.setAttribute("id","checkb"+index);
            divel.setAttribute("id", "hello");
            divel.appendChild(check);
            divel.appendChild(label);
            const delbutton = document.createElement("button");
            delbutton.innerHTML = "Delete";
            const editbutton = document.createElement("button");
            delbutton.setAttribute("onclick", "deleteTodo(" + index + ")");
            divbut.appendChild(delbutton);           
            div.setAttribute("class","eldiv");
            div.appendChild(divel);
            div.appendChild(divbut);
            return div;
        }

        function render() {
            document.querySelector("#todo").innerHTML = "";
            for (let i = 0; i < todos.length; i++) {
                const element = createTodoComponent(todos[i], i);
                document.querySelector("#todo").appendChild(element);
            }
           
        }
