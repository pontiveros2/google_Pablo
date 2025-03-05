function searchGoogle() {
    const query = document.querySelector('.search-box').value;
    if (query) {
        window.location.href = `https://google.com/search?q=${encodeURIComponent(query)}`;
    }
}

function startVoiceRecognition() {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'es-ES';
    recognition.start();

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        document.querySelector('.search-box').value = transcript;
    };
}

document.addEventListener("DOMContentLoaded", () => {
    const searchBox = document.querySelector('.search-box');
    searchBox.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            searchGoogle();
        }
    });
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener("click", searchGoogle);
    });
    document.querySelector('.microphone').addEventListener("click", startVoiceRecognition);
});