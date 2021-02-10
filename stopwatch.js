// stopwatch.js - Implements a simple console stopwacth using OOP

function StopWatch() {
    let duration = 0;

    let start_time
    let end_time

    running = false
    
    let start = function() {
        if (running) {
            throw "Stopwatch has already started.";
        }
        let d = new Date();
        start_time = d.getTime()
        running = true;
    }
    
    let stop = function() {
        if (!running){
            throw "Stopwatch is not started"
        }
        let d = new Date();
        end_time = d.getTime()
        running = false
        duration += (end_time - start_time) / 1000
    }

    let reset = function() {
        duration = 0
    }

    Object.defineProperty(this, 'duration', {
        get: function() {
            return duration
        }})
   
    
    Object.defineProperty(this, 'start', {
        get: function() {
            return start
        }})

    Object.defineProperty(this, 'stop', {
        get: function() {
            return stop
        }})

    Object.defineProperty(this, 'reset', {
        get: function() {
            return reset
        }})
}

