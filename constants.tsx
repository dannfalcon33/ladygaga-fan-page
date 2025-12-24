import { Section, NavOption, AlbumData } from "./types";

export const NAV_OPTIONS: NavOption[] = [
  { id: Section.ABOUT, label: "About" },
  { id: Section.HISTORY, label: "History" },
  { id: Section.ALBUMS, label: "Albums" },
  { id: Section.CONCERTS, label: "Concerts" },
  { id: Section.VIDEOS, label: "Videos" },
  { id: Section.CONTACT, label: "Contact" },
];

export const GAGA_IMAGES = [
  "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?auto=format&fit=crop&q=80&w=1920",
  "https://images.unsplash.com/photo-1549834185-bd9f078a5dfe?auto=format&fit=crop&q=80&w=1920",
  "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=1920",
  "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=1920",
];

export const ROADMAP_DATA = [
  {
    year: "2008",
    title: "THE FAME",
    event:
      'Global breakthrough with "Just Dance" and "Poker Face". The birth of a pop icon.',
  },
  {
    year: "2009",
    title: "THE FAME MONSTER",
    event:
      'The Alexander McQueen "Bad Romance" era. Exploring the dark side of celebrity.',
  },
  {
    year: "2011",
    title: "BORN THIS WAY",
    event:
      "A manifesto for the Little Monsters. Advocacy, self-love, and techno-rock.",
  },
  {
    year: "2013",
    title: "ARTPOP",
    event:
      "A reverse Warholian expedition. Blurring the lines between art, music, and fashion.",
  },
  {
    year: "2016",
    title: "JOANNE",
    event:
      "Stripping back the artifice. A raw tribute to family and acoustic roots.",
  },
  {
    year: "2018",
    title: "A STAR IS BORN",
    event:
      'Hollywood acclaim. Oscar win for "Shallow" and a transformative acting performance.',
  },
  {
    year: "2020",
    title: "CHROMATICA",
    event:
      "Returning to the dance floor. A journey into healing through electronic escapism.",
  },
  {
    year: "2024",
    title: "HARLEQUIN",
    event:
      "The Joker era. Reimagining jazz and classic standards through a chaotic lens.",
  },
  {
    year: "2025",
    title: "MAYHEM",
    event:
      "The return to dark industrial pop. A chaotic, high-energy era defined by authorized madness.",
  },
];

export const VIDEOS_ROADMAP = [
  {
    year: "2009",
    title: "PAPARAZZI",
    description:
      "A cinematic exploration of deadly fame and fashion. Directed by Jonas Åkerlund, it transformed pop videos into short films.",
    url: "https://www.youtube.com/watch?v=d2smz_1L2_0",
    thumbnail: "https://img.youtube.com/vi/d2smz_1L2_0/maxresdefault.jpg",
  },
  {
    year: "2009",
    title: "BAD ROMANCE",
    description:
      "The definitive pop masterpiece. Featuring iconic McQueen armadillo boots and surreal choreography.",
    url: "https://www.youtube.com/watch?v=qrO4VZDFvn8",
    thumbnail: "https://img.youtube.com/vi/qrO4VZDFvn8/maxresdefault.jpg",
  },
  {
    year: "2010",
    title: "TELEPHONE",
    description:
      "An epic crime spree adventure with Beyoncé. A high-fashion sequel to Paparazzi filled with cultural references.",
    url: "https://www.youtube.com/watch?v=GQ95z6ywcBY",
    thumbnail: "https://img.youtube.com/vi/GQ95z6ywcBY/maxresdefault.jpg",
  },
  {
    year: "2011",
    title: "BORN THIS WAY",
    description:
      "The birth of a new race. A surrealist manifesto on equality and self-expression directed by Nick Knight.",
    url: "https://www.youtube.com/watch?v=wV1FrqwZyKw",
    thumbnail: "https://img.youtube.com/vi/wV1FrqwZyKw/maxresdefault.jpg",
  },
  {
    year: "2020",
    title: "911",
    description:
      "A psychological thriller inspired by Armenian filmmaker Parajanov. A profound look into trauma and reality.",
    url: "https://www.youtube.com/watch?v=HMEecqM7-No",
    thumbnail: "https://img.youtube.com/vi/HMEecqM7-No/maxresdefault.jpg",
  },
  {
    year: "2024",
    title: "DISEASE",
    description:
      "A dark, visceral exploration of inner demons and the cure that lies within the chaos.",
    url: "https://www.youtube.com/watch?v=wKzL3q5ZlMg", // Placeholder URL, verify if real
    thumbnail: "https://img.youtube.com/vi/KGh0k4i8XbU/maxresdefault.jpg", // Using Disease MV thumbnail ID
  },
  {
    year: "2025",
    title: "ABRACADABRA",
    description:
      "A magical industrial-pop spectacle. The visual definition of the Mayhem era.",
    url: "#",
    thumbnail: "https://picsum.photos/seed/abracadabra/1280/720", // Placeholder
  },
];

export const CONCERTS_DATA = [
  {
    title: "The Chromatica Ball - Brazil (Mayhem Edit)",
    description:
      "Experience the pure adrenaline of the Brazilian Little Monsters during the most ambitious stadium tour of the decade.",
    url: "https://www.youtube.com/watch?v=fXvX09rR_3k",
    thumbnail: "https://img.youtube.com/vi/fXvX09rR_3k/maxresdefault.jpg",
    year: "2022",
  },
  {
    title: "The Monster Ball Tour - HBO Special",
    description:
      "The definitive pop spectacle that defined a generation. High fashion meets dark theatricality at Madison Square Garden.",
    url: "https://www.youtube.com/watch?v=0_uWfNsh-4o",
    thumbnail: "https://img.youtube.com/vi/0_uWfNsh-4o/maxresdefault.jpg",
    year: "2011",
  },
  {
    title: "Super Bowl LI Halftime Show",
    description:
      "The most-watched musical event in history. A masterclass in athleticism, vocals, and sheer pop dominance.",
    url: "https://www.youtube.com/watch?v=txXwg712zw4",
    thumbnail: "https://img.youtube.com/vi/txXwg712zw4/maxresdefault.jpg",
    year: "2017",
  },
  {
    title: "The Born This Way Ball Tour",
    description:
      "Live from the Kingdom of Fame. An electro-metal pop opera featuring the iconic medieval castle stage.",
    url: "https://www.youtube.com/watch?v=E_PAnz6vS8I",
    thumbnail: "https://img.youtube.com/vi/E_PAnz6vS8I/maxresdefault.jpg",
    year: "2013",
  },
];

import theFame from "./dist/assets/The Fame - RP.png";
import TheFameMonster from "./dist/assets/The Fame Monster - RP.png";
import BornThisWay from "./dist/assets/Born This Way - RP.png";
import artpop from "./dist/assets/Artpop - RP.png";
import chromatica from "./dist/assets/chromatica -- RP.png";
import joanne from "./dist/assets/Joanne - RP.png";
import mayhem from "./dist/assets/Mayhem -- RP.png";

export const ALBUMS: AlbumData[] = [
  {
    title: "Mayhem",
    year: "2025",
    image: mayhem,
    description:
      "The highly anticipated return to dark, industrial roots. A sonic landscape of chaos and liberation.",
    tracklist: [
      "Disease",
      "Abracadabra",
      "Panic Mode",
      "Inferno",
      "Dark Heart",
      "Chaos Angel",
      "Mayhem",
    ],
    genre: "Industrial Pop / Darkwave",
  },
  {
    title: "Chromatica",
    year: "2020",
    image: chromatica,
    description:
      "A journey into a world of color and dance, where kindness reigns supreme over pain.",
    tracklist: [
      "Chromatica I",
      "Alice",
      "Stupid Love",
      "Rain On Me",
      "Free Woman",
      "Fun Tonight",
      "911",
    ],
    genre: "Dance-Pop / Synth-Pop",
  },
  {
    title: "Joanne",
    year: "2016",
    image: joanne,
    description:
      "A deeply personal tribute to her late aunt, exploring family, roots, and country influences.",
    tracklist: [
      "Diamond Heart",
      "A-Yo",
      "Joanne",
      "John Wayne",
      "Dancin' in Circles",
      "Perfect Illusion",
      "Million Reasons",
    ],
    genre: "Soft Rock / Country-Pop",
  },
  {
    title: "ARTPOP",
    year: "2013",
    image: artpop,
    description:
      "An experimental explosion of art, fashion, and pop culture through a digital lens.",
    tracklist: [
      "Aura",
      "Venus",
      "G.U.Y.",
      "Sexxx Dreams",
      "Jewels N' Drugs",
      "MANiCURE",
      "Do What U Want",
    ],
    genre: "EDM / Art-Pop",
  },
  {
    title: "Born This Way",
    year: "2011",
    image: BornThisWay,
    description:
      "The definitive manifesto of self-expression and equality for the modern age.",
    tracklist: [
      "Marry the Night",
      "Born This Way",
      "Government Hooker",
      "Judas",
      "Americano",
      "Hair",
      "Scheiße",
    ],
    genre: "Electropop / Techno-rock",
  },
  {
    title: "The Fame Monster",
    year: "2009",
    image: TheFameMonster,
    description:
      "A dark exploration of the terrors of celebrity and the fame monster that lives within.",
    tracklist: [
      "Bad Romance",
      "Alejandro",
      "Monster",
      "Speechless",
      "Dance in the Dark",
      "Telephone",
      "So Happy I Could Die",
    ],
    genre: "Pop / Avant-Garde",
  },
  {
    title: "The Fame",
    year: "2008",
    image: theFame,
    description:
      "The birth of a pop icon. A journey into the world of Lady Gaga and the fame monster.",
    tracklist: [
      "Just Dance",
      "Poker Face",
      "Shallow",
      "Telephone",
      "So Happy I Could Die",
    ],
    genre: "Pop / Avant-Garde",
  },
];
