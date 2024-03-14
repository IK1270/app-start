async function getResponse() {
    let response = await fetch('https://jsonplaceholder.typicode.com/users')
    let content = await response.json()
    content = content.splice(0, 10)

    Let list = document.querySelector(' .users list')

    
    Let key;

    //for in 
    for (key in content) {

        list.innerHTML += '
            <<li class="users list">
            <h3>${content [key].name}</h3>
            <src=${content [key].company.name}               
            </li>
        
    }
    
}

getResponse()



