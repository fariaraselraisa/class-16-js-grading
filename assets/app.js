function show_result(){
    let c = document.querySelector("#c").value;
    let mt = document.querySelector("#mt").value;
    let ph = document.querySelector("#ph").value;
    let ja = document.querySelector("#ja").value;
    let csa = document.querySelector("#csa").value;

    let to = parseFloat(c) + parseFloat(mt) + parseFloat(ph) + parseFloat(ja) + parseFloat(csa);
    let per = (to*100)/500;

    if(per>=80){
        document.querySelector(".gra").innerHTML = "A+";
    }
    else if(per>=70){
        document.querySelector(".gra").innerHTML = "A";
    }
    else if(per>=60){
        document.querySelector(".gra").innerHTML = "A-";
    }
    else if(per>=50){
        document.querySelector(".gra").innerHTML = "B";
    }
    else if(per>=40){
        document.querySelector(".gra").innerHTML = "C";
    }
    else if(per>=33){
        document.querySelector(".gra").innerHTML = "D";
    }
    else{
        document.querySelector(".gra").innerHTML = "F";
    }
    document.querySelector(".to").innerHTML = to;
    document.querySelector(".per").innerHTML = per;
    
    if(per>33){
        document.querySelector(".result h2").innerHTML = "You are Pass";
    }
    else{
        document.querySelector(".result h2").innerHTML = "You are Fail";
    }
}