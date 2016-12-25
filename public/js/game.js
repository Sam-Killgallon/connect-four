var ConnectFour;

ConnectFour = (function() {
  function ConnectFour() {
  }

  ConnectFour.prototype.mark = function(el) {
    el.innerHTML = "x";
  };

  return ConnectFour;
})();

var game = new ConnectFour;

(function() {
  var cells = document.getElementsByTagName("td");
  for(var i = 0 ; i < cells.length ; i++) {
    cells[i].setAttribute("onclick", "game.mark(this)");
  }
})();
