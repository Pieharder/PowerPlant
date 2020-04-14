import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { stateChanger, blueFood, greenFood, yuckyFood } from './../src/plant.js';

$(document).ready(function() {

  // This function has side effects because we are using jQuery. Manipulating the DOM will always be a side effect.
    $('#feed').click(function() {
      const newState = stateChanger(blueFood);
      $('#soil-value').text(newState.soil);
    });
    $('#feedmore').click(function() {
      const newState = stateChanger(greenFood);
      $('#soil-value').text(newState.soil);
    });
    $('#feedless').click(function() {
      const newState = stateChanger(yuckyFood);
      $('#soil-value').text(newState.soil);
    });
  });