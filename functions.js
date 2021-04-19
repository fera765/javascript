function ask(question, yes, no) {
  if (question.includes('True')) yes()
  else no();
}

function showOk() {
  console.log( "You agreed." );
}

function showCancel() {
  console.log( "You canceled the execution." );
}

// Funções onde existem como parametros 2 callback
ask("Do you agree? True", showOk, showCancel);