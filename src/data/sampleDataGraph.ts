const sampleDataGraph = [
    {x: 50, y: 60,id: 1, connections: [2, 3, 14]},
    {x: 160, y: 40,id: 2, connections: [1, 4]},
    {x: 160, y: 150,id: 3, connections: [1, 6, 7, 8]},
    {x: 220, y: 85,id: 4, connections: [2, 5]},
    {x: 280, y: 60,id: 5, connections: [4, 9, 11]},
    {x: 120, y: 250,id: 6, connections: [3]},
    {x: 220, y: 250,id: 7, connections: [3, 8]},
    {x: 300, y: 150,id: 8, connections: [3, 7, 10, 12]},
    {x: 380, y: 60,id: 9, connections: [5]},
    {x: 450, y: 250,id: 10, connections: [8]},
    {x: 380, y: 130,id: 11, connections: [5]},
    {x: 350, y: 400,id: 12, connections: [8, 13]},
    {x: 250, y: 400,id: 13, connections: [12, 14]},
    {x: 50, y: 320,id: 14, connections: [1, 13]}
]

export default sampleDataGraph