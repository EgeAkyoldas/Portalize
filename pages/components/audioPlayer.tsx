import React from "react"
import playButtonImage from "../../public/play-button.png"
import soundWavesImage from "../../public/sound-waves.png"

interface AudioProp {
    src: string,
    quote: string
}

const audioPlayer = (audioProp: AudioProp) => {
    const [errorCount, setErrorCount] = React.useState([])
    function playAudio() {
        var audio = document.getElementById("audio") as HTMLAudioElement
        audio.play();
    }
    return (
        <div className="rounded-full shadow-2xl shadow-black bg-gray-700 h-36 w-96 mx-auto mt-16">
            <p className="text-white text-center text-xl">{audioProp.quote}</p>
            <div className="h-full w-full flex">
                <img src={soundWavesImage.src} className="h-full ml-auto mr-1"/>
                <img src={soundWavesImage.src} className="h-full mr-auto"/>
                <button className="invert h-full ml-auto" onClick={playAudio}>
                        <img src={playButtonImage.src} className="h-full w-full scale-75 "/>
                </button>
            </div>
            <audio className='h-full w-full' id="audio"
                        src={audioProp.src}>
                            Your browser does not support the
                            <code>audio</code> element.
                </audio>
        </div>
    )
}

export default audioPlayer