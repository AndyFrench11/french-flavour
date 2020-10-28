import * as React from 'react';
import './WaveformPlayer.css';

function WaveformPlayer() {
    // Setup drawing line context
    (function () {
        var lastTime = 0;
        var vendors = ['ms', 'moz', 'webkit', 'o'];
        for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
            window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
            window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
        }

        if (!window.requestAnimationFrame) window.requestAnimationFrame = function (callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function () {
                callback(currTime + timeToCall);
            },
                timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

        if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function (id) {
            clearTimeout(id);
        };
    }());

    // Set up audio context
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioContext = new AudioContext();

    /**
     * Retrieves audio from an external source, the initializes the drawing function
     * @param {String} url the url of the audio we'd like to fetch
     */
    const drawAudio = url => {
        fetch(url)
            .then(response => response.arrayBuffer())
            .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
            .then(audioBuffer => draw(normalizeData(filterData(audioBuffer))))
            .then(audioVertices => animateAudio(audioVertices));
    };

    /**
     * Filters the AudioBuffer retrieved from an external source
     * @param {AudioBuffer} audioBuffer the AudioBuffer from drawAudio()
     * @returns {Array} an array of floating point numbers
     */
    const filterData = audioBuffer => {
        const rawData = audioBuffer.getChannelData(0); // We only need to work with one channel of data
        const samples = 20; // Number of samples we want to have in our final data set
        const blockSize = Math.floor(rawData.length / samples); // the number of samples in each subdivision
        const filteredData = [];
        for (let i = 0; i < samples; i++) {
            let blockStart = blockSize * i; // the location of the first sample in the block
            let sum = 0;
            for (let j = 0; j < blockSize; j++) {
                sum = sum + Math.abs(rawData[blockStart + j]); // find the sum of all the samples in the block
            }
            filteredData.push(sum / blockSize); // divide the sum by the block size to get the average
        }
        return filteredData;
    };

    /**
     * Normalizes the audio data to make a cleaner illustration 
     * @param {Array} filteredData the data from filterData()
     * @returns {Array} an normalized array of floating point numbers
     */
    const normalizeData = filteredData => {
        const multiplier = Math.pow(Math.max(...filteredData), -1);
        return filteredData.map(n => n * multiplier);
    }

    /**
     * Draws the audio file into a canvas element.
     * @param {Array} normalizedData The filtered array returned from filterData()
     * @returns {Array} a normalized array of data
     */
    const draw = normalizedData => {
        // set up the canvas
        const canvas = document.querySelector("canvas");
        const dpr = window.devicePixelRatio || 1;
        const padding = 20;
        canvas.width = canvas.offsetWidth * dpr;
        canvas.height = (canvas.offsetHeight + padding * 2) * dpr;
        const ctx = canvas.getContext("2d");
        ctx.scale(dpr, dpr);
        ctx.translate(0, canvas.offsetHeight / 2 + padding); // set Y = 0 to be in the middle of the canvas

        // draw the line segments
        var vertices = [];
        const width = canvas.offsetWidth / normalizedData.length;
        for (let i = 0; i < normalizedData.length; i++) {
            const x = width * i;
            let height = normalizedData[i] * canvas.offsetHeight - padding;
            if (height < 0) {
                height = 0;
            } else if (height > canvas.offsetHeight / 2) {
                height = height > canvas.offsetHeight / 2;
            }
            drawLineSegment(ctx, x, height, width, (i + 1) % 2, vertices);
        }
        return vertices;
    };

    /**
     * A utility function for drawing our line segments
     * @param {AudioContext} ctx the audio context 
     * @param {number} x  the x coordinate of the beginning of the line segment
     * @param {number} height the desired height of the line segment
     * @param {number} width the desired width of the line segment
     * @param {boolean} isEven whether or not the segmented is even-numbered
     */
    const drawLineSegment = (ctx, x, height, width, isEven, vertices) => {
        ctx.lineWidth = 1; // how thick the line is
        ctx.strokeStyle = "#fff"; // what color our line is
        ctx.beginPath();
        height = isEven ? height : -height;
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.arc(x + width / 2, height, width / 2, Math.PI, 0, isEven);
        ctx.lineTo(x + width, 0);
        ctx.stroke();
        vertices.push({
            x: x,
            y: 0
        });
        vertices.push({
            x: x,
            y: height
        });
        vertices.push({
            x: x + width,
            y: height
        });
        vertices.push({
            x: x + width,
            y: 0
        });
    };

    drawAudio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/shoptalk-clip.mp3');

    function animateAudio(vertices) {
        // variable to hold how many frames have elapsed in the animation
        var t = 1;

        // set some style
        const canvas = document.querySelector("canvas");
        const ctx = canvas.getContext("2d");
        ctx.lineWidth = 5;
        ctx.strokeStyle = "red";
        // calculate incremental points along the path
        var points = calcWaypoints(vertices);
        // extend the line from start to finish with animation
        animate(points);


        // calc waypoints traveling along vertices
        function calcWaypoints(vertices) {
            var waypoints = [];
            for (var i = 1; i < vertices.length; i++) {
                var pt0 = vertices[i - 1];
                var pt1 = vertices[i];
                var dx = pt1.x - pt0.x;
                var dy = pt1.y - pt0.y;
                for (var j = 0; j < 100; j++) {
                    var x = pt0.x + dx * j / 100;
                    var y = pt0.y + dy * j / 100;
                    waypoints.push({
                        x: x,
                        y: y
                    });
                }
            }
            return (waypoints);
        }


        function animate() {
            if (t < points.length - 1) {
                requestAnimationFrame(animate);
            }
            // draw a line segment from the last waypoint
            // to the current waypoint
            ctx.beginPath();
            ctx.moveTo(points[t - 1].x, points[t - 1].y);
            ctx.lineTo(points[t].x, points[t].y);
            ctx.stroke();
            // increment "t" to get the next waypoint
            t++;
        }
    }

    return (
        <canvas></canvas>
    )

}

export default WaveformPlayer;