// // type module

// import data from'./data.json' assert { type: 'JSON' }
// console.log(data);
// var  dataObj =  fetch('./data.json')
//     .then((response) => response.json())
//     .then((json) => return json );
// var rand = dataObj[1]
const daily = document.querySelector('#daily');
const weekly = document.querySelector('#weekly');
const monthly = document.querySelector('#monthly');

const bot = document.querySelector('#bot')

const workHr = document.querySelector("#work-hour");
const workPrev = document.querySelector(".prev-work");
const playHr = document.querySelector("#play-hour");
const playPrev = document.querySelector(".prev-play");
const studyHr = document.querySelector("#study-hour");
const studyPrev = document.querySelector(".prev-study");
const exerHr = document.querySelector("#exer-hour");
const exerPrev = document.querySelector(".prev-exer");
const socialHr = document.querySelector("#social-hour");
const socialPrev = document.querySelector(".prev-social");
const selfHr = document.querySelector("#self-hour");
const selfPrev = document.querySelector(".prev-self");

var objdata = [
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ];
  console.log(objdata[1].title);


daily.addEventListener("click", function(){
   
    daily.classList.add('active')
    weekly.classList.remove('active')
    monthly.classList.remove('active')
    
    workHr.textContent = objdata[0].timeframes.daily.current + " hrs"
    workPrev.textContent = 'Last day - ' + objdata[0].timeframes.daily.previous + " hrs"
    playHr.textContent = objdata[1].timeframes.daily.current + " hrs"
    playPrev.textContent = 'Last day - ' + objdata[1].timeframes.daily.previous + " hrs"
    studyHr.textContent = objdata[2].timeframes.daily.current + " hrs"
    studyPrev.textContent = 'Last day - ' + objdata[2].timeframes.daily.previous + " hrs"
    exerHr.textContent = objdata[3].timeframes.daily.current + " hrs"
    exerPrev.textContent = 'Last day - ' + objdata[3].timeframes.daily.previous + " hrs"
    socialHr.textContent = objdata[4].timeframes.daily.current + " hrs"
    socialPrev.textContent = 'Last day - ' + objdata[4].timeframes.daily.previous + " hrs"
    selfHr.textContent = objdata[5].timeframes.daily.current + " hrs"
    selfPrev.textContent = 'Last day - ' + objdata[5].timeframes.daily.previous + " hrs"

});
weekly.addEventListener("click", ()=> {
       
    daily.classList.remove('active')
    weekly.classList.add('active')
    monthly.classList.remove('active')
    
    workHr.textContent = objdata[0].timeframes.weekly.current + " hrs"
    workPrev.textContent = 'Last week - ' + objdata[0].timeframes.weekly.previous + " hrs"
    playHr.textContent = objdata[1].timeframes.weekly.current + " hrs"
    playPrev.textContent = 'Last week - ' + objdata[1].timeframes.weekly.previous + " hrs"
    studyHr.textContent = objdata[2].timeframes.weekly.current + " hrs"
    studyPrev.textContent = 'Last week - ' + objdata[2].timeframes.weekly.previous + " hrs"
    exerHr.textContent = objdata[3].timeframes.weekly.current + " hrs"
    exerPrev.textContent = 'Last week - ' + objdata[3].timeframes.weekly.previous + " hrs"
    socialHr.textContent = objdata[4].timeframes.weekly.current + " hrs"
    socialPrev.textContent = 'Last week - ' + objdata[4].timeframes.weekly.previous + " hrs"
    selfHr.textContent = objdata[5].timeframes.weekly.current + " hrs"
    selfPrev.textContent = 'Last week - ' + objdata[5].timeframes.weekly.previous + " hrs"
});
monthly.addEventListener("click", () => {
       
    daily.classList.remove('active')
    weekly.classList.remove('active')
    monthly.classList.add('active')
    
    workHr.textContent = objdata[0].timeframes.monthly.current + " hrs"
    workPrev.textContent = 'Last month - ' + objdata[0].timeframes.monthly.previous + " hrs"
    playHr.textContent = objdata[1].timeframes.monthly.current + " hrs"
    playPrev.textContent = 'Last month - ' + objdata[1].timeframes.monthly.previous + " hrs"
    studyHr.textContent = objdata[2].timeframes.monthly.current + " hrs"
    studyPrev.textContent = 'Last month - ' + objdata[2].timeframes.monthly.previous + " hrs"
    exerHr.textContent = objdata[3].timeframes.monthly.current + " hrs"
    exerPrev.textContent = 'Last month - ' + objdata[3].timeframes.monthly.previous + " hrs"
    socialHr.textContent = objdata[4].timeframes.monthly.current + " hrs"
    socialPrev.textContent = 'Last month - ' + objdata[4].timeframes.monthly.previous + " hrs"
    selfHr.textContent = objdata[5].timeframes.monthly.current + " hrs"
    selfPrev.textContent = 'Last month - ' + objdata[5].timeframes.monthly.previous + " hrs"
});


