/*
Save the user to local storage with key "user", in following format:- 
{
name: "",
image: "",
email: "",
country: "" (store country code "in", "ch", "nz", "us", "uk")
}
*/
function persun(){
    var profile={
        name: document.querySelector("#user_name").value,
    image:document.querySelector("#user_pic").value,
    email: document.querySelector("#user_email").value,
    country: document.querySelector("#user_country").value,
    }
    
    localStorage.setItem("user",JSON.stringify(profile ))
    }