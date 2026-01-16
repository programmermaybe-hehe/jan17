const scenes = document.querySelectorAll(".scene");
const music = new Audio("audio/blue.mp3");
music.loop = true;

// helper
function showScene(n) {
  scenes.forEach(scene => scene.classList.remove("active"));
  scenes[n].classList.add("active");
}

/* SCENE 0 → SCENE 1 */
const cake = document.getElementById("cake");
cake.addEventListener("Click",() => {
  cake.play();
});
cake.onclick = () => {
  music.play().catch(()=>{});
  showScene(1);
};

/* NO button logic */
const noBtn = document.getElementById("no");
const runner = document.getElementById("runner");

noBtn.onclick = () => {
  runner.style.display = "block";
  runner.classList.add("run-in");

  setTimeout(() => {
    noBtn.style.display = "none";
  }, 600);

  setTimeout(() => {
    runner.classList.add("run-away");
  }, 900);
};

/* YES button */
document.getElementById("yes").onclick = () => {
  showScene(2);
};

/* Gift → Letter */
const gift = document.getElementById("gift");
gift.onclick = () => {
  showScene(3);
};

/* Letter → Memories */
const letter = document.getElementById("letter");
letter.onclick = () => {
  showScene(4);
};

/* Memories → Bouquet + Hug */
document.getElementById("nextToHug").onclick = () => {
  showScene(5);
};

/* Final → Sae video */
document.getElementById("finalNext").onclick = () => {
  music.pause();
  music.currentTime = 0;
  showScene(6);

  const sae = document.getElementById("sae");
  sae.play().catch(()=>{});
};
