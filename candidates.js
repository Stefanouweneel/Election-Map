var newPolitician = function(name, color) {
  var politician = {};
  politician.name = name;
  politician.color = color;
  return politician;
};

var candidateOne = newPolitician("Trump", [132, 17, 11]);
var candidateTwo = newPolitician("Clinton", [245, 141, 136]);

candidateOne.electionResults = [5, 1, 7, 17, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 11, 2, 11, 1, 3, 7, 2]
candidateTwo.electionResults = [4, 2, 4, 38, 22, 3, 3, 1, 28, 15,	8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 27, 1, 2, 11, 2, 3, 1]

var setStateResults = function() {
  var stateWinner = {}
  for (var i = 0; i < candidateOne.electionResults.length; i++) {
    if (candidateOne.electionResults[i] > candidateTwo.electionResults[i]) {
      stateWinner = candidateOne
      theStates[i].rgbColor = candidateOne.color
    }
    else if (candidateTwo.electionResults[i] > candidateOne.electionResults[i]) {
      stateWinner = candidateTwo
      theStates[i].rgbColor = candidateTwo.color
    }
    else {
      theStates[i].rgbColor = [11, 32, 57]
    }
  }
};

setStateResults();

candidateOne.totalVotes = function() {
  this.totalVotes = 0;
  for (var i = 0; i < this.electionResults.length; i++) {
    this.totalVotes = this.totalVotes + this.electionResults[i];
  }
};

candidateTwo.totalVotes = function() {
  this.totalVotes = 0;
  for (var i = 0; i < this.electionResults.length; i++) {
    this.totalVotes = this.totalVotes + this.electionResults[i];
  }
};

resultsOne = candidateOne.totalVotes();
resultsTwo = candidateTwo.totalVotes();

var declareWinner = function() {
  if (candidateOne.totalVotes > candidateTwo.totalVotes) {
    console.log(candidateOne.name + " won!")
  }
  else {
    console.log(candidateTwo.name + " won!")
  }
};

declareWinner();
