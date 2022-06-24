let input = document.getElementById("input");
let result = document.getElementById("result");
let inputType = document.getElementById("inputType");
let resultType = document.getElementById("resultType");
let inputTypeValue, resultTypeValue;

input.addEventListener("input", myResult);

result.addEventListener("input", myResult1);

inputType.addEventListener("change", myResult1);

resultType.addEventListener("change", myResult);

inputTypeValue = inputType.value;
resultTypeValue = resultType.value;

function myResult() {
  // result.value = input.value;

  inputTypeValue = inputType.value;
  resultTypeValue = resultType.value;

  if( inputTypeValue === "meter" && resultTypeValue === "kilometer"){
    result.value = Number(input.value / 1000) ;
  }else if (inputTypeValue === "meter" && resultTypeValue === "centimeter"){
    result.value = Number(input.value * 100) ;
  }else if(inputTypeValue === "meter" && resultTypeValue === "meter"){
    result.value = input.value ;
  }

  if( inputTypeValue === "kilometer" && resultTypeValue === "kilometer"){
    result.value = input.value ;
  }else if (inputTypeValue === "kilometer" && resultTypeValue === "centimeter"){
    result.value = Number(input.value * 100000) ;
  }else if(inputTypeValue === "kilometer" && resultTypeValue === "meter"){
    result.value = Number(input.value * 1000) ;
  }

  if( inputTypeValue === "centimeter" && resultTypeValue === "kilometer"){
    result.value = Number(input.value / 100000) ;
  }else if (inputTypeValue === "centimeter" && resultTypeValue === "centimeter"){
    result.value = input.value ;
  }else if(inputTypeValue === "centimeter" && resultTypeValue === "meter"){
    result.value = Number(input.value / 100) ;
  }

  


}

function myResult1(){


  inputTypeValue = inputType.value;
  resultTypeValue = resultType.value;

  if( resultTypeValue === "kilometer" && inputTypeValue === "meter"){
    input.value = Number(result.value * 1000) ;
  }else if (resultTypeValue == "centimeter" && inputTypeValue === "meter"  ){
    input.value = Number(result.value / 100) ;
  }else if(resultTypeValue === "meter" && inputTypeValue === "meter" ){
    input.value = result.value ;
  }

  if( resultTypeValue === "kilometer" && inputTypeValue === "kilometer" ){
    input.value = result.value ;
  }else if ( resultTypeValue === "centimeter" && inputTypeValue === "kilometer"  ){
    input.value = Number(result.value / 100000) ;
  }else if( resultTypeValue === "meter" && inputTypeValue === "kilometer"  ){
    input.value = Number(result.value / 1000) ;
  }

  if( resultTypeValue === "kilometer" && inputTypeValue === "centimeter"  ){
    input.value = Number(result.value * 100000) ;
  }else if ( resultTypeValue === "centimeter" && inputTypeValue === "centimeter"  ){
    input.value = result.value ;
  }else if( resultTypeValue === "meter" && inputTypeValue === "centimeter"  ){
    input.value = Number(result.value * 100) ;
  }

}
