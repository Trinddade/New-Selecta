document.addEventListener('DOMContentLoaded', () => {
    const synth = window.speechSynthesis;
    let utterance = null;

    document.querySelectorAll('.read-text').forEach(button => {
        button.addEventListener('click', (e) => {
            const text = e.target.previousElementSibling.textContent;
            if (synth.speaking) {
                synth.cancel();
            }
            utterance = new SpeechSynthesisUtterance(text);
            synth.speak(utterance);
        });
    });

    document.getElementById('playAudio').addEventListener('click', () => {
        if (utterance && synth.paused) {
            synth.resume();
        } else if (utterance && !synth.speaking) {
            synth.speak(utterance);
        }
    });

    document.getElementById('pauseAudio').addEventListener('click', () => {
        if (synth.speaking) {
            synth.pause();
        }
    });

    document.getElementById('stopAudio').addEventListener('click', () => {
        if (synth.speaking) {
            synth.cancel();
        }
    });
});