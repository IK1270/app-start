function UsersService(baseUrl) {
    this.baseUrl = baseUrl;
  }
  
  UsersService.prototype.getAllUsers = async function () {

    let response = await fetch('https://jsonplaceholder.typicode.com/users')
    let content = await response.json()
    content = content.splice(1, 10)

    Let list = document.querySelector(' .users list')
    
  };
  
  UsersService.prototype.getUserById = async function (id) {

    let response = await fetch('https://jsonplaceholder.typicode.com/users/id')
    let content = await response.json()
    content = content.splice(1, 10)

    Let list = document.querySelector(' .users list')
   
  };
  
  UsersService.prototype.renderUsersList = function (list) {

    Let key;

    //for in 
    for (key in content) {

        list.innerHTML += '
            <<li class="users list">
            <h3>${content [key].name}</h3>
            <src=https://api.lorem.space/image/face?w=120&h=120&r=1
            ${content [key].company.name}</></src>               
            </li>
            
    }          