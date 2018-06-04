const name = "john";
const age = 30;
const job = "web dev";
const city = "kiev";
let html;

// Without tamplate strings (es5)
html =
  "<ul><li>Name: " +
  name +
  "</li><li>Age: " +
  age +
  "</li/><li>Job: " +
  job +
  "</li/><li>City: " +
  city +
  "</li><ul>";

function hello(str) {
  return str;
}

// With template strings (es6)
html = `<ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
        <li>${2 + 2}</li>
        <li>${hello("heloooo")}</li>
        <li>${age > 30 ? "Over 30" : "To young"}</li>
       </ul>`;

document.body.innerHTML = html;
