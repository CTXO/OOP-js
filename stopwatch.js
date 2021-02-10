// stopwatch.js - Implements a simple console stopwacth using OOP

function StopWatch() {
    let duration = 0;

    let startTime
    let endTime

    let running = false

    let start = function() {
        if (running) {
            throw new Error("Stopwatch has already started.")
        }
        let d = new Date();
        startTime = d.getTime()
        running = true;
    }
    
    let stop = function() {
        if (!running){
            throw new Error("Stopwatch is not started.")
        }
        let d = new Date();
        endTime = d.getTime()
        running = false
        duration += (endTime - startTime) / 1000
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

