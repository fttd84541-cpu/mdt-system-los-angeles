console.log("MDT System spuštěn");

document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".sidebar a");

    links.forEach(link => {
        link.addEventListener("click", () => {
            console.log("Navigace:", link.href);
        });
    });
});
