/*let btn = document.getElementById("btn");//pour ajouter
let bt= document.getElementById("btn-light");//pour annuler
let navbar = document.getElementById("varbar");
btn.addEventListener("click",function()//ajouter
{
   navbar.classList.add("navbar-dark", "bg-dark");
   navbar.classList.add("navbar-dark", "bg-dark");
});
btn-light.addEventListener("click",function()//pour annuler
{
   navbar.classList.remove("navbar-dark", "bg-dark");
   navbar.classList.remove("navbar-dark", "bg-dark");
});*/

//let formulaire = document.getElementById("message_form");
//let inputs = document.getElementsByTagName("input");
//let error =document.getElementById("error");
//formulaire.addEventListener("change", function(event){
//   let message_error = "";
  // event.preventDefault();
  // for(let i = 0; i < inputs.length; i ++){
    //  if(inputs[i].value == ""){
      //   message_error += "champ vide";
       //  break;
    //  }
  // }
  // if(inputs[1].value != inputs[2].value){
    //  message_error += "email incorect";
   //}else if(document.getElementById("message").value.length <= 3) {
   //   message_error += "saisir un text long ";
   //} 
   //if (message_error === ""){
     // error.innerHTML = "<div class='alert alert-success'>formulaire valide</div>";
      
   //}else{
    //  error.innerHTML =`<div class="alert alert-danger">${message_error}</div>`;
  // }
   
//});
//let change = document.querySelector('.btn').disabled = true

// let formulaire = document.getElementById("formu")
// let container = document.getElementById("conteneur")
// let btn = document.getElementById("ajout")   
// btn.addEventListener('click',function(){
//     let generate = document.createElement('form');
//       generate.innerHTML= " email<input type='text'> confirm<input type='text'></input>";
//       container.appendChild(generate)
//  })
//  ////
//  function input_generator() {
//    let input1 = document.createElement("input");
//    let input2 = document.createElement("input");  input1.classList.add("form-control", "col-6");
//    input2.classList.add("form-control", "col-6");  conteneur.classList.add("row");
//    conteneur.appendChild(input1);
//    conteneur.appendChild(input2);
//   }add_element_btn.addEventListener("click", function() {
//    input_generator();
//    inputs = document.querySelectorAll("#conteneur input");
  //})

   //if(inputs[genre].value != inputs[2].value){
      //message_error += "email incorect";
   //}else if(document.getElementById("message").value.length <= 3) {
     //message_error += "saisir un text long ";
  // } 
//    if (message_error === ""){
//       error.innerHTML = "<div class='alert alert-success'>formulaire valide</div>";
      
//    }else{
//       error.innerHTML =`<div class="alert alert-danger">${message_error}</div>`;
//    }
   
// });
// let change = document.querySelector('.btn').disabled = true

// let formulaire = document.getElementById('formulaire');
// formulaire.addEventListener("submit", function(e) {
//   let div_error = document.getElementById('error');
//   e.preventDefault();  let erro_var = "";
//    if (document.getElementById('nom').value === "") {
//      erro_var = "le champ email est vide";
//      div_error.innerHTML = "<div class= alert alert-danger"> </div>

//    }
//    else if(document.getElementById('prenom').value === ""){
//      erro_var = "le champ email est vide";
//    }

//    else if(document.getElementById('email').value === ""){
//      erro_var = "le champ email est vide";
//    }
//    else if (!document.getElementById('genreF').checked && !document.getElementById('genreM').checked) {
//      erro_var = "veuillez cochez le genre";
//    } 
//     if (erro_var == "") {
//      erro_var = "vos donnees ont ete enregistrees";
//    }
//    console.log(erro_var);
//    document.getElementById("error").innerHTML = erro_var;
//    formulaire.submit();
//   });


let formulaire = document.getElementById('formulaire');

​

​

formulaire.addEventListener("submit",function(e){

	e.preventDefault();

	let nom = document.getElementById('nom');

	let prenom = document.getElementById('prenom');

	let email = document.getElementById('email');

	let genreF = document.getElementById('genreF');

	let genreM = document.getElementById('genreM');

	let div_error = document.getElementById('error');

	if(nom.value === ""){

		div_error.innerHTML = "<div class='alert alert-danger'>Le champ nom est vide</div>";

	}

	if(prenom.value === ""){

		div_error.innerHTML = "<div class='alert alert-danger'>Le champ prenom est vide</div>";

	}

	if(email.value === ""){

		div_error.innerHTML = "<div class='alert alert-danger'>Le champ email est vide</div>";

	}

	if(genreM.checked==false && genreF.checked==false){

		div_error.innerHTML = "<div class='alert alert-danger'>Veuillez choisir un genre</div>";

	}

	if(nom.value!='' && prenom.value!='' && email.value!='' && (genreF.checked || genreM.checked)){

		formulaire.submit();

	}

});

