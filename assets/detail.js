function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

const targetTitle = getQueryParam("t"); // dari URL

fetch('assets/data.json')
  .then(res => res.json())
  .then(data => {
    const file = data.find(item => item.link_judul === targetTitle);

    if (!file) {
      document.getElementById("detail").innerHTML = "<p>File tidak ditemukan.</p>";
      return;
    }

    document.getElementById("detail").innerHTML = ` 
      <img src="${file.img}" alt="${file.judul}" width="300">
      <h1>${file.judul}</h1>
      <p><strong>Genre :</strong> ${file.size}</p>
      <p><a onclick="a1398()" class="btn_download" href="${file.link_download}">Download Now!</a></p>
    `;
  })
  .catch(error => {
    console.error("Gagal memuat data:", error);
    document.getElementById("detail").innerHTML = "<p>Terjadi kesalahan saat memuat data.</p>";
  });

