let movies = JSON.parse(localStorage.getItem("movies")) || [];
let views = Number(localStorage.getItem("views")) || 0;
let downloads = Number(localStorage.getItem("downloads")) || 0;