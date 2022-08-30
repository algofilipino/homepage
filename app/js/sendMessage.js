function sendEmail() {
  Email.send({
      SecureToken : "51eaed79-1e33-457f-82da-509c75a6b888",
      To : 'vrixenmendoza@gmail.com',
      From : 'vrixen2000@gmail.com',
      Subject : document.getElementById("subject").value,
      Body : "Name : " + document.getElementById("name").value 
      + "<br> Email : " + document.getElementById("email").value
      + "<br> Message : " + document.getElementById("message").value
  }).then(
    message => alert("Message Send Successfully")
  );
}