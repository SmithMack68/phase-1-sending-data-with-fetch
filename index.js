// Add your code here


function submitData(data){
    return fetch('http://localhost:3000/users', {
       method: 'POST',
       headers:{
           'Content-Type': 'application/json',
           Accept: 'application/json',
       },
       body: JSON.stringify({
           name: 'Steve',
           email: 'steve@steve.com',
       }),
    })
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
        document.querySelector('body').innerHTML = data.id
    })
    .catch(error => {
        let message = 'Unauthorized Access'
        console.log(error.message)
        document.body.innerHTML = error.message
       
    });
};
    submitData()

