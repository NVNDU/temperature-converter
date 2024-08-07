
const convert=()=>{

    const tofahrenheite = document.getElementById("tofahrenheit");
    const tocelsius = document.getElementById("tocelsius");
    const input = document.getElementById("input");
    let answer = document.getElementById("answer");

    let temp;
    let uservalue = parseInt(input.value);

    if(isNaN(uservalue)){
        alert("plz enter a value")
    }else{
        if(tofahrenheite.checked){
            temp= ((9/5) * uservalue + 32).toFixed(1);
            answer.innerHTML=`${temp}°F`;
            input.value=""; //input tag doesnt have closing tag
        }else if (tocelsius.checked) {
            temp= ((uservalue - 32)* 5/9).toFixed(1);
            answer.innerHTML=`${temp}°C`;
            input.value=""; //input tag doesnt have closing tag
        }else{
            alert("please choose a choice!");
        }
    }
}