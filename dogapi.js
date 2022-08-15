document.getElementById("header").innerHTML = "<div id='dog'><i class='fa-solid fa-dog'></i></div><div id='bar'><input  type='text' id='input'><button id='btn'><i class='fa-solid fa-magnifying-glass'></i></button><div>";
document.getElementById("btn").classList.add("btn");

// Api call
fetch("https://api.thedogapi.com/v1/breeds").then((Responce)=> Responce.json())
.then((data) =>{
showData(data);
}).catch("Error");

// Data from Api rendered here
const showData = (data) => { 
   for (var a=0;a<6;a++){
    let main = document.getElementById("main");
    let addtag = document.createElement("div");
    main.appendChild(addtag);
    target = document.getElementById("main").children;
    const data1 = `<b>Name</b> : ${data[a].name}<br><b>Origin :</b> ${data[a].origin}<br><b>Breed Group :</b> ${data[a].breed_group}<br><b>Life Span :</b> ${data[a].life_span}`;
    target[a].innerHTML = data1;
    }
}
// get input bar inner html 
// call api
// data
// get searched get element by id
// loop
searchbar=()=>{
    let searchbar = document.getElementById("input").value;   
    fetch(`https://api.thedogapi.com/v1/breeds/search?q=${searchbar}`).then((result)=> result.json()).then((results)=>{
        displayData(results);
    }).catch("Error");
        const displayData=(data)=>{
        let searched = document.getElementById("searched");
        tagadd = document.createElement("div");
        searched.appendChild(tagadd);
        let target = document.getElementById("searched").children;
        target[0].classList.add("searcheddata");
        const finalData = `<h3>${data[0].breed_group}</h3><b>Name :</b> ${data[0].name}<br>
        <b>Bred for :</b> ${data[0].bred_for}<br><b>Country Code :</b> ${data[0].country_code}<br><b>Life Span :</b> ${data[0].life_span}<br>
        <b>Origin :</b> ${data[0].origin}<br><b>Refrence image :</b> ${data[0].reference_image_id}<br><b>Temperament :</b> ${data[0].temperament}
        <h3>Weight</h3><b>Imperial :</b> ${data[0].weight.imperial}<br><b>Metric :</b> ${data[0].weight.metric}
        <h3>Height</h3><b>Imperial :</b> ${data[0].height.imperial}<br><b>Metric :</b> ${data[0].height.metric}`;
        target[0].innerHTML = finalData;
    }
}
document.getElementById("btn").addEventListener("click",searchbar);