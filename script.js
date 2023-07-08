 const calculate=() => {
    if (maleInput.value != "" && femaleInput.value != ""){
        display.innerHTML = `<h1 class = "text-success text-center mx-auto"> You are ${Math.round(Math.random()*100)}% compatible</h1>`
    }
    else{
        display.innerHTML = `<h3 class = "text-danger"> Pleae fill all details</h3>`
    }
 }
