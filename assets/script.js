// script.js
function loadComponent(id, file) {
  fetch(file)
    .then(response => {
      if (!response.ok) throw new Error(`Gagal memuat ${file}`);
      return response.text();
    })
    .then(data => {
      document.getElementById(id).innerHTML = data;
    })
    .catch(error => console.error(error));
}

// Panggil fungsi
window.onload = () => {
  loadComponent("header", "header.html");
  loadComponent("footer", "footer.html");
};
