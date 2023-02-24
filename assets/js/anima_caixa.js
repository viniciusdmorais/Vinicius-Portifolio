const imgCaixa = document.getElementById('img-caixa');
const imgHtml = document.getElementById('img-html');
const imgCss = document.getElementById('img-css');
const imgJs = document.getElementById('img-js');

const getComputedStyle = (element) => window.getComputedStyle(element);
const getMarginTop = (element) => parseInt(getComputedStyle(element).marginTop);
const getMarginLeft = (element) => parseInt(getComputedStyle(element).marginLeft);

const ANIMATION_INTERVAL = 10;
const ANIMATION_DURATION = 900;

const animateElement = (element, finalMarginTop, finalMarginLeft, intermediateMarginTop, intermediateMarginLeft) => {
  const startMarginTop = getMarginTop(element);
  const startMarginLeft = getMarginLeft(element);

  const marginStepTop1 = (intermediateMarginTop - startMarginTop) / (ANIMATION_DURATION / ANIMATION_INTERVAL);
  const marginStepLeft1 = (intermediateMarginLeft - startMarginLeft) / (ANIMATION_DURATION / ANIMATION_INTERVAL);

  const marginStepTop2 = (finalMarginTop - intermediateMarginTop) / (ANIMATION_DURATION / ANIMATION_INTERVAL);
  const marginStepLeft2 = (finalMarginLeft - intermediateMarginLeft) / (ANIMATION_DURATION / ANIMATION_INTERVAL);

  let currentMarginTop = startMarginTop;
  let currentMarginLeft = startMarginLeft;

  const animationInterval = setInterval(function animate() {
    if (currentMarginTop < intermediateMarginTop) {
      currentMarginTop += marginStepTop1;
      currentMarginLeft += marginStepLeft1;
    } else {
      currentMarginTop += marginStepTop2;
      currentMarginLeft += marginStepLeft2;
    }

    element.style.marginTop = `${currentMarginTop}px`;
    element.style.marginLeft = `${currentMarginLeft}px`;

    if (Math.abs(currentMarginTop - finalMarginTop) < Math.abs(marginStepTop1) + Math.abs(marginStepTop2)) {
      clearInterval(animationInterval);
      element.style.marginTop = `${finalMarginTop}px`;
      element.style.marginLeft = `${finalMarginLeft}px`;
    }
  }, ANIMATION_INTERVAL);
};

function animateCaixa() {
  imgHtml.style.display = 'block';
  imgCss.style.display = 'block';
  imgJs.style.display = 'block';

  animateElement(imgHtml, 50, 70, 80, 90);
  animateElement(imgCss, 0, 175, 50, 155);
  animateElement(imgJs, 5, 280, 50, 240);
}

imgCaixa.addEventListener('mouseover', animateCaixa);
