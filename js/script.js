function openCity(evt, cityName) {
  let tabcontent, tablinks;
  tabcontent = document.querySelectorAll(".tabcontent");

  let arr = Array.from(tabcontent);

  arr.map((item) => {
    item.style.display = "none";
  });

  tablinks = document.getElementsByClassName("tablinks");

  arr2 = Array.from(tablinks);
  arr2.map((item) => {
    item.className = item.className.replace(" active", "");
  });

  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
