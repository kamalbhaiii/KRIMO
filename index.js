const placeData = async () => {
    let data = await fetch("http://localhost:8080/api/place", {
        method:"POST"
    })

    data = await data.json()
}