let now = new Date()
let saranOption = ["Terimakasih", "Mantap", "Jos", "Oke", ".", " ", "..."]
let minOpt = ["05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"]
let minute = minOpt[Math.floor(Math.random() * minOpt.length)]
let yourSaran = saranOption[Math.floor(Math.random() * saranOption.length)]
let yourTeam = "KRSBI-Beroda IRIS"
let yourName = "Faderik"

let logBody = "entry.2042940715_year=2022&\
entry.2042940715_month=4&\
entry.1142693049_hour=03&\
entry.1142693049_minute="+minute+"&\
entry.2042940715_day="+now.getDate()+"&\
entry.1620124486="+yourName+"&\
entry.1894810241="+yourSaran+"&\
entry.2060687339="+yourTeam

function submitSahurLog() {
    fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSci5hTGBLs-x4YNY6fSkkIDRmkp-M4hqpj0HPOq34Mh07N4NA/formResponse", 
    {
        method: "POST", 
        body: new URLSearchParams (
            logBody
        )
    })
    .then(r => {
        console.info("Log Success", r)
        // submitSahurRobotika(yourName)
    })
    .catch(error => console.error("Log Error", error))

}

function submitSahurRobotika() {
    fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSdLDK-9wFbZVjnVEJpwCHOa-svlaZcWWfc-fIzlYYsCsgoG8Q/formResponse", 
    {
        method: "POST", 
        body: new URLSearchParams (
            "entry.1474663762_year=2022&\
            entry.1474663762_month=4&\
            entry.101281000_hour=03&\
            entry.101281000_minute="+minute+"&\
            entry.1474663762_day="+now.getDate()+"&\
            entry.1838502861="+yourName+"&\
            entry.687419860="+yourSaran+"&\
            entry.1878233469="+yourTeam
        )
    })
    .then(r => console.info("Robotika Success", r))
    .catch(error => console.error("Robotika Error", error))
}

setTimeout(() => {
    console.log("Submit Sahur Log : " + yourName )
    submitSahurLog()
}, 1000);

// Runner +======================================

// let logBody = "", rbtkBody = ""
// let listName = ["Faderik", "Taufik Hidayat", "Azzam Wildan", "Rama", "Danen", "Ian"]

// listName.forEach(name => {


//     setTimeout(() => {
//         console.log("Submit Sahur for : " + name)

//         logBody = "entry.2042940715_year=2022&\
//         entry.2042940715_month=4&\
//         entry.1142693049_hour=03&\
//         entry.1142693049_minute="+minute+"&\
//         entry.2042940715_day="+now.getDate()+"&\
//         entry.1620124486="+name+"&\
//         entry.1894810241="+yourSaran+"&\
//         entry.2060687339="+yourTeam
    
//         rbtkBody = "entry.1474663762_year=2022&\
//         entry.1474663762_month=4&\
//         entry.101281000_hour=03&\
//         entry.101281000_minute="+minute+"&\
//         entry.1474663762_day="+now.getDate()+"&\
//         entry.1838502861="+name+"&\
//         entry.687419860="+yourSaran+"&\
//         entry.1878233469="+yourTeam

//         setTimeout(() => {
//             submitSahurLog()
//         }, 1000);
//     }, 1000);
// })