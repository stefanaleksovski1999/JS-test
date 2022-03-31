function deleteUniversity(id) {
    
    fetch('http://localhost:3000/universities/' + id , {
        method: 'DELETE',
    })
    .then(res => res.text())
    .then(res => {
        console.log(res)
        location.reload()
    })
}

function deleteFaculty(id) {
    
    fetch('http://localhost:3000/faculty/' + id , {
        method: 'DELETE',
    })
    .then(res => res.text())
    .then(res => {
        console.log(res)
        location.reload()
    })
}
