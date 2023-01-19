// Get a reference to the vote count in the database
var voteCountRef = firebase.database().ref("voteCount");

// Get the current vote count from the database
voteCountRef.on("value", function(snapshot) {
  var voteCount = snapshot.val();
  document.getElementById("vote-count").innerHTML = voteCount;
});
