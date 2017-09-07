// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

var timerUI = {
  drawNumericDisplay: function(timerValue){
   document.getElementById("numeric-display").innerHTML = timerValue;
//   console.log("test");
  },
  drawProgressBars: function(timerValue){
    let progressBar = document.getElementsByClassName('progress-bar');
    let progress = 100 - timerValue;
    progressBar[0].style.width = progress + '%';
  },
  drawLitFuses: function(timerValue){
    let unburntFuse = document.getElementsByClassName('unburnt');    
    let fuseLength = timerValue;
    unburntFuse[0].style.width = fuseLength + '%';
  },
  drawCrawlers: function(timerValue){
    let distanceLeft = 100 - timerValue;
    let crawlerBug = document.getElementsByClassName('crawler');
    if(distanceLeft % 2 == 0){
      crawlerBug[0].style.marginTop = '0px';      
    } else {
      crawlerBug[0].style.marginTop = '10px';      
    }
    crawlerBug[0].style.marginLeft = (distanceLeft*10) + 'px';
  }
};
