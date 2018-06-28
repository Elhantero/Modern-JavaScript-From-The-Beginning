/*
document.querySelector(".clear-tasks").addEventListener("click", function(e) {
  console.log("hell world");
  e.preventDefault();
});
*/

document.querySelector(".clear-tasks").addEventListener("click", onClick);

function onClick(ourEvent) {
  //console.log("aaaaa");

  let val;

  val = ourEvent;

  // Event target element
  val = ourEvent.target;
  val = ourEvent.target.id;
  val = ourEvent.target.className;
  val = ourEvent.target.classList;

  // Event type
  val = ourEvent.type;

  // Timestamp
  val = ourEvent.timeStamp;

  // Coords event relative to the window
  val = ourEvent.clientY;
  val = ourEvent.clientX;

  // Coords event relative to the element
  val = ourEvent.offsetY;
  val = ourEvent.offsetX;

  console.log(val);
}
