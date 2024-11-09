type Project = {
  id: number;
  title: string;
  image: string;
  link: string;
  type: string;
  description: string;
};
export const projects: Project[] = [
  {
    id: 0,
    title: "Map App",
    image:
      "https://github.com/BoraOzkoc/SwiftUiMapApp/blob/8c73ef84a354bf42299e1fb33c85c7a11d2af104/Ekran%20Kaydı%202024-08-23%2022.07.03.gif?raw=true",
    link: "https://github.com/BoraOzkoc/SwiftUiMapApp/tree/main",
    type: "iOS",
    description: "Map app created with Swift",
  },
  {
    id: 1,
    title: "Calculator",
    image:
      "https://github.com/BoraOzkoc/Calculator/blob/main/Calculator%20App%20Video-2.gif?raw=true",
    link: "https://github.com/BoraOzkoc/SwiftUiMapApp/tree/main",
    type: "iOS",
    description: "Basic calculator created with Swift",
  },
  {
    id: 2,
    title: "ReconstructedRome",
    image: "images/ReconstructedRome.png",
    link: "https://apps.apple.com/tr/app/reconstructedrome/id6504153435?l=tr",
    type: "Unity",
    description: "Mobile game created with Unity",
  },
  {
    id: 3,
    title: "Merging Dragons",
    image: "images/MergingDragons.png",
    link: "https://apps.apple.com/tr/app/merging-dragons/id6502720658?l=tr",
    type: "Unity",
    description: "Mobile game created with Unity",
  },
];
export default Project;
