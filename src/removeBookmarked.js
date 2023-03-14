function removeBookmark() {
    const bookMarkedButton = document.querySelectorAll(".bookmark-btn");
    bookMarkedButton.forEach((btn) => (btn.onclick = () => {
      const title = btn.previousElementSibling.children[1].textContent;
      removeMovie(title);
      
      btn.parentElement.remove() // Remove movie from the UI
    }));
  
    function removeMovie(movie) {
      const bookmarkedMovies = JSON.parse(localStorage.getItem("bookmarkedMovies")) || [];
      console.log(bookmarkedMovies);
      bookmarkedMovies.splice(bookmarkedMovies.indexOf(movie), 1);
      console.log(bookmarkedMovies);
      localStorage.setItem("bookmarkedMovies", JSON.stringify(bookmarkedMovies));
    }
  }

  export { removeBookmark };


//   function removeBookmark() {
//     const bookMarkedButton = document.querySelectorAll(".bookmark-btn");
//     bookMarkedButton.forEach((btn) => (btn.onclick = () => {
//             const title = btn.previousElementSibling.children[1].textContent;
//             removeMovie(title);
//             btn.parentElement.parentElement.remove(); 
//         })
//     );

//     function removeMovie(movie) {
//         const bookmarkedMovies = JSON.parse(localStorage.getItem("bookmarkedMovies")) || [];
//         console.log(bookmarkedMovies);
//         bookmarkedMovies.splice(bookmarkedMovies.indexOf(movie), 1);
//         console.log(bookmarkedMovies);
//         localStorage.setItem("bookmarkedMovie", JSON.stringify(bookmarkedMovies));
//     }
// }

// export { removeBookmark };