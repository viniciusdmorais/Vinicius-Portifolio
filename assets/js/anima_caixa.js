const imgCaixa = document.getElementById('img-caixa')

const imgHtml = document.getElementById('img-html')
const imgCss = document.getElementById('img-css')
const imgJs = document.getElementById('img-js')

const imgHtmlEstilo = window.getComputedStyle(imgHtml);
const imgHtmlmarginTop = imgHtmlEstilo.marginTop;
const imgHtmlmarginLeft = imgHtmlEstilo.marginLeft;

const imgCssEstilo = window.getComputedStyle(imgCss);
const imgCssmarginTop = imgCssEstilo.marginTop;
const imgCssmarginLeft = imgCssEstilo.marginLeft;

const imgJsEstilo = window.getComputedStyle(imgJs);
const imgJsmarginTop = imgJsEstilo.marginTop;
const imgJsmarginLeft = imgJsEstilo.marginLeft;


function animateElement(element, finalMarginTop, finalMarginLeft, duration, intermediateMarginTop, intermediateMarginLeft) {
    const startMarginTop = parseInt(window.getComputedStyle(element).marginTop);
    const startMarginLeft = parseInt(window.getComputedStyle(element).marginLeft);

    const marginStepTop1 = (intermediateMarginTop - startMarginTop) / (duration / 30);
    const marginStepLeft1 = (intermediateMarginLeft - startMarginLeft) / (duration / 30);

    const marginStepTop2 = (finalMarginTop - intermediateMarginTop) / (duration / 30);
    const marginStepLeft2 = (finalMarginLeft - intermediateMarginLeft) / (duration / 30);

    let currentMarginTop = startMarginTop;
    let currentMarginLeft = startMarginLeft;

    const interval = setInterval(() => {
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
            clearInterval(interval);
            element.style.marginTop = `${finalMarginTop}px`;
            element.style.marginLeft = `${finalMarginLeft}px`;
        }
    }, 10);
}



imgCaixa.addEventListener('mouseover', function () {
    // chama a primeira função existente
    imgHtml.style.display = 'block';
    imgCss.style.display = 'block';
    imgJs.style.display = 'block';
    /*
    animateElement(element, finalMarginTop, finalMarginLeft, duration, intermediateMarginTop, intermediateMarginLeft)
    Inicial
    imgHtml
    margin-top: 100px;
    margin-left: 100px;
    */ 
    animateElement(imgHtml, 50, 70, 7000, 80, 90);
    // chama a segunda função existente
    /*animateElement(imgCss, 0, 190, 3000);*/
    /*
    Inicial
    imgCss
    margin-top: 100px;
    margin-left: 175px;
    */ 
    animateElement(imgCss, 0, 175, 7000, 50, 155);
    // chama a terceira função existente
    /*animateElement(imgJs, 30, 350, 3000);*/   
    /*
    Inicial
    imgJs
    margin-top: 100px;
    margin-left: 250px;
    */ 
    animateElement(imgJs, 5, 290, 7000, 50, 240 );
});




