function addBookmark() {
  //Listening for form submit
  const bookMarkedButton = document.querySelectorAll(".bookmark-btn");

  bookMarkedButton.forEach(
    (btn) =>
      (btn.onclick = () => {
        const title = btn.previousElementSibling.children[1].textContent;
        addMovieToBookmark(title);
      })
  );

  function addMovieToBookmark(movie) {
    const bookmarkedMovies =
      JSON.parse(localStorage.getItem("bookmarkedMovies")) || [];
    console.log(bookmarkedMovies);
    bookmarkedMovies.push(movie);
    localStorage.setItem("bookmarkedMovies", JSON.stringify(bookmarkedMovies));
  }
}

// bookmarks.forEach((movie) => (bookmarkedMovies.onclick = () => {
//   const title = movie.previousElementSibling.children[1].textContent;
//   removeMovieFromBookmark(title);
// })
// );

// function removeMovieFromBookmark(movie) {
//  const bookmarkedMovies =
// JSON.parse(localStorage.getItem("bookmarkedMovies")) || [];
// console.log(bookmarkedMovies);
// bookmarkedMovies.slice(movie);
// localStorage.setItem("bookmarkedMovies", JSON.stringify(bookmarkedMovies));
// }

export { addBookmark };
