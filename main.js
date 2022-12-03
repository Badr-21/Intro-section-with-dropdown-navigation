const features = document.querySelector("#features");
const company = document.querySelector("#company");
const featuresList = document.querySelector(".features-list");
const companyList = document.querySelector(".company-list");
const arrowF = document.querySelector(".arrow-f");
const arrowC = document.querySelector(".arrow-c");
console.log(featuresList)

features.addEventListener("click", ()=> {
    featuresList.classList.toggle("show");
    if(featuresList.classList.contains("show")){
        arrowF.setAttribute("src", "images/icon-arrow-up.svg");
    }else {
        arrowF.setAttribute("src", "images/icon-arrow-down.svg"); 
    }
    if(companyList.classList.contains("show")) {
        companyList.classList.remove("show");
        arrowC.setAttribute("src", "images/icon-arrow-down.svg");
    }
})

company.addEventListener("click", ()=> {
    companyList.classList.toggle("show");
    if(companyList.classList.contains("show")){
        arrowC.setAttribute("src", "images/icon-arrow-up.svg"); 
    }else {
        arrowC.setAttribute("src", "images/icon-arrow-down.svg"); 
    }
    if(featuresList.classList.contains("show")) {
        featuresList.classList.remove("show");
        arrowF.setAttribute("src", "images/icon-arrow-down.svg");
    }
})

// window.addEventListener("click", () => {
//     if(featuresList.classList.contains("show")) {
//         featuresList.classList.remove("show");
//     }
// })