import { nanoid } from "@reduxjs/toolkit"

const theatresAgenda = [
  {
    name: "Americas",
    idTheater: nanoid(),
    rooms: [
      {
        format: "2D Doblado",
        agenda: [
          "12:10 PM",
          "12:40 PM",
          "1:00 PM",
          "1:30 PM",
          "2:15 PM",
          "3:00 PM",
          "3:20 PM",
          "4:35 PM",
          "5:40 PM",
          "7:30 PM",
          "8:00 PM",
          "9:30 PM",
          "9:50 PM",
        ],
      },
      {
        format: "3D Doblado",
        agenda: ["2:30 PM", "7:10 PM"],
      },
      {
        format: "3D Doblado DINAMIX",
        agenda: ["2:00 PM", "4:20 PM", "6:40 PM", "9:00 PM"],
      },
    ],
  },
  {
    name: "Andino",
    idTheater: nanoid(),
    rooms: [
      {
        format: "2D subtitulado",
        agenda: ["1:40 PM", "4:00 PM"],
      },
      {
        format: "2D subtitulado Onyx",
        agenda: ["4:40 PM", "7:00 PM", "9:20 PM"],
      },
      {
        format: "3D Doblado DINAMIX",
        agenda: ["2:00 PM", "4:20 PM", "6:40 PM", "9:00 PM"],
      },
    ],
  },
  {
    name: "Cedritos",
    idTheater: nanoid(),
    rooms: [
      {
        format: "2D Doblado",
        agenda: [
          "12:15 PM",
          "1:30 PM",
          "2:00 PM",
          "2:30 PM",
          "3:45 PM",
          "4:15 PM",
          "4:45 PM",
          "6:00 PM",
          "6:30 PM",
          "7:00 PM",
          "8:45 PM",
          "9:15 PM",
        ],
      },
    ],
  },
  {
    name: "Centro Chia",
    idTheater: nanoid(),
    rooms: [
      {
        format: "2D Doblado",
        agenda: [
          "12:40 PM",
          "1:10 PM",
          "1:40 PM",
          "2:50 PM",
          "3:20 PM",
          "5:00 PM",
          "5:30 PM",
          "7:10 PM",
          "7:40 PM",
          "9:00 PM",
          "9:50 PM",
        ],
      },
      {
        format: "3D Doblado",
        agenda: ["12:10 PM", "2:20 PM", "4:20 PM", "6:40 PM", "9:00 PM"],
      },
    ],
  },
  {
    name: "Titan Plaza",
    idTheater: nanoid(),
    rooms: [
      {
        format: "2D Doblado",
        agenda: [
          "11:00 AM",
          "11:20 PM",
          "12:00 PM",
          "12:20 PM",
          "1:00 PM",
          "1:20 PM",
          "3:00 PM",
          "3:30 PM",
          "5:20 PM",
          "6:00 PM",
          "7:40 PM",
          "8:20 PM",
        ],
      },
      {
        format: "3D Doblado DINAMIX",
        agenda: ["11:40 AM", "1:40 PM", "4:00 PM", "6:20 PM", "8:40 PM"],
      },
      {
        format: "2D Doblado MegaSala",
        agenda: ["10:30 AM", "2:00 PM", "7:10 PM"],
      },
      {
        format: "3D Doblado MegaSala",
        agenda: ["5:00 PM", "9:20 PM"],
      },
    ],
  },
  {
    name: "Nuestro Bogota",
    idTheater: nanoid(),
    rooms: [
      {
        format: "2D Doblado",
        agenda: [
          "11:00 AM",
          "11:20 PM",
          "11:40 PM",
          "1:20 PM",
          "1:40 PM",
          "2:00 PM",
          "4:00 PM",
          "6:40 PM",
          "9:30 PM",
        ],
      },
      {
        format: "2D Doblado IMAX",
        agenda: ["10:00 AM", "3:20 PM", "8:40 PM"],
      },
      {
        format: "3D Doblado IMAX",
        agenda: ["12:40 PM", "6:00 PM"],
      },
      {
        format: "2D Doblado Onyx",
        agenda: ["10:30 AM", "1:00 PM", "3:40 PM", "6:20 PM", "9:00 PM"],
      },
    ],
  },
]

export default theatresAgenda
