var newPolitician = function(name, color) {
  var politician = {};
  politician.name = name;
  politician.color = color;
  politician.electionResults = null;
  politician.totalVotes = 0;
  return politician;
};

var trump = newPolitician("Trump", [132, 17, 11]);
var clinton = newPolitician("Clinton", [70, 130, 180]);

trump.electionResults = [5, 1, 7, 17, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 11, 2, 11, 1, 3, 7, 2]
clinton.electionResults = [4, 2, 4, 38, 22, 3, 3, 1, 28, 15,	8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 27, 1, 2, 11, 2, 3, 1]

var setStateResults = function(state) {
  theStates[state].winner = null;
  if (trump.electionResults[state] > clinton.electionResults[state]) {
    theStates[state].winner = trump;
  }
  else if (trump.electionResults[state] < clinton.electionResults[state]) {
    theStates[state].winner = clinton;
  }

  var stateWinner = theStates[state].winner;

  if (stateWinner !== null) {
    theStates[state].rgbColor = stateWinner.color;
  }
  else {
    theStates[state].rgbColor = [11, 32, 57];
  }

  var stateInfoTable = document.getElementById('stateResults');

  var header = stateInfoTable.children[0].children[0];
  var stateName = header.children[0];
  stateName.innerText = theStates[state].nameFull;

  var stateAbbr = header.children[1];
  stateAbbr.innerText = theStates[state].nameAbbrev;

  var row1 = stateInfoTable.children[1].children[0];
  var name1 = row1.children[0];
  name1.innerText = trump.name;

  var results1 = row1.children[1];
  results1.innerText = trump.electionResults[state];

  var row2 = stateInfoTable.children[1].children[1];
  var name2 = row2.children[0];
  name2.innerText = clinton.name;

  var results2 = row2.children[1];
  results2.innerText = clinton.electionResults[state];

  var row3 = stateInfoTable.children[1].children[2];
  var stateResult = row3.children[1];

  if (stateWinner !== null) {
    stateResult.innerText = stateWinner.name;
  }
  else {
    stateResult.innerText = "Draw";
  }
};

trump.totalVotes = function() {
  this.totalVotes = 0;
  for (var i = 0; i < this.electionResults.length; i++) {
    this.totalVotes = this.totalVotes + this.electionResults[i];
  }
};

clinton.totalVotes = function() {
  this.totalVotes = 0;
  for (var i = 0; i < this.electionResults.length; i++) {
    this.totalVotes = this.totalVotes + this.electionResults[i];
  }
};

resultsOne = trump.totalVotes();
resultsTwo = clinton.totalVotes();

var declareWinner = function() {
  if (trump.totalVotes > clinton.totalVotes) {
    winner = trump.name;
  }
  else if (trump.totalVotes < clinton.totalVotes) {
    winner = clinton.name;
  }
  else {
    winner = "Draw"
  }
  return winner
};

declareWinner();

var countryResults = document.getElementById("countryResults");

countryResults.children[0].children[0].children[0].innerText = trump.name;
countryResults.children[0].children[0].children[1].innerText = trump.totalVotes;
countryResults.children[0].children[0].children[2].innerText = clinton.name;
countryResults.children[0].children[0].children[3].innerText = clinton.totalVotes;
countryResults.children[0].children[0].children[5].innerText = winner;
