model = {
    items: []
}

view = {
    clearList: function() {
        //some DOM stuffs to clear our list HTML
        var range = document.createRange()  //創造一個範圍
        range.selectNodeContents(document.getElementById("list"))
        range.deleteContents()
    },
    render: function() {
        // we then clear it here and re-render our data
        this.clearList()

        if(model.items.length != 0){
            list = document.getElementById("list");
            
            for(var i = 0; i < model.items.length; i++){
                item        = document.createElement("li")
                span        = document.createElement("span")
                check       = document.createElement("a")
                cross       = document.createElement("a")
                iconCheck   = document.createElement("i")
                iconCross   = document.createElement("i")
                
                item.className = "item"
                span.className = "item-text"
                check.className = "item-complete"
                cross.className = "item-delete"

                span.textContent = model.items[i].text

                if(model.items[i].completed)
                    span.setAttribute("style", "text-decoration: line-through; color: #bbb")
                
                iconCheck.setAttribute("class", "icon ion-md-checkmark")
                iconCheck.setAttribute("data-id", i)
                iconCheck.setAttribute("class", "icon ion-md-trash")
                iconCheck.setAttribute("data-id", i)

                check.setAttribute("onclick", "controller.completeItem('" + i + "')")
                cross.setAttribute("onclick", "controller.deleteItem('" + i + "')")
                
                check.appendChild(iconCheck)
                cross.appendChild(iconCross)
                item.appendChild(span)
                item.appendChild(check)
                item.appendChild(cross)
                
                list.appendChild(item)
            }
        }
    },
    addItem: function(e){
        // this is for our onclick function in index.html
        if((e.code == "Enter") || (e.code == "NumpadEnter")) {
            input = document.getElementById("add-item")
            // check if input is empty
            if((input.value != "") || (input.value != " ")){
                controller.addItem(input.value)
                return false 
            }
        }
    }
}

controller = {
    init: function(){
        view.render()   
        // we call our render function as we always want to refresh our view(the page)
        // when we update something.
    },
    addItem: function(item){
        list_item = { text: item, completed: false }
        model.items.push(list_item) // add item to our model (save it)
        document.getElementById("add-item").value = ""
        view.render()
    },
    completeItem: function(item_index){
        // toggle items as completed
        model.items[item_index].completed = !model.items[item_index].completed
        view.render()
    },
    deleteItem: function(item_index){
        model.items.splice(item_index, 1)
        view.render()
    }
}



controller.addItem("Feed doggo.");
controller.addItem("Cook dinner.");
controller.addItem("Do shopping.");

controller.init()