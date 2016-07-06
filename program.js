$(document).ready(function(){
  console.log("ready!");
})

var extrovert_score = 0
var code_score = 0
var design_score = 0
var qa_score = 0
var data_score = 0
var devops_score = 0

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
});

$("#editquestion").submit(function(event){
  event.preventDefault();
  $("#editquestion").toggle(display= false);
  if(document.getElementById('edityes').checked){
    $("#databasequestion").toggle(display= true);
    qa_score +=2
  }else if(document.getElementById('editno').checked){
    $("#databasequestion").toggle(display= true);
  } else {
    $("#databasequestion").toggle(display= true);
    qa_score +=1
  }
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
});

$("#artquestion").submit(function(event){
  event.preventDefault();
  $("#artquestion").toggle(display= false);
  if(document.getElementById('artyes').checked){
    design_score +=2
  }else if(document.getElementById('artno').checked){
  } else {
    design_score +=1
  }
});

$("#collaborationquestion").submit(function(event){
  event.preventDefault();
  $("#collaborationquestion").toggle(display= false);
  if(document.getElementById('collaborationyes').checked){
    devops_score +=2
  }else if(document.getElementById('collaborationno').checked){
  } else {
    devops_score +=1
  }
});

$("#visualquestion").submit(function(event){
  event.preventDefault();
  $("#visualquestion").toggle(display= false);
  if(document.getElementById('visualyes').checked){
    design_score +=2
  }else if(document.getElementById('visualno').checked){
  } else {
    design_score +=1
  }
});


$("#finaltally").submit(function(event){
  event.preventDefault();
  var front_end = design_score + extrovert_score + code_score
  var back_end = qa_score + code_score
  var tech_support = extrovert_score + code_score
  console.log("extrovert "+ extrovert_score);
  console.log("design " + design_score);
  console.log("QA " + qa_score);
  console.log("Data Score " + data_score);
  console.log("DevOps Score " + devops_score);
  console.log("Front End Score " + front_end);
  if (design_score >= qa_score &&
      design_score >= data_score &&
      design_score >= devops_score &&
      design_score >= front_end &&
      design_score >= back_end &&
      design_score >= tech_support){
    console.log("You should consider a career as a web designer!")
  } else if (qa_score >= design_score &&
      qa_score >= data_score &&
      qa_score >= devops_score &&
      qa_score >= front_end &&
      qa_score >= back_end &&
      qa_score >= tech_support){
    console.log("You should consider a career in QA!")
  } else if (data_score >= design_score &&
      data_score >=  qa_score &&
      data_score >= devops_score &&
      data_score >= front_end &&
      data_score >= back_end &&
      data_score >= tech_support){
    console.log("You should consider a career as a database engineer!")
  } else if (devops_score >= design_score &&
      devops_score >=  qa_score &&
      devops_score >= data_score &&
      devops_score >= front_end &&
      devops_score >= back_end &&
      devops_score >= tech_support){
    console.log("You should consider a career in Dev Ops!")
  } else if (front_end >= design_score &&
      front_end >=  qa_score &&
      front_end >= data_score &&
      front_end >= devops_score &&
      front_end >= back_end &&
      front_end >= tech_support){
    console.log("You should consider a career as a Front End Developer!")
  } else if (back_end >= design_score &&
      back_end >=  qa_score &&
      back_end >= data_score &&
      back_end >= devops_score &&
      back_end >= front_end &&
      back_end >= tech_support){
    console.log("You should consider a career as a Front End Developer!")
  } else if (tech_support >= design_score &&
      tech_support >=  qa_score &&
      tech_support >= data_score &&
      tech_support >= devops_score &&
      tech_support >= front_end &&
      tech_support >= back_end){
    console.log("You should consider a career as a Front End Developer!")
  } else {
    console.log("test functioned")
  }
});


// NS:  Fix composite var and add you might also consider  these profesions with
// these scores - option
