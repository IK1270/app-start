!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>

        function initPlayer() {
            const video = document.getElementById("videoPlayer");
            const playPauseButton = document.getElementById("playPauseButton");
            const stopButton = document.getElementById("stopButton");
            const volumeRange = document.getElementById("volumeRange");

            const initDefaultParams = () => {
                video.volume = localStorage.getItem('volume');
                volumeRange.value = localStorage.getItem('volume');
            };

            playPauseButton.addEventListener('click', function() {
                if ( video.paused ) {
                     video.currentTime = localStorage.getItem('time');
                     video.play();
                } else {
                    localStorage.setItem('time', video.currentTime);
                    video.pause();
                }
            });

            stopButton.addEventListener('click', function() {
                video.pause();
                video.currentTime = 0;
            });

            volumeRange.addEventListener('input', function(){
                video.volume = volumeRange.value;
                localStorage.setItem('volume', volumeRange.value);
            });

            initDefaultParams();

        }

        document.addEventListener('DOMContentLoaded', initPlayer);

    </script>
</head>
<body>

    <video width="500" height="400" id="videoPlayer1">
        <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
    </video>

    <video width="500" height="400" id="videoPlayer2">
        <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
    </video>

    <video width="500" height="400" id="videoPlayer3">
        <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
    </video>

    <video width="500" height="400" id="videoPlayer4s">
        <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
    </video>

    <div>
        <button id="playPauseButton">Play / Pause</button>
        <button id="stopButton">Stop</button>
        <input type="range" id="volumeRange" min="0" max="1" step="0.1" value="1" />
    </div>
    
</body>
</html>