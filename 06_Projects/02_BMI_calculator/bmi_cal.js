
const form = document.querySelector("form");

// const h = parseFloat(document.querySelector("#height").value);
//this will give you empty

form.addEventListener('submit', (e)=>{
    e.preventDefault();//stop the default actions don't submit yet

    const h = parseFloat(document.querySelector("#height").value);
    const w = parseFloat(document.querySelector("#weight").value);

    const results = document.querySelector("#results")
    
    if(h == '' || h<0 || isNaN(h)){
        results.innerHTML = `Please give a valid height ${h}`;
    }else if(w == '' || w<0 || isNaN(w)){
        results.innerHTML = `Please give a valid height ${w}`;
    }else{

        const bmi = (w/ ((h * h)/10000)).toFixed(2)
        //show the result

        // results.innerHTML = `Your BMI is: <span>${bmi}</span>`
        
        if(bmi<18.6){
            results.innerHTML = `Your BMI is: <span>${bmi}</span><p>You are <b>Uner Weight</b> ;-;</p>`
        }else if(bmi>=18.6 && bmi<=24.9){
            results.innerHTML = `Your BMI is: <span>${bmi}</span><p>You come under the <b>Normal Range</b> *.*</p>`
        }else{
            results.innerHTML = `Your BMI is: <span>${bmi}</span><p>You  are <b>Overweight</b> ;-;</p>`
        }
    }
})