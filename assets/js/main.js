window.onload = function () {
    const input = document.getElementById('lookup-input');
    const button = document.getElementById('lookup-btn');

    button.addEventListener('click', () => {
        fetch('https://link.samifying.com/api/lookup/' + input.value)
            .then(rsp => {
                if (rsp.ok) return rsp.json();
                window.location.href = './no-player.html?q=' + input.value;
            })
            .then(data => {
                window.location.href = './data-discord.html?id=' + data.id;
            })
    });
}