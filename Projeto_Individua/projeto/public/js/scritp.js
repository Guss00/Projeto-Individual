const localStorageKey = 'to-do-list-gn'

function newTask(){
    var input = document.getElementById('input-new-task');

    if(!input.value){

    }
    // else if(){

    // }

    else{
        // increment to localStorage
        var values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
        
        values.push({
            name: input.value
        })

        console.log(values)
    }
}