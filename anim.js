/// Declaration de variable
let $inputForm = document.querySelector(".inputStyle"); /// intérargir avec des élements du html
let $btnSubmit = document.querySelector(".btnSubmit"); /// intérargir avec des élements du html
let $repBtnValue = document.querySelector(".repBtnValue");
let $iconValidtionEmail = document.querySelector(".iconValidtionEmail");
let img = document.createElement("img");
let textToDisplay = "";

//------------------------------------------------------------------------------------------------
/// Code

/// generer l'evenement au click du boutton
$btnSubmit.addEventListener("click", (event) => {
  /// addEventListener se compose d'un click et de la fonction qui execute le code
  event.preventDefault(); /// event.preventDefault empeche le comportement natif d'un élement
  let insideInputValue = $inputForm.value; /// recuperer la valeur du input au moment du click du boutton
  checkIfInputValueIsOk(insideInputValue);
});

/// checker si la valeur de l'input est ok
checkIfInputValueIsOk = (inputValue) => {
  if (inputValue.includes("@") && inputValue.includes(".", 1)) {
    /// on check si l'adresse mail ecrite contient bien un "." et un "@"
    textToDisplay = "its ok"; /// si la condition est remplie, on affichera ce texte ci
    $repBtnValue.style.color = "green"; /// injecter / changer du css en occurence la couleur du texte
    img.src = "";
  } else {
    textToDisplay = "Please provide a valid email"; /// si la condition n'est pas remplie, on affichera ce texte ci
    $repBtnValue.style.color = "red"; /// injecter / changer du css occurence la couleur du texte
    img.src = "images/icon-error.svg";
    $inputForm.style.borderColor = "hsl(0, 93%, 68%)";
    $inputForm.style.borderWidth = "1.9px";
  }
  $iconValidtionEmail.appendChild(img);
  return ($repBtnValue.innerHTML = textToDisplay); /// Iner Htlm injecte du contenue HTML depuis le javascript
};
