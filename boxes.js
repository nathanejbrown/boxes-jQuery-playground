//Add a callback function to ready that alerts a message saying, ready for DOM manipulation. Try using both styles of callbacks.

$(document).ready(function() {
  alert("Ready for DOM manipulation")

//Find the secretBox on the page. Set the background color to white. Add an h1 tag that says, "secret box!"

  document.getElementById('secretBox').style.backgroundColor = 'white';
  $('<h1></h1>').text("Secret Box").appendTo('#secretBox');

//Find all child divs of the first row. Set the class for each div to boxType3.
  $('#row1 div').addClass('boxType3');

//Make the last box in the last row disappear. (Hint, look into the dispaly style. Also, you should only get back one element from your selector.).
  var test = $('#row4 div:last-child');
  test.css('display', 'none');

//Change all red boxes to white.
  var redBoxes = $('.boxType1').not('.boxType3');
  redBoxes.css('background-color', 'white');

//Get the first two divs in the second row. Take away all styling from the divs.
  var firstTwoRowTwo = $('#row2 div:lt(2)');
  firstTwoRowTwo.removeClass("boxType2 boxType3");

//Get all divs inside the container that are not row divs and are not the secret box div. Set the width of the divs to 2 pixels.
  var notSecret = $('div.box').not('#secretBox');
  notSecret.css('width', '2px');

//Add an on click handler to the container div. Console log the x and y position of the click.
  $('#container').click(function(event) {
    var msg = "Mouse clicked at: ";
    msg += event.pageX + ", " + event.pageY;
    console.log(msg);
  })

//Add links inside all red box divs that take the user to galvanize. Then add an on click handler that alerts the user that you can never leave the page. Make sure the user won't leave the page after the alert!
  $('<a href="galvanize.com"></a>').text("Galvanize").appendTo('.boxType1');
  $('#container').click(function() {
    alert("You can check out any time you like, but you can't never leave!");
  })

//For all box divs, add a click handler that adds an image of a cute puppy to the box. If the image is clicked again, remove the cute puppy.

//I didn't get this one to work. I'm turning it in as is because I need to move on to later assignments.

  // var box = $('#container.box');
  // $('#container.row.box').on('click', function() {
  //   console.log("Clicked");
  //   $(this).css('background-image', 'url("http://my10online.com/wp-content/uploads/2011/09/blindpuppy.jpg")');
  // })
})
