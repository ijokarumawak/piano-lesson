const svgRoot = document.querySelector('#svg-root');
const musicSheet = document.querySelector('#music-sheet');

var moveSheet = () => {
  musicSheet.animate([
    {transform: 'translate(0px, 0px)'},
    {transform: 'translate(0px, 960px)'}
  ], {
    duration: 12000,
    delay: 10,
    iterations: 1,
    fill: 'forwards'
  });
}
