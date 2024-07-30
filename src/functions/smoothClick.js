function handleSmoothClick(e) {
  e.preventDefault();
  scroll({
    top: document.querySelector(e.target.getAttribute("href")).offsetTop,
    behavior: "smooth",
  });
}

export default handleSmoothClick;
