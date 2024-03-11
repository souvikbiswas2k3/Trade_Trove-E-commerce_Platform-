import bcrypt from 'bcryptjs'

const users = [
    {
        name: "Rishu Gupta",
        email: 'rishug@email.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: true
    },
    {
        name: "Souvik Biswas",
        email: 'souvikb@email.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: true
    },
    {
        name: "Saurabh Suman",
        email: 'saurabhs@email.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: true
    },
    {
        name: "Pinkey Prasad",
        email: 'pinkeyp@email.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: true
    },
    {
        name: "Om Prasad",
        email: 'omp@email.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: false
    },
    {
        name: "Saheel Jha",
        email: 'saheelj@email.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: false
    }
]

export default users