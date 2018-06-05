// WINDOW MWTHODS / OBJECTS / PROPERTIES

// ALERT
//alert("hello");

// PROMPT
//const input = prompt();
//alert(input);

// COMFIRM
/*
if (confirm("are you sure")) {
  console.log("yes");
} else {
  console.log("no");
}
*/

let val;

// Outter height and width
val = window.outerHeight;
val = window.outerWidth;

// Inner height and width
val = window.innerHeight;
val = window.innerWidth;

// Scroll points
val = window.scrollY;
val = window.scrollX;

// LOCATION OBJECT
val = window.location;
val = window.location.hostname;
val = window.location.search;

// Redirect
//window.location.href = "http://google.com";

// Reload
//window.location.reload();

// History Object
//window.history.go(-2);
//val = window.history.length;

// Navigator Object
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;

console.log(val);
