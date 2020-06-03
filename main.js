// Smooth Scrolling
$(".smooth-scroll").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        // scrollTop: $(hash).offset().top - 100,
        scrollTop: $(hash).offset().top,
      },
      800
    );
  }
});
