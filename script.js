


document.querySelector(".view-work-btn").addEventListener("click", function(e){
    e.preventDefault();

    document.querySelector("#work").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});


emailjs.init({
  publicKey: "BYVgO480TdZS2ocJ5"
});

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_pagvt8o",
        "template_dnmpm4k",
        this
    ).then(() => {
        alert("Message Sent Successfully!");
        form.reset();
    }).catch((error) => {
        console.log(error);
        alert("Failed to Send Message");
    });
});

