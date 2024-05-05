export const initReel = () => {
  const reel = document.querySelector('.reel');
  const nextButton = document.getElementById('next-btn');
  const prevButton = document.getElementById('prev-btn');
  let reelIndex = 0;

  const showImage = (index) => {
    for (let img of reel.children) {
      img.style.display = 'none';
    }
    reel.children[index].style.display = 'block';
  };

  nextButton.addEventListener('click', () => {
    reelIndex = reelIndex === reel.children.length - 1 ? 0 : reelIndex + 1;
    showImage(reelIndex);
  });

  prevButton.addEventListener('click', () => {
    reelIndex = reelIndex === 0 ? reel.children.length - 1 : reelIndex - 1;
    showImage(reelIndex);
  });
};
