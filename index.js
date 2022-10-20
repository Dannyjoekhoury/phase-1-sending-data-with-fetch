// Add your code here


const submitData = {
    name: "Byron",
    email: "poodle@gmail.com",
  };
  
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(submitData),
  };
  
  fetch("http://localhost:3000/users", configurationObject)
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
      console.log(object);
    })

    .catch(function (error) {
        alert("Unauthorized  Access");
        console.log(error.message);
    });