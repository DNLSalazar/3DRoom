var container = document.getElementById("container");

window.addEventListener("load", function () {
  container.style.setProperty("--Xdeg", 0 + "deg");
  container.style.setProperty("--Ydeg", 0 + "deg");
  window.addEventListener("keydown", move);
  // let value = container.style.getPropertyValue("--Xdeg").slice(0,
  //   container.style.getPropertyValue("--Xdeg").length - 3);
  // console.log(++value);
  // console.log(container.style.getPropertyValue("--Ydeg"));
})

var move = (e) => {
  // Up 38
  // Down 40
  // Right 39
  // Left 37
  const key = e.keyCode? e.keyCode : e.target.getAttribute("dir");
  let value, num;
  switch (key) {
    case 38:
      value = container.style.getPropertyValue("--Xdeg");
      num = parseInt(value.slice(0, value.length - 3));
      num += 5;
      container.style.setProperty("--Xdeg", num + "deg");
    break;

    case 40:
      value = container.style.getPropertyValue("--Xdeg");
      num = parseInt(value.slice(0, value.length - 3));
      num -= 5;
      container.style.setProperty("--Xdeg", num + "deg");
    break;

    case 39:
      value = container.style.getPropertyValue("--Ydeg");
      num = parseInt(value.slice(0, value.length - 3));
      num += 5;
      container.style.setProperty("--Ydeg", num + "deg");
    break;

    case 37:
      value = container.style.getPropertyValue("--Ydeg");
      num = parseInt(value.slice(0, value.length - 3));
      num -= 5;
      container.style.setProperty("--Ydeg", num + "deg");
    break;
  }
  console.log(value);
  console.log(num)
}