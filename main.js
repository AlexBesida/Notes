function Start() {
    var x = document.getElementById("SvgAddIcon");
    x.style.fill = "var(--main-color)";
    LoadGNotes();
}

function AddButtonHover() {
    var x = document.getElementById("SvgAddIcon");
    x.style.fill = "white";
}

function AddButtonUnHover() {
    var x = document.getElementById("SvgAddIcon");
    x.style.fill = "var(--main-color)";
}

function AddNoteHover() {
    var x = document.getElementById("add-note-accept-p");
    x.style.color = "white";
}

function AddNoteUnHover() {
    var x = document.getElementById("add-note-accept-p");
    x.style.color = "var(--main-color)";
}

function LoadGNotes(){
    var db = firebase.firestore(); db.settings({timestampsInSnapshots: true});

    db.collection("gnotes").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(doc.id,doc.data());
        });
    });

    document.getElementById("add-note-window").style.visibility = "hidden";

}

function CreateNote(){
    var title = document.getElementById("add-note-title").value;
    var description = document.getElementById("add-note-description").value;
    document.getElementById("add-note-window").style.visibility = "hidden"
    AddNote(title, description)
}

function AddNote(title, description){
    var db = firebase.firestore();

    db.collection("gnotes").add({
        title: title,
        description: description,
        date: new Date().getDate()+"."+(new Date().getMonth()+1)+"."+new Date().getFullYear(),
        time: new Date().getHours()+":"+new Date().getMinutes(),
        version: app_info.version,
        versionReleased: app_info.version_released,
        added: "guest"
    });
}

function DialogCreateNote(){
    document.getElementById("add-note-window").style.visibility = "visible";
}

