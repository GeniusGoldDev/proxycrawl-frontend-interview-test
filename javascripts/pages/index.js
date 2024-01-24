// Example...
// Avoid using jquery if possible.
$(document).ready(() => {
  const token = document.querySelector("input[name='token']");
  const url = document.querySelector("input[name='url']");
  const form = document.getElementById("getProduct");
  const error = document.getElementById("error");

  document.querySelector("input[type='submit']").addEventListener("click", evt => {
    evt.preventDefault();
    evt.target.disabled = true;

    let errors = document.createElement("ul");
    errors.setAttribute("class", "error");
    if(!tokenValidator(token.value)) {
      const elem = document.createElement("li");
      elem.innerText = "Invalid token!";
      errors.appendChild(elem);
    }
    if(!urlValidator(url.value)) {
      const elem = document.createElement("li");
      elem.innerText = "Invalid url!";
      errors.appendChild(elem);
    }

    if(errors.children.length > 0) {
      error.innerHTML = "";
      error.append(errors);
      evt.target.disabled = false;
    } else {
      error.innerHTML = "";
      form.submit();
    }
  })
});

function tokenValidator(token) {
  return Boolean(token && token !== "");
}

function urlValidator(url) {
  const pattern = /^https:\/\/www.amazon.com\//g;

  return pattern.test(url);
}