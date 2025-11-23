const users = [
    {
        id: 1,
        name: "Vikas",
        age: 32,
        address: {
            city: "Kolkata",
            state: "West Bengal",
            country: "India"
        },
        skills: ["JavaScript", "React", "Node.js"],
        projects: [
            { projectId: "P101", title: "Banking App", status: "Completed" },
            { projectId: "P102", title: "E-commerce Site", status: "In Progress" }
        ]
    },
    {
        id: 2,
        name: "Vishal",
        age: 28,
        address: {
            city: "Bangalore",
            state: "Karnataka",
            country: "India"
        },
        skills: ["Java", "Spring Boot", "MongoDB"],
        projects: [
            { projectId: "P103", title: "Inventory System", status: "Completed" },
            { projectId: "P104", title: "Healthcare Portal", status: "On Hold" }
        ]
    },
    {
        id: 3,
        name: "Varun",
        age: 30,
        address: {
            city: "Pune",
            state: "Maharashtra",
            country: "India"
        },
        skills: ["Python", "Django", "Machine Learning"],
        projects: [
            { projectId: "P105", title: "AI Chatbot", status: "In Progress" }
        ]
    }
];
const data = users.map(item => {
    const address = item.address;
    return {
        name: item.name,
        address: address.city
    }
})

console.log(data)
