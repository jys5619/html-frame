function includeHTML(callback) {
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
            elmnt.innerHTML = this.responseText;
          }
          if (this.status == 404) {
            elmnt.innerHTML = "Page not found.";
          }
          elmnt.removeAttribute("include-html");
          includeHTML(callback);
        }
      };
      xhr.open("GET", file, true);
      xhr.send();
      return;
    }
  }
  setTimeout(function () {
    includeHTML(callback);
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
        }
        if (this.status == 404) {
          pageNotFound(el);
          // el.innerHTML = "Page not found.";
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
