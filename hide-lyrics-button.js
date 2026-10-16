(function hideLyricsButton() {
    const hideButton = () => {
        const button = document.querySelector('button[data-testid="lyrics-button"]');
        if (!button) return false;
        button.style.setProperty("display", "none", "important");
        return true;
    };

    if (!hideButton()) {
        const timer = setInterval(() => {
            if (hideButton()) clearInterval(timer);
        }, 250);
        setTimeout(() => clearInterval(timer), 30000);
    }
})();
