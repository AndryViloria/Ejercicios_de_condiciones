const img = document.getElementById("img_logo");
img.addEventListener("click", () => {
    // img.classList.toggle("border");

    if (img.classList.contains("border")) {
        img.classList.remove("border");
    } else {
        img.classList.add("border");
    }
});