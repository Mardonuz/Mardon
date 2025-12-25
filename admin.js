const PASSWORD = "mardon123"; // o‘zgartir

function login() {
  if (pass.value === PASSWORD) {
    panel.classList.remove("hidden");
  } else {
    alert("Parol noto‘g‘ri");
  }
}

function addMovie() {
  movies.push({
    title: title.value,
    category: category.value,
    link: link.value
  });
  localStorage.setItem("movies", JSON.stringify(movies));
  location.reload();
}

const list = document.getElementById("list");
movies.forEach((m, i) => {
  list.innerHTML += `
    <li>
      ${m.title}
      <button onclick="remove(${i})">🗑</button>
    </li>
  `;
});

function remove(i) {
  movies.splice(i,1);
  localStorage.setItem("movies", JSON.stringify(movies));
  location.reload();
}