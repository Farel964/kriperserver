document.addEventListener('DOMContentLoaded', () => {
    const statusElement = document.getElementById('server-status');

    // Konfigurasi server Minecraft
    const serverAddress = 'your.server.address'; // Ganti dengan alamat server Minecraft Anda
    const serverPort = 25565; // Ganti dengan port server Minecraft Anda jika berbeda

    function checkServerStatus() {
        fetch(`https://api.mcsrvstat.us/2/${serverAddress}:${serverPort}`)
            .then(response => response.json())
            .then(data => {
                if (data.online) {
                    statusElement.textContent = 'Server Online';
                    statusElement.style.color = 'green';
                } else {
                    statusElement.textContent = 'Server Offline';
                    statusElement.style.color = 'red';
                }
            })
            .catch(error => {
                console.error('Error fetching server status:', error);
                statusElement.textContent = 'Error checking status';
                statusElement.style.color = 'orange';
            });
    }

    // Periksa status server setiap 60 detik
    checkServerStatus();
    setInterval(checkServerStatus, 60000);
});
