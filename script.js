const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    search();
  }
});

const search = () => {
  const input = searchInput.value;

  window.location.href =
    "https://www.google.com/search?q=" +
    input +
    "&oq=" +
    input +
    "&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIQCAEQLhjHARixAxjRAxiABDIKCAIQLhixAxiABDIKCAMQLhixAxiABDINCAQQABiDARixAxiABDIHCAUQLhiABDIHCAYQABiABDIKCAcQABixAxiABDIKCAgQABixAxiABDIHCAkQABiPAtIBCDYyMmowajE1qAIAsAIA&sourceid=chrome&ie=UTF-8";
};
