const span = document.querySelector(".write");
let words = ["developer.", "designer.", "dreamer.", "problem solver."];

const type = () => {
  let wpointer = 0,
    lpointer = 0;

  setInterval(() => {
    if (wpointer > 3) (wpointer = 0), (lpointer = 0);
    if (lpointer > words[wpointer].length - 1) {
      span.innerText = "";
      wpointer++;
      lpointer = 0;
    } else {
      span.innerText += words[wpointer][lpointer];
      lpointer++;
    }
  }, 300);
};

const cursor_dot = document.querySelector(".cursor-dot");

const cursor_outline = document.querySelector(".cursor-outline");

window.addEventListener("mousemove", (e) => {
  const posx = e.clientX + window.scrollX;
  const posy = e.clientY + window.scrollY;

  cursor_outline.animate(
    {
      left: `${posx}px`,
      top: `${posy}px`,
    },
    { duration: 200, fill: "forwards" }
  );
});

window.onload = () => {
  document.querySelector(".center-texts").style.transform = "translateY(0px)";
  document.querySelector(".center-texts").style.opacity = "1";
};

type();

document.querySelector(".github").addEventListener("click", (HKEY) => {
  HKEY.preventDefault();
  window.open("https://github.com/demss233");
});

document.querySelector(".discord").addEventListener("click", (HKEY) => {
  HKEY.preventDefault();
  window.open("https://discord.com/users/1049262314102206494");
});
