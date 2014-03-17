// Wait till the browser is ready to render the game (avoids glitches)
/*SIKELE
 * requestAnimationFrame是浏览器用于定时循环操作的一个接口，类似于setTimeout，主要用途是按帧对网页进行重绘。
 * requestAnimationFrame使用一个回调函数作为参数。这个回调函数会在浏览器重绘之前调用。
 * 但这里只调用了一次
 */
window.requestAnimationFrame(function () {
  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalScoreManager);
});
