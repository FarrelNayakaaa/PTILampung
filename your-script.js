document.addEventListener("DOMContentLoaded", function() {
    const accessKey = 'qNU2MamQ8w'; 
    const secretKey = '3Rn8vgbQcvLbPgJAUV2f'; 
    const location = 'indonesia/tanjungkarang'; 

    async function fetchCurrentTime() {
        const url = `https://api.timeanddate.com/v1/time?location=${location}&key=${accessKey}&secret=${secretKey}`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            console.log(data);
            return data.current_time;
        } catch (error) {
            console.error('Error fetching time:', error);
            return null;
        }
    }

    function getDeviceCurrentTime() {
        const now = new Date();
        return now.toLocaleTimeString();
    }

    async function updateCurrentTime() {
        let currentTime = await fetchCurrentTime();
        if (!currentTime) {
            currentTime = getDeviceCurrentTime();
        }
        document.getElementById('current-time').textContent = currentTime;
    }

    setInterval(() => {
        const now = getDeviceCurrentTime();
        document.getElementById('current-time').textContent = now;
    }, 1000);

    updateCurrentTime();
});
