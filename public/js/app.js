console.log('app.js');

const images = document.querySelectorAll('img');

function replaceEmptySrc() {
   for (let i = 0; i < images.length; i += 1) {
      if (images[i].getAttribute('src') === '') {
         images[i].src = 'images/coming-soon.jpg';
      }
   }
}

replaceEmptySrc();

// Image not loaded... error
images.forEach(function (img) {
   img.onerror = function () {
      this.src = 'images/coming-soon.jpg';
   };
});

// ES6 solution not IE supported because of forEach

// images.forEach(replaceEmptySrc);
//
// function replaceEmptySrc(image) {
//    if (image.getAttribute('src') === '') {
//       image.src = 'images/coming-soon.jpg';
//    }
// }

// Shorter Solution

// images.forEach(() => {
//     let src = image.getAttribute('src');
//    if (src === '') image.src = 'images/coming-soon.jpg';
// });
