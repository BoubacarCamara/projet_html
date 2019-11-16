<!-- <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />
    <style>
      div#conteneur {
        background: #f5e6b9;
        min-height: 12px;
        min-width: 100%;
        margin-top: 2vh;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="row"><h1 class="title">Formulaire d'inscription</h1></div>
      <div id="error"></div>
      <div class="container" >
        <form action="#" id="formulaire" class="form-group" method="GET">
          <div id="pseudo_inscription">
            <div class="row">
              <div class="col-12">
                <input
                  type="text"
                  name="nom"
                  placeholder="Entrez votre nom"
                  id="nom"
                  class="form-control"
                />
              </div>
              <div class="col-12">
                <input
                  type="text"
                  name="prenom"
                  placeholder="Entrez votre Prenom"
                  id="prenom"
                  class="form-control"
                />
              </div>
              <div class="col-12">
                <input
                  type="email"
                  name="email"
                  placeholder="Entrez votre email"
                  id="email"
                  class="form-control"
                />
              </div>
              <div class="col-12">
                Genre:
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="genre"
                    id="genreF"
                    value="0"
                  />
                  <label class="form-check-label" for="genreF">
                    F
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="genre"
                    id="genreM"
                    value="1"
                  />
                  <label class="form-check-label" for="genreM">M </label>
                </div>
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-6"><h3>Options</h3></div>
              <div class="col-6">
                <button type="button" id="ajout" class="btn btn-secondary">
                  <h2>+</h2>
                </button>
              </div>
              <div id="conteneur" class="col-12"></div>
            </div>
            <div class="row  mt-5">
              <button type="submit" class="btn btn-primary" name="valider" value="valider">Envoyer</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <script src="script.js"></script>
  </body>
</html>


 <?php 

if(isset($_GET['valider'])){

    $nom = @$_GET['nom'];

    $email = @$_GET['email'];

    $prenom = @$_GET['prenom'];

  if($nom!=="" and $prenom!== "" and $email!=="" and isset($_GET['genre'])){

    echo "<div class='btn btn-success'>vos donnees sont enregistrees</div>";

  } else {

    if($nom == "") {

      echo "<div class='btn btn-danger'>le nom ne doit pas etre vide</div>";

    }

    if($prenom == "") {

      echo"<div class='btn btn-danger'>le prenom ne doit pas etre vide</div>";

    }

    if($email == "") {

      echo "<div class='btn btn-danger'>l'adresse email est vide</div>";

    }

    if(!isset($_GET['genre']))

      echo "<div class='btn btn-danger'>Veillez selectionne un genre</div>";

    }

  }

?> 






