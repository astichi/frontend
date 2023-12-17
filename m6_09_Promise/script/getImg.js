const photos = [
  'https://loremflickr.com/400/400?1',
  'https://loremflickr.com/400/400?2',
  'https://loremflickr.com/400/400?3',
  'https://loremflickr.com/400/400?4',
  'https://loremflickr.com/400/400?5'];

const img1 = new Image();
img1.width = 300;
img1.src = photos[0];

// callback hell
img1.addEventListener('load', () => {
  document.body.append(img1);

  const img2 = new Image();
  img2.width = 300;
  img2.src = photos[1];

  img2.addEventListener('load', () => {
    document.body.append(img2);

    const img3 = new Image();
    img3.width = 300;
    img3.src = photos[2];

    img3.addEventListener('load', () => {
      document.body.append(img3);
    });
  });
});
