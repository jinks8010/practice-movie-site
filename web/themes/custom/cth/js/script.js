// alert("Javascript working");
Drupal.behaviors.movieCardHoverEffect = {
    attach: (context, settings) => {
      const movieCards = context.querySelectorAll('.views-view-grid__item');
  
      movieCards.forEach((card) => {
        card.addEventListener('mouseenter', () => {
          card.classList.add('hover-effect');
        });
  
        card.addEventListener('mouseleave', () => {
          card.classList.remove('hover-effect');
        });
      });
    }
  };
  
  
  ((Drupal, once) => {
    Drupal.behaviors.genreBackground = {
      attach: (context) => {
        once("genreBackground", ".field--name-field-genre", context).forEach((element) => {
          const genreElement = element.querySelector(".field__item a");
          if (!genreElement) return;
  
          const genreText = genreElement.textContent.trim().toLowerCase();
          const lightModeElement = document.querySelector(".light-mode");
  
          if (!lightModeElement) return;
  
          const backgroundColors = {
            comedy: "#FFD700", // Yellow
            drama: "#FF5733", // Red-Orange
            action: "#1E90FF", // Dodger Blue
            horror: "#000000", // Black
            "sci-fi": "#8A2BE2", // Blue-Violet
          };
  
          lightModeElement.style.backgroundColor = backgroundColors[genreText] || "#ccc"; // Default gray
        });
      },
    };
  })(Drupal, once);
  