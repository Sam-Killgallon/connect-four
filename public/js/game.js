var ConnectFour;

ConnectFour = (function() {
  function ConnectFour() {
    this.symbol = "X";
  }

  ConnectFour.prototype.nextPlayer = function() {
    if (this.symbol === "X") {
      this.symbol = "O";
    } else {
      this.symbol = "X";
    }
  }

  ConnectFour.prototype.mark = function(el) {
    klass = el.className;
    var column = document.getElementsByClassName(klass);

    for(var i = column.length - 1; i >= 0; i--){
      var cell = column[i];
      if (cell.innerHTML === ""){
        cell.innerHTML = this.symbol;
        break;
      }
    }

    if (this.checkWin()) {
      this.finishGame(this.symbol);
    } else {
      this.nextPlayer();
    }
  };

  ConnectFour.prototype.checkWin = function() {
    return (this.checkVertical() ||  this.checkHorizontal() || this.checkDiagonal());
  };

  ConnectFour.prototype.checkVertical = function() {
    klasses = ["one", "two", "three", "four", "five", "six", "seven"];
    for(var i = 0; i < klasses.length; i++) {
      var column = document.getElementsByClassName(klasses[i]);
      for(var j = 0; j < (column.length - 3) ; j++) {
        if ((column[j].innerHTML != "") && (column[j].innerHTML === column[j + 1].innerHTML) && (column[j].innerHTML === column[j + 2].innerHTML) && (column[j].innerHTML === column[j + 3].innerHTML)) {
          return true;
        }
      }
    }
    return false;
  }

  ConnectFour.prototype.checkHorizontal = function() {
    return false;
  }

  ConnectFour.prototype.checkDiagonal = function() {
    return false;
  }

  ConnectFour.prototype.finishGame = function(winner) {
    setTimeout(function() {
      alert("Game over! Player " + winner + " is the winner!");
    }, 500);
  }

  return ConnectFour;
})();

var game = new ConnectFour;

(function() {
  var cells = document.getElementsByTagName("td");
  for(var i = 0 ; i < cells.length ; i++) {
    cells[i].setAttribute("onclick", "game.mark(this)");
  }
})();
