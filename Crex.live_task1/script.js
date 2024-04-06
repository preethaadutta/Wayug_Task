const URL='https://rest.entitysport.com/v2/matches/60919/squads?token=ec471071441bb2ac538a0ff901abd249';
let promise=fetch(URL);
console.log(promise);

//const question=document.querySelector('#question');
//const answer=document.querySelector('#answer');
//const button=document.querySelector('button');


//using asynchronous function
//as when we call any API and requests to give some data is asynchronous work. as it may take some time so we use await
const getFacts=async()=>{
    /*
    let promise=await fetch(URL);
    console.log(promise);
    */
    console.log("Geeting data from API");
    let response=await fetch(URL);
    console.log(response);//response is an object in JSON format

    //printing status of response object
    console.log(response.status);//200 means successful

    //converting JSON format to JS object usable format
    let data=await response.json();
    console.log(data);//usable data
    console.log(data.datetime);//datetime

    console.log(data.response);//response
    console.log(data.response.teama);//teama
    console.log(data.response.teama.squads);//squads of teama
    console.log(data.response.teama.squads[0]);//retriving 1st element of squads array of teama
    console.log(data.response.teama.squads[0].name);//retriving name of 1st person of squads array of teama
}