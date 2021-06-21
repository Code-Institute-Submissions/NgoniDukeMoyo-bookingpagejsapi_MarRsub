function sendEmail(contactForm) {
    emailjs.send("gmail","Duke Moyo Template",{
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailAaddress.value,
        "project_request": contactForm.projectsummary.value,
    })
    .then(
        function(response){
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        })
}

