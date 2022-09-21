window.onload = function () {
    const input = document.getElementById('lookup-input');
    const button = document.getElementById('lookup-btn');

    button.addEventListener('click', () => {
        fetch('https://link.samifying.com/api/lookup/' + input.value).then(rsp => {
            if (rsp.ok) return rsp.json();
            throw new Error("Player with name " + input.value + " was not found")
        }).then(data => {
            window.location.href = './data-discord.html?id=' + data.id;
        })
    });
}