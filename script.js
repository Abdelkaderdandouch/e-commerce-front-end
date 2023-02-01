      // script for image change on click
      var MainImg = document.getElementById('MainImg');
      var smallimg = document.getElementsByClassName('small-img');

      // this function will replace the main img source with ourr small image source 
      smallimg[0].onclick = function() {
          MainImg.src = smallimg[0].src;

      }
      smallimg[1].onclick = function() {
          MainImg.src = smallimg[1].src;

      }
      smallimg[2].onclick = function() {
          MainImg.src = smallimg[2].src;

      }
      smallimg[3].onclick = function() {
          MainImg.src = smallimg[3].src;

      }