<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="shortcut icon" href="imgs/bee.ico" type="image/x-icon">
    <link rel="icon" href="imgs/bee.ico" type="image/x-icon">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" type="text/css" href="css/estilos.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="css/estilos.css">

    <title>Spelling_Bee</title>
  </head>
  <body>
  <!-- Seccion de Barra de navegacion **-->

  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" ><img width="40" height="40" src="imgs/bee.ico"></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Change difficulty
        </a>
        <div class="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
          <a class="dropdown-item difficulty" href="#">Easy</a>
          <a class="dropdown-item difficulty" href="#">Normal</a>
          <a class="dropdown-item difficulty" href="#">Hard</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item difficulty" href="#">Random</a>
        </div>
      </li>
    
    </ul>
  </div>
</nav>
<br>

<!-- Ventanas pricipales **-->
<!-- Ventanas pricipales **-->
<!-- Ventanas pricipales **-->


  
<!-- Div Pantalla principal -->
    <div id="jumbo" class="jumbotron" style="display:block">
    <center>
      <h3 class="display-5">Improve Your Spelling Skills!</h3>
      <p class="lead">
Exercise your word recognition with an extensive vocabulary useful for daily life.</p>
      <hr class="my-4">
      <a class="btn btn-primary btn-lg" onclick="ocultarJumbo()" role="button">Get started</a>
      </p></center>
    </div>




<!--main role="main">

  

      <div id="cards" class="album py-5" >
        <div class="container">

          <div class="row">
            <div class="col-md-4">
              <div class="card mb-4 box-shadow  bg-dark">
                <img class="card-img-top" width="100" height="150" src="imgs/bee.ico" alt="Card image cap">
                <div class="card-body">
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 box-shadow">
                <img class="card-img-top" data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail" alt="Card image cap">
                <div class="card-body">
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 box-shadow">
                <img class="card-img-top" data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail" alt="Card image cap">
                <div class="card-body">
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </main-->



<center>
<!-- Selector de dificutad -->

<div id="selector" class="container" style="display:none;">
  <h1 class="lab">Choose your difilcuty</h1><hr>
  <div class="card bg-dark" style="width: 18rem; padding: 20px">
  <button type="button" class="btn btn-primary" onclick="ocultarSelector()">Easy</button><hr>
  <button type="button" class="btn btn-warning" onclick="ocultarSelector()">Normal</button><hr>
  <button type="button" class="btn btn-danger" onclick="ocultarSelector()">Hard</button><hr>
  <button type="button" class="btn btn-light" onclick="ocultarSelector()">Random</button>
  </div>
</div>




<!-- Div Speaker -->
    <div id="speaker" class="container" style="display:none;">

        <h1 class="lab">Push the speaker to start<hr></h1>
      

<a id="spk"  class="pop" data-toggle="popover" data-placement="top" title="Attempts"><img id="speakerImg"  width="155" height="155" onclick="getData()" src="imgs/speaker.png" ></a>
<button id="lets" type="button" class="btn btn-success" onclick="ocultarSpeaker()">Let's go</button>
          
    </div>

<!-- Div Seccion de botones -->
    
    <div id="botones" class="container" style="display:none">
    <h1>Hello, world!</h1>
    <button type="button" class="btn btn-dark letra">A</button>
    <button type="button" class="btn btn-dark letra">B</button>
    <button type="button" class="btn btn-dark letra">C</button>
    <button type="button" class="btn btn-dark letra">D</button>
    <button type="button" class="btn btn-dark letra">E</button>
    <button type="button" class="btn btn-dark letra">F</button>
    <button type="button" class="btn btn-dark letra">G</button>
    <hr>
    <button type="button" class="btn btn-dark letra">H</button>
    <button type="button" class="btn btn-dark letra">I</button>
    <button type="button" class="btn btn-dark letra">J</button>
    <button type="button" class="btn btn-dark letra">K</button>
    <button type="button" class="btn btn-dark letra">L</button>
    <button type="button" class="btn btn-dark letra">M</button>
    <button type="button" class="btn btn-dark letra">N</button>
    <hr>
    <button type="button" class="btn btn-dark letra">O</button>
    <button type="button" class="btn btn-dark letra">P</button>
    <button type="button" class="btn btn-dark letra">Q</button>
    <button type="button" class="btn btn-dark letra">R</button>
    <button type="button" class="btn btn-dark letra">S</button>
    <button type="button" class="btn btn-dark letra">T</button>
    <button type="button" class="btn btn-dark letra">U</button>
    <hr>
    <button type="button" class="btn btn-dark letra">V</button>
    <button type="button" class="btn btn-dark letra letra">X</button>
    <button type="button" class="btn btn-dark letra">Y</button>
    <button type="button" class="btn btn-dark letra">Z</button>
    <button type="button" class="btn btn-dark letra">1</button>
    <button type="button" class="btn btn-dark letra">2</button>
    <button type="button" class="btn btn-dark letra">3</button>
    </div>
    </center>







    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <script type="text/javascript" src="js/main.js"></script>
  </body>
</html>