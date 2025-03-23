const backendUrl = "http://your-backend-url.com/api/tiktok";  // Replace with your backend URL

async function fetchData() {
    try {
        const response = await fetch(backendUrl);
        const data = await response.json();
        
        const list = document.getElementById("tiktok-data");
        list.innerHTML = "";  // Clear old data
        
        data.forEach(video => {
            const listItem = document.createElement("li");
            listItem.textContent = `${video.title} - ${video.views}`;
            list.appendChild(listItem);
        });
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Fetch data every 30 seconds
fetchData();
setInterval(fetchData, 30000);
