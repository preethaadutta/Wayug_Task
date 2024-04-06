const matchinfoURL='https://rest.entitysport.com/v2/matches/63702/info?token=7f7322ea66a7a524e249f66f2c9e06c7';
const squadsURL='https://rest.entitysport.com/v2/matches/60919/squads?token=ec471071441bb2ac538a0ff901abd249';
const scorecardURL='https://rest.entitysport.com/v2/matches/49689/scorecard?token=ec471071441bb2ac538a0ff901abd249';


let promise=fetch(matchinfoURL);
console.log(promise);

const bannerp=document.querySelector('#bannerp');
const bannert=document.querySelector('#bannert');
const wontossp=document.querySelector('#wontossp');
const venue=document.querySelector('#venue');

//using asynchronous function
//as when we call any API and requests to give some data is asynchronous work. as it may take some time so we use await
const getMatchinfo=async()=>{
    console.log("Geting data from API");
    let response=await fetch(matchinfoURL);
    console.log(response);//response is an object in JSON format

    //printing status of response object
    console.log(response.status);//200 means successful

    //converting JSON format to JS object usable format
    let data=await response.json();
    console.log(data);//usable data
    //console.log(data.datetime);//datetime

    //console.log(data.response);//response
    console.log(data.response.short_title);//teama
    //console.log(data.response.teama.squads);//squads of teama
    //console.log(data.response.teama.squads[0]);//retriving 1st element of squads array of teama
    //console.log(data.response.teama.squads[0].name);//retriving name of 1st person of squads array of teama

    bannerp.innerText=data.response.short_title;
    bannert.innerText=data.response.result;

    console.log(data.response.toss.text);//prints which team wins in toss
    wontossp.innerText=data.response.toss.text;

    venue.innerText=data.response.venue.name;//prints match venue
}

/*
const teamap1=document.querySelector('#teamap1');
const rolep1=document.querySelector('#rolep1');
*/

const teamap=document.getElementsByClassName('teamap');
const rolep=document.getElementsByClassName('rolep');

const teambp=document.getElementsByClassName('teambp');
const rolebp=document.getElementsByClassName('rolebp');

const getSquads=async()=>{
    console.log("Geting data from API");
    let response=await fetch(squadsURL);
    console.log(response);//response is an object in JSON format

    //printing status of response object
    console.log(response.status);//200 means successful

    //converting JSON format to JS object usable format
    let data=await response.json();
    console.log(data);//usable data
    //console.log(data.datetime);//datetime

    //console.log(data.response);//response
    //console.log(data.response.short_title);//teama
    //console.log(data.response.teama.squads);//squads of teama
    //console.log(data.response.teama.squads[0]);//retriving 1st element of squads array of teama
    console.log(data.response.teama.squads[0].name);//retriving name of 1st person of squads array of teama
    console.log(data.response.teama.squads[0].role);
    

    /*
    teamap1.innerText=data.response.teama.squads[0].name;
    rolep1.innerText=data.response.teama.squads[0].role;
    */
    
    for(let i=0;i<data.response.teama.squads.length;i++) 
    {
        //console.log(data.response.teama.squads[i].name);
        for(let j=0;j<teamap.length;j++) 
        {
            if(j==i)
            {
                teamap[j].innerText=data.response.teama.squads[i].name;
            }
            //teamap[j].innerText=data.response.teama.squads[i].name;
        }
        //console.log(data.response.teama.squads[i].role);
        for(let j=0;j<rolep.length;j++) 
        {
            if(j==i)
            {
                rolep[j].innerText=data.response.teama.squads[i].role;
            }
            //rolep[j].innerText=data.response.teama.squads[i].role;
        }
    }

    for(let i=0;i<data.response.teamb.squads.length;i++) 
    {
        //console.log(data.response.teamb.squads[i].name);
        for(let j=0;j<teambp.length;j++) 
        {
            if(j==i)
            {
                teambp[j].innerText=data.response.teamb.squads[i].name;
            }
        }
        //console.log(data.response.teamb.squads[i].role);
        for(let j=0;j<rolebp.length;j++) 
        {
            if(j==i)
            {
                rolebp[j].innerText=data.response.teamb.squads[i].role;
            }
        }
    }
}

const batter=document.getElementsByClassName('batter');
const how_out=document.getElementsByClassName('how_out');
const run=document.getElementsByClassName('run');
const ball=document.getElementsByClassName('ball');
const fours=document.getElementsByClassName('4s');
const sixs=document.getElementsByClassName('6s');
const sr=document.getElementsByClassName('SR');

const getScorecard=async()=>{
    console.log("Geting data from API");
    let response=await fetch(scorecardURL);
    console.log(response);//response is an object in JSON format

    //printing status of response object
    console.log(response.status);//200 means successful

    //converting JSON format to JS object usable format
    let data=await response.json();
    console.log("scorecard");
    console.log(data);//usable data
    
    //console.log(data.response.teama.squads[0]);//retriving 1st element of squads array of teama
    //console.log(data.response.innings[0].batsmen[0].name);//retriving name of 1st batsman from the array of batsmen
    
    for(let i=0;i<data.response.innings.length;i++) 
    {
        //console.log(data.response.teama.squads[i].name);
        for(let j=0;j<data.response.innings[i].batsmen.length;j++) 
        {
            console.log(data.response.innings[i].batsmen[j].name);//getting name of each batsman
            for(let k=0;k<batter.length;k++) 
            {
                if(k==j)
                {
                    batter[k].innerText=data.response.innings[i].batsmen[j].name;
                }
            }
            for(let k=0;k<how_out.length;k++) 
            {
                if(k==j)
                {
                    how_out[k].innerText=data.response.innings[i].batsmen[j].how_out;
                }
            }
            for(let k=0;k<run.length;k++) 
            {
                if(k==j)
                {
                    run[k].innerText=data.response.innings[i].batsmen[j].runs;
                }
            }
            for(let k=0;k<ball.length;k++) 
            {
                if(k==j)
                {
                    ball[k].innerText=data.response.innings[i].batsmen[j].balls_faced;
                }
            }

            for(let k=0;k<fours.length;k++) 
            {
                if(k==j)
                {
                    fours[k].innerText=data.response.innings[i].batsmen[j].fours;
                }
            }
            for(let k=0;k<sixs.length;k++) 
            {
                if(k==j)
                {
                    sixs[k].innerText=data.response.innings[i].batsmen[j].sixes;
                }
            }
            for(let k=0;k<sr.length;k++) 
            {
                if(k==j)
                {
                    sr[k].innerText=data.response.innings[i].batsmen[j].strike_rate;
                }
            }
        }
        /*
        //console.log(data.response.teama.squads[i].role);
        for(let j=0;j<rolep.length;j++) 
        {
            if(j==i)
            {
                //rolep[j].innerText=data.response.teama.squads[i].role;
            }
        }
        */
    }
    

}

getMatchinfo();
getSquads();
getScorecard();