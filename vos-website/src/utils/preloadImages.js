const IMAGES_TO_PRELOAD = ['/images/vos.jpg', '/images/jeanette.jpg', '/images/bag.jpg'];

export function preloadImages() {
  IMAGES_TO_PRELOAD.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
}
