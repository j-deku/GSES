
const loadAssetsImages = async () => {
    const imageModules = import.meta.glob('/src/assets/**/*.{png,jpg,jpeg,mp3,mp4,svg,webp,gif,ico}');
    const imagePromises = Object.keys(imageModules).map((path) =>
        new Promise((resolve) => {
            const img = new Image();
            img.src = path;
            img.onload = () => {
                console.log(`Asset image loaded`);
                resolve();
            };
            img.onerror = (error) => {
                console.error(`Error loading asset image: ${path}`, error);
                resolve(); // resolve on error to prevent blocking
            };
        })
    );
    await Promise.all(imagePromises);
};

const loadPublicImages = async () => {
    const imageModules = import.meta.glob('/**/*.{png,jpg,jpeg,mp3,mp4,svg,webp,gif,ico}');
    const imagePromises = Object.keys(imageModules).map((path) =>
        new Promise((resolve) => {
            const img = new Image();
            img.src = path;
            img.onload = () => {
                console.log(`Public image loaded`);
                resolve();
            };
            img.onerror = (error) => {
                console.error(`Error loading public image: ${path}`, error);
                resolve(); // resolve on error to prevent blocking
            };
        })
    );
    if (sessionStorage.getItem("publicImagesLoaded")) return; // Skip if already loaded
    await Promise.all(imagePromises);
};

export const loadAllImages = () => {
    loadAssetsImages();
    loadPublicImages();
    console.log("All images loaded");
}