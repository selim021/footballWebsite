document.addEventListener('DOMContentLoaded', function() {
  var loggedInUser = localStorage.getItem("loggedInUser");
  if (loggedInUser) {
    //console.log("loggedin")
    $("#user").text(""+loggedInUser);
    $("#loggedin").show();
    $("#notloggedin").hide();
    $("#Signout").click(function() {
      // Remove item from local storage
      localStorage.removeItem("loggedInUser");

  });
}
else {
  $("#loggedin").hide();
  $("#notloggedin").show();
}

    var images = [
      'ess.jfif',
      'vs est.jfif',
      'boutmene.jfif',
      'ee.jfif'
      // Add more image filenames here
    ];
    var currentIndex = 0;
    var intervalTime = 3000; // Change image every 3 seconds
  
    var herobanner = document.querySelector('.herobanner');
  
    function changeBackgroundImage() {
      var imageUrl = 'pp imaes/' + images[currentIndex];
      herobanner.style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("' + imageUrl + '")';
      currentIndex = (currentIndex + 1) % images.length;
    }
  
    changeBackgroundImage(); // Initial call
    setInterval(changeBackgroundImage, intervalTime);
  });

  
