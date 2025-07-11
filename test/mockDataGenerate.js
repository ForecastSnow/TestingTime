import app from '../src/app.js';


const pets = await fetch(`http://localhost:${process.env.PORT}/api/mocking/generatePets`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ quantity: 20 })
})

const users = await fetch(`http://localhost:${process.env.PORT}/api/mocking/generateData`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        quantity: 20,
        petsPerUser: 2
    })
})

const adoptions = await fetch(`http://localhost:${process.env.PORT}/api/mocking/generateAdoptions`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        quantity: 20,
    })
})

if ((pets.status === 200) && (users.status === 200) && (adoptions.status == 200)) {

    console.info('\x1b[34m%s\x1b[0m', 'Datos generados correctamente!')

    process.exit(0)
} else {
    console.error('\x1b[31m%s\x1b[0m', 'Error al generar datos!!')
    process.exit(0)
}


