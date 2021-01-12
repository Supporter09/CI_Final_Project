let submit_btn = document.querySelector("#submit-btn");

function addData() {
    console.log("minh");
    const file = document.querySelector('#file').files[0]
    const name = (+new Date()) + '-' + file.name;
    const metadata = {
        contentType: 'image/jpeg,png',
    };
    const task = ref.child(name).put(file, metadata);
    task
        .then(snapshot => snapshot.ref.getDownloadURL())
        .then((url) => {
            console.log(url);
            let author_name = document.getElementById("name").value;
            let director = document.getElementById("director").value;
            let birth_details = document.getElementById("birth-details").value;
            let film_information = document.getElementById("film-information").value;
            if (author_name!="" && director !="" && birth_details!="" && film_information !="") {
                db.collection('FilmData').add({
                    bio: film_information,
                    birth_details: birth_details,
                    director: director,
                    name: author_name,
                    film_image: url
                })
            }else{
                alert("Hãy diền đầy đủ các ô")
            };        
        })
        .catch(console.error);
    
}