// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

/// Data & Core Business Logic ///
const Stopwatch = {
  tickClock: function(){
    if (Stopwatch.isRunning) {
      setTimeout(Stopwatch.tickClock, 10); // trigger next clock tick
      Stopwatch.advanceTenMillisecs();
      AppController.handleClockTick();
    }
  },
  isRunning: false,
  mins: 0,
  secs: 0,
  millisecs: 0,
  laps: [],
  // DO NOT EDIT ABOVE THIS LINE
  advanceTenMillisecs: function(){
    this.millisecs += 10;
    if (this.millisecs >= 1000) {
      this.millisecs -= 1000;
      this.secs++;
    }
    if (this.secs >= 60) {
      this.secs -= 60;
      this.mins++;
    }
  },
  reset: function(){
    this.mins = 0;
    this.secs = 0;
    this.millisecs = 0;
    this.laps = [];
  },
  start: function(){
    this.isRunning = true;
    this.tickClock();
  },
  stop: function(){
    this.isRunning = false;    
  },
  lap: function(){
    this.laps.push({
      mins: this.mins,
      secs: this.secs,
      millisecs: this.millisecs
    });
  }
};

/// User Interface ///
const ViewEngine = {
  updateTimeDisplay: function(mins, secs, millisecs){
    $("#mins").html(ViewHelpers.zero(mins));
    $("#secs").html(ViewHelpers.zero(secs));
    $("#millisecs").html(ViewHelpers.zero(ViewHelpers.ms(millisecs)));
  },
  updateLapListDisplay: function(lapsList){
    let outputHTML = "";    
    for (let i = 0; i < lapsList.length; i++) {
      outputHTML += "<li>";
      outputHTML += ViewHelpers.zero(lapsList[i].mins);
      outputHTML += " : ";
      outputHTML += ViewHelpers.zero(lapsList[i].secs);
      outputHTML += " : ";      
      outputHTML += ViewHelpers.zero(ViewHelpers.ms(lapsList[i].millisecs));
      outputHTML += "</li>";
      console.log(i);
    }
    $("#lap-list").html(outputHTML);
  },
};

const ViewHelpers = {
  zero: function(number){  // Fill zero
    let output = number;
    if(number < 10){
      output = "0" + output;
    }
    return output;
  },
  ms: function(number){ // Convert millisecs for display
    let output = number/10;
    return output;
  }
};

/// Top-Level Applicatiosn Code ///
const AppController = {
  handleClockTick: function(){
    if(Stopwatch.isRunning){
      ViewEngine.updateTimeDisplay(Stopwatch.mins,Stopwatch.secs,Stopwatch.millisecs);            
    }
  },
  handleClickStart: function() {
    if(!Stopwatch.isRunning){
      Stopwatch.start();
      ViewEngine.updateTimeDisplay(0,0,0);      
//      $("#start").fadeOut();
    }
  },
  handleClickStopReset: function(){
    if(Stopwatch.isRunning){
      Stopwatch.stop();
    } else if (!Stopwatch.isRunning) {
      Stopwatch.stop();
      ViewEngine.updateTimeDisplay(0,0,0);      
      ViewEngine.updateLapListDisplay(Stopwatch.laps);
    }
    Stopwatch.reset();
    
  },
  handleClickLap: function(){
    if(Stopwatch.isRunning){
      Stopwatch.lap();
      ViewEngine.updateLapListDisplay(Stopwatch.laps);      
    }
  }
};

const notifyMe = function() {
  alert("hi")
}

$(function(){ // Main, waits for dom to load
  $('#start').click(AppController.handleClickStart);
  $('#lap').click(AppController.handleClickLap);
  $('#stop').click(AppController.handleClickStopReset);
  $('body').append("<br><br>Made with <a href='http://api.jquery.com/'>jQuery</a>");

  //    alert("Everything is ready, let's do this");
  });