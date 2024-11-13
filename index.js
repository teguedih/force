document.getElementById("Ajouter un étudiantForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    
    let name = document.getElementById("name").value.trim();
    let prenom = document.getElementById("prenom").value.trim();
    let email = document.getElementById("email").value.trim();
    let photo = document.getElementById("photo").value.trim();
    if (name === "" || email === "" || prenom === "" || photo) {
        document.getElementById("feedback").innerText = "Veuillez remplir tous les champs.";
        document.getElementById("feedback").style.color = "red";
    } else {
        document.getElementById("feedback").innerText = "Merci pour votre message!";
        document.getElementById("feedback").style.color = "green";

        document.getElementById("contactForm").reset();
    }
});