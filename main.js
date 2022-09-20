const count = document.getElementById("count"),
  unreadArr = document.querySelectorAll(".notify"),
  trigger = document.getElementById("trigger");

let needed = unreadArr;

function toggle() {
  if (count.innerHTML === "3") {
    count.innerHTML = "0";
    unreadArr.forEach((unread) => {
      unread.classList.remove("new");
    });
  } else {
    count.innerHTML = "3";
    unreadArr.forEach((unread) => {
      unread.classList.add("new");
    });
  }
}

trigger.addEventListener("click", toggle);
