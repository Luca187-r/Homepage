const coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  let c = coll[i];
  c.classList.toggle("active");
  c.querySelector('.title').addEventListener("click", function() {
    c.classList.toggle("active");
    var child = c.querySelector('.content-wrapper');
    if (child.style.maxHeight){
        child.style.maxHeight = null;
    } else {
        child.style.maxHeight = child.scrollHeight + "px";
    } 
  });
}