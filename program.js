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
  if(document.getElementById('yes').checked){
      $("#designquestion").toggle(display= true);
      extrovert_score +=2
  }else if(document.getElementById('no').checked){
    $("#designquestion").toggle(display= true);
  } else {
    $("#designquestion").toggle(display= true);
    extrovert_score +=1
  }
  console.log("extrovert "+ extrovert_score)
});

$("#designquestion").submit(function(event){
  event.preventDefault();
  $("#designquestion").toggle(display= false);
  if(document.getElementById('yes').checked){
      $("#editquestion").toggle(display= true);
      design_score +=2
  }else if(document.getElementById('no').checked){
    $("#editquestion").toggle(display= true);
  } else {
    $("#editquestion").toggle(display= true);
    design_score +=1
  }
  console.log("design " + design_score)
});

$("#editquestion").submit(function(event){
  event.preventDefault();
  $("#editquestion").toggle(display= false);
  if(document.getElementById('yes').checked){
      $("#databasequestion").toggle(display= true);
      qa_score +=2
  }else if(document.getElementById('no').checked){
    $("#databasequestion").toggle(display= true);
    console.log(extrovert_score)
  } else {
    $("#databasequestion").toggle(display= true);
    qa_score +=1
  }
  console.log("QA " + qa_score)
});

$("#databasequestion").submit(function(event){
  event.preventDefault();
  $("#databasequestion").toggle(display= false);
  if(document.getElementById('yes').checked){
      $("#partyquestion").toggle(display= true);
      data_score +=2
  }else if(document.getElementById('na').checked){
    data_score +=1
  } else if(document.getElementById('na').checked){
    // display resources
  }
  console.log("data " + data_score)
});

$("#partyquestion").submit(function(event){
  event.preventDefault();
  $("#partyquestion").toggle(display= false);
  if(document.getElementById('yes').checked){
      extrovert_score +=2
  }else if(document.getElementById('no').checked){
  } else {
    extrovert_score +=1
  }
  console.log("extrovert "+ extrovert_score)
});
