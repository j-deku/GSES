// utils/loadImages.js

const loadAssetsImages = async () => {
  const imageModules = import.meta.glob("/src/assets/**/*.{png,jpg,jpeg}");
  const imagePromises = Object.keys(imageModules).map(
    (path) =>
      new Promise((resolve, reject) => {
        const img = new Image();
        img.src = path;
        img.onload = () => {
          console.log(`Asset image loaded: ${path}`);
          resolve();
        };
        img.onerror = (error) => {
          console.error(`Error loading asset image: ${path}`, error);
          resolve(); // resolve on error to prevent blocking
        };
      }),
  );
  await Promise.all(imagePromises);
};

const loadPublicImages = async (paths) => {
  const imagePromises = paths.map(
    (path) =>
      new Promise((resolve, reject) => {
        const img = new Image();
        img.src = path;
        img.onload = () => {
          console.log(`Public image loaded: ${path}`);
          resolve();
        };
        img.onerror = (error) => {
          console.error(`Error loading public image: ${path}`, error);
          resolve(); // resolve on error to prevent blocking
        };
      }),
  );
  await Promise.all(imagePromises);
};

export const loadAllImages = async () => {
  await Promise.all([
    loadAssetsImages(),
    loadPublicImages([
      "/flower_logo2.png",
      "/6,7&8pus.png",
      "/apple-touch-icon.png",
      "/Balloon_floral.jpeg",
      "/balloondecor.jpeg",
      "/BalloonDesign1.png",
      "/big_720.png",
      "/biggerDev.png",
      "/flower_32.png",
      "/flower_144.png",
      "/flower_logo3.png",
      "/flower_logo4.png",
      "/gal9.png",
      "/galN3.png",
      "/galS8.png",
      "/galTabS4.png",
      "/HDX.png",
      "/heart.png",
      "/i12.png",
      "/i14.png",
      "/io.png",
      "/iX.png",
      "/iXR.png",
      "/logi.png",
      "/motGPo.png",
      "/myAnd.png",
      "/nex4.png",
      "/pad.png",
      "/pad2.png",
      "/PXL.png",
      "/screen_360.png",
      "/to_do_icon.png",
      "/to_do_icon2.png",
    ]),
  ]);
  console.log("All images loaded");
};
``;
