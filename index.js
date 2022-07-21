// Add your code here
// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle",
// }

// const configurationObject = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     body: JSON.stringify(formData)
// }

//   fetch('http:/localhost:3000/dogs', configurationObject)
//   .then(function (response) {
//     return response.json()
//   })
//   .then(function (object) {
//     console.log(object)
//   })
//   .catch(function (error) {
//     alert("Bad things! Ragnarok!")
//     console.log(error.message)
//   })

function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: `${name}`,
            email:`${email}`,
        })
    })
        .then(response => response.json())
        .then(user => {
            let body = document.querySelector('body')
            body.innerHTML =`
                <p>${user.id}</p>
                `
        })
        .catch(error => {
            let body = document.querySelector('body')
            body.innerHTML =`
                <p>${error.message}</p>
                `
        })
   
}
