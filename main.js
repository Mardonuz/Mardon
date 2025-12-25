views++;
localStorage.setItem("views", views);
document.getElementById("views").innerText = views;
document.getElementById("downloads").innerText = downloads;

const moviesBox = document.getElementById("movies");
const filter = document.getElementById("categoryFilter");

function renderMovies() {
  moviesBox.innerHTML = "";
  let cat = filter.value;

  movies.filter(m => cat === "all" || m.category === cat)
  .forEach((m, i) => {
    moviesBox.innerHTML += `
      <div class="movie">
        <h3>${m.title}</h3>
        <p>${m.category}</p>
        <button onclick="download(${i},'${m.link}')">⬇ Yuklab olish</button>
      </div>
    `;
  });
}

function download(i, link) {
  downloads++;
  localStorage.setItem("downloads", downloads);
  window.open(link);
}

let cats = [...new Set(movies.map(m => m.category))];
cats.forEach(c => {
  filter.innerHTML += `<option value="${c}">${c}</option>`;
});

renderMovies();