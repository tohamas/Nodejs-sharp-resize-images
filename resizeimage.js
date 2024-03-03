const sharp = require("sharp");

async function resizeImage() {
  try {

    //path to image
    await sharp("example_image.png")
    .jpeg({
        quality: 75
      })
      .resize({
        width: 150,
        height: 97
      })
      //path to save new image
      .toFile("example_image_resized.png");
  } catch (error) {
    console.log(error);
  }
} 

resizeImage();