// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

"use strict";

// Data Management and Business Logic //
const CounterCollection = {
  lastCountId: 0,
  counters: [], // e.g. {countId: 3, count: 20}
  createCounter: function(){
    this.lastCountId++;
    this.counters.push({
      countId: this.lastCountId,
      count: 0
    });
    return this.lastCountId;
  },
  getCounterValue: function(countId){
    console.log(`read counter #${countId}`);
    let counter = this.counters.find(function(counter){
      return counter.countId === countId;
    });
    if (counter) { return counter.count; }
  },
  incrementCounter: function(countId){
    console.log(`increment counter #${countId}`);
    let counter = this.counters.find(function(counter){
      return counter.countId === countId;
    });
    if (counter) {
      counter.count += 1;
      return counter.count;
    }
  },
  destroyCounter: function(countId){
    console.log(`destroy counter #${countId}`);
    let counter = this.counters.find(function(counter){
      return counter.countId === countId;
    });
    if (counter) { counter.destroy(); }
    this.counters = this.counters.filter(function(counter){ //
      return counter.countId !== countId
    });
  }
};

// UI //
const Presenter = {
  insertCounterComponent: function(newCountId){
    let newCounter = document.createElement('div');
    newCounter.innerHTML  = "<h3>Count: <span>0</span></h3>";
    newCounter.innerHTML += "<button class='increment'> +1 </button>";
    newCounter.className += ' counter';
    newCounter.dataset.countId = newCountId;
    newCounter.getElementsByClassName('increment')[0].onclick= AppController.onClickIncrement;
    document.getElementById('counter-list').appendChild(newCounter);
  },
  refreshCounterComponent: function(countId){
    let val = CounterCollection.getCounterValue(countId);
    let path = "[data-count-id='"+countId+"'] span";
    document.querySelector(path).innerHTML = val;
  }
};

// Top-Level Application Control //
const AppController = {
  onClickNewCounter: function(event){
    CounterCollection.createCounter();
    Presenter.insertCounterComponent(CounterCollection.lastCountId);
  },
  onClickIncrement: function(event){
    let countId = Number(event.target.parentNode.dataset.countId);
    CounterCollection.incrementCounter(countId);
    Presenter.refreshCounterComponent(countId);
  }
};

window.onload = function(){
  document.getElementById('new-counter').onclick = AppController.onClickNewCounter;
};