const form=document.querySelector('form');
form.addEventListener('submit',function(e){
e.preventDefault();

const height=parseInt(document.querySelector('#height').value)
const weight=parseInt(document.querySelector('#weight').value)
const result=document.querySelector('#result')
if(height===""||height<=0||isNaN(height)){
    result.innerHTML=`please enter the valid ${height}`
}
else if(weight===""||weight<=0||isNaN(weight)){
    result.innerHTML=` please enter the valod ${weight}`
}
else{
    const bmi=(weight/((height*height)/10000)).toFixed(2);
    result.innerHTML= `<span> ${bmi}</span>`
    if(bmi>24.9){
   
      result.innerHTML=`person is OverWeight: ${bmi}`
    }
    if(bmi>18.6 && bmi<24.9){
       result.innerHTML= `<span> ${bmi}</span>`
        result.innerHTML=`Person is in normail range :${bmi}`;
    }
    if(bmi<18.6){
      result.innerHTML= `<span> ${bmi}</span>`
       result.innerHTML=`Person is Underweight :${bmi}`;
    }

}

})
