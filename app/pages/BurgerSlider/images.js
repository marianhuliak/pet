const images = require.context('../../images/slideshow', false, /\.(jpg|jpeg|png|gif|svg)$/);

const imagesList = images.keys().map((item) => ({
  src: images(item).default.src,
  alt: item.replace('./', '').replace(/\.(jpg|jpeg|png|gif|svg)$/, ''),
}));

export default imagesList;