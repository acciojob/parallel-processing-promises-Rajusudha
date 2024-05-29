//your JS code here. If required.
// const output = document.getElementById("output");
// const btn = document.getElementById("download-images-button");

// const images = [
//   { url: "https://picsum.photos/id/237/200/300" },
//   { url: "https://picsum.photos/id/238/200/300" },
//   { url: "https://picsum.photos/id/239/200/300" },
// ];



const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

btn.addEventListener('click', downloadImages);

function downloadImage(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error(`Failed to load image's URL: ${url}`));
        img.src = url;
    });
}

function downloadImages() {
    const promises = images.map(image => downloadImage(image.url));
    
    Promise.all(promises)
        .then(images => {
            output.innerHTML = ''; // Clear previous images if any
            images.forEach(img => output.appendChild(img));
        })
        .catch(error => {
            console.error(error.message);
            alert(error.message);
        });
}

