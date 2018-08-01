import {Game} from './game';
import {makeGame} from './game';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {
  $('#game').submit(function(event) {
    event.preventDefault();

    var gameArray = [];

    $(".cell").each(function() {
      var td_value = $(this).val();
      gameArray.push(parseInt(td_value));
    });
    var  newGame = new Game();
    newGame.usersSolution = gameArray
    newGame.solution(this.usersSolution);
  });

    $('#new-game').click(function(event) {
      event.preventDefault();

      var array = makeGame()

      console.log(array);


  });
});
