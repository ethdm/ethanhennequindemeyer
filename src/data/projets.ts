// src/data/projets.ts

export type ProjetRecord = {
  id: string;
  titre: string;
  date: string;
  categorie: string[];         // déjà normalisées en tableau
  imgUrl: string;              // URL finale du fichier PocketBase
  page_photo?: string;
  page_autre?: string;
};

export const projets: ProjetRecord[] = [
  {
    id: "abc123",
    titre: "Nom du projet",
    date: "09/2025",
    categorie: ["Photo", "Client"],
    imgUrl: "https://portfolio.ethan-hennequindemeyer.fr/api/files/card_p_projets/abc123/mon-image.webp",
    page_photo: "mon-projet-photo",
  },
  // ...
];
