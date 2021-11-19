new TypeIt(".text", {
    speed: 200,
    loop: true,
    waitUntilVisible: true
})
.type("WB", { delay: 300 })
.move(0)
.delete(1)
.type("EB")
.move(null, { to: "END" })
.type(" DEV TLS")
.move(-2)
.type("OO")
.pause(300)

.go();

function myFunction(x) {
  if (x.matches) {
    VanillaTilt.init(document.querySelectorAll(".card"), {
      max: 20,
      speed: 400,
      glare: 1
    });
  }
  else {

  }
}
var x = window.matchMedia("(min-width: 1050px)");
myFunction(x);
x.addListener(myFunction);