import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => { 
    console.log("1");
    if (!hash) return;
    // attendre que le DOM soit rendu
    setTimeout(() => {
        console.log("2");
      const el = document.getElementById(hash.replace("#", "")); // 5
      console.log("3");
      if (!el) return;

      // récupérer la hauteur de la navbar
      const nav = document.querySelector("nav");
      const navbarHeight = nav ? nav.offsetHeight : 0;

      // calculer la position de scroll corrigée
      const y = el.getBoundingClientRect().top + window.scrollY - navbarHeight - 20;
      console.log("4 y = ", y);

      // effectuer le scroll
      window.scrollTo({ top: y, behavior: "smooth" });
      console.log("5");
    }, 350);
  }, [pathname, hash]);

  return null;
};

export default ScrollToHash;

// La solution du setTiemout n'est pas tres propre et deterministe 
// L'amelioration serait de s'assurer que le DOM charge tout pour calculer y et le scroll
// Autre amelioration : Double clic sur la meme ancre ne focntionne pas (noraml car hash nest pas modifie)