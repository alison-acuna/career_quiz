$(document).ready(function(){
  console.log("ready!");
})

var extrovert_score = 0
var design_score = 0
var qa_score = 0
var data_score = 0

$("#clientquestion").submit(function(event){
  event.preventDefault();
  $("#clientquestion").toggle(display= false);
  if(document.getElementById('clientyes').checked){
    $("#designquestion").toggle(display= true);
    extrovert_score +=2;
  }else if(document.getElementById('clientno').checked){
    $("#designquestion").toggle(display= true);
  } else {
    $("#designquestion").toggle(display= true);
    extrovert_score +=1;
  }
  console.log("extrovert "+ extrovert_score);
  console.log("design " + design_score);
  console.log("QA " + qa_score);
  console.log("Data Score " + data_score);
});

$("#designquestion").submit(function(event){
  event.preventDefault();
  $("#designquestion").toggle(display= false);
  if(document.getElementById('designyes').checked){
    design_score += 2;
    $("#editquestion").toggle(display= true);
  }else if(document.getElementById('designno').checked){
    $("#editquestion").toggle(display= true);
    design_score = 0;
  } else {
    $("#editquestion").toggle(display= true);
    design_score +=1;
  }
  console.log("extrovert "+ extrovert_score);
  console.log("design " + design_score);
  console.log("QA " + qa_score);
  console.log("Data Score " + data_score);
});

$("#editquestion").submit(function(event){
  event.preventDefault();
  $("#editquestion").toggle(display= false);
  if(document.getElementById('edityes').checked){
    $("#databasequestion").toggle(display= true);
    qa_score +=2
  }else if(document.getElementById('editno').checked){
    $("#databasequestion").toggle(display= true);
    console.log(extrovert_score)
  } else {
    $("#databasequestion").toggle(display= true);
    qa_score +=1
  }
  console.log("extrovert "+ extrovert_score);
  console.log("design " + design_score);
  console.log("QA " + qa_score);
  console.log("Data Score " + data_score);
});

$("#databasequestion").submit(function(event){
  event.preventDefault();
  $("#databasequestion").toggle(display= false);
  if(document.getElementById('databaseyes').checked){
    $("#partyquestion").toggle(display= true);
    data_score +=2
  }else if(document.getElementById('databasena').checked){
    data_score +=1
  } else if(document.getElementById('databaseidk').checked){
    // display resources
  }
  console.log("extrovert "+ extrovert_score);
  console.log("design " + design_score);
  console.log("QA " + qa_score);
  console.log("Data Score " + data_score);

});

$("#partyquestion").submit(function(event){
  event.preventDefault();
  $("#partyquestion").toggle(display= false);
  if(document.getElementById('partyyes').checked){
    extrovert_score +=2
  }else if(document.getElementById('partyno').checked){
  } else {
    extrovert_score +=1
  }
  console.log("extrovert "+ extrovert_score);
  console.log("design " + design_score);
  console.log("QA " + qa_score);
  console.log("Data Score " + data_score);
});
