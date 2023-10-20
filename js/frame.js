function includeHTML() {
  let z, i, elmnt, file, xhr;
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    file = elmnt.getAttribute("include-html");
    if (file) {
      xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.outerHTML = this.responseText;
          }
          if (this.status == 404) {
            elmnt.outerHTML = "Page not found.";
          }
          elmnt.removeAttribute("include-html");
          includeHTML();
        }
      };
      xhr.open("GET", file, true);
      xhr.send();
      return;
    }
  }
  setTimeout(function () {
    includeHTML();
  }, 0);
}

function route(file, id) {
  history.pushState(null, null, file);
  let routeId = id || "APP";
  const el = document.getElementById(routeId);
  if (file) {
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (this.readyState == 4) {
        if (this.status == 200) {
          el.innerHTML = this.responseText;
        } else if (this.status == 404) {
          pageNotFound(el);
        }
      }
    };
    xhr.open("GET", file, true);
    xhr.send();
  }
}

function pageNotFound(el) {
  xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
      if (this.status == 200) {
        el.innerHTML = this.responseText;
      }
      if (this.status == 404) {
        el.innerHTML = "Page not found.";
      }
    }
  };
  xhr.open("GET", "/page-not-found.html", true);
  xhr.send();
}
