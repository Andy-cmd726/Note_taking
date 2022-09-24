loginprocess = sessionStorage.getItem('login');
if (loginprocess == null) {
    let AddNote = document.querySelector('#addBtn');
    AddNote.disabled = true;
    let logout = document.querySelector('#logout');
    logout.style.display = "none";
    let profileBtn = document.querySelector('#profile');
    profileBtn.style.display = "none";
    let yourNotes = document.querySelector('.yourNotes');
    yourNotes.style.display = "none";
    let hr = document.querySelector('#hr');
    hr.style.display = "none";
    let notesTxt = document.querySelector("#notes");
    notesTxt.style.display = "none";
}
else if (loginprocess.length >= 1) {

    let login = document.querySelector('#login');
    login.style.display = "none";
    let signup = document.querySelector('#signup');
    signup.style.display = "none";
    let line = document.querySelector('#text');
    line.style.display = "none";
    let AddNote = document.querySelector('#addBtn');
    AddNote.disabled = false
    let logout = document.querySelector('#logout');
    logout.style.display = "block";
}


// for login process

let login = document.querySelector('#Login');
login.addEventListener('click', function () {
    let name = document.querySelector('#l_name');
    let password = document.querySelector('#l_password');
    let info = localStorage.getItem('info');
    let x = JSON.parse(info)
    if (x == null) {
        let text = document.createTextNode("Somthing Wrong Try Again!")
        let p = document.createElement('p');
        p.setAttribute('style', style = "color:red;");
        p.appendChild(text);
        let message = document.querySelector('#Warning');
        message.appendChild(p);
        setTimeout(() => { document.location.reload(); }, 700)
        return 0;
    }
    for (let i = 0; i < x.length; i++) {
        if (x[i].name == name.value && x[i].password == password.value) {
            sessionStorage.setItem("login", name.value);
            let text = document.createTextNode("Log in successful")
            let p = document.createElement('p');
            p.setAttribute('style', style = "color:red;");
            p.appendChild(text);
            let message = document.querySelector('#Warning');
            message.appendChild(p);
            setTimeout(() => { document.location.reload(); }, 700);


            loginprocess = sessionStorage.getItem('login')
            if (loginprocess.length >= 1) {
                let login = document.querySelector('#login');
                login.style.display = "none";
                let signup = document.querySelector('#signup');
                signup.style.display = "none";
                let line = document.querySelector('#text');
                line.style.display = "none";
                let AddNote = document.querySelector('#addBtn');
                AddNote.disabled = false

            }
            return 0;
        }
    }
    let text = document.createTextNode("Somthing Wrong Try Again!")
    let p = document.createElement('p');
    p.setAttribute('style', style = "color:red;");
    p.appendChild(text);
    let message = document.querySelector('#Warning');
    message.appendChild(p);
    setTimeout(() => { document.location.reload(); }, 700)
});


// for signup page process
let Signup = document.querySelector("#Signup");
Signup.addEventListener('click', function () {
    let info = localStorage.getItem('info');
    let x = JSON.parse(info);
    let infoObj = [];
    let name = document.querySelector('#s_name');
    let password = document.querySelector('#s_password')
    let ConfiPassword = document.querySelector('#s_cpassword');
    if (password.value != ConfiPassword.value) {
        let p = document.createElement('p');
        let text = document.createTextNode("Not matched Confirm Password")
        p.setAttribute('style', style = "color:red;");
        p.appendChild(text);
        let message = document.querySelector('#warning');
        message.appendChild(p);
        setTimeout(() => { document.location.reload(); }, 3000);
    }
    else {
        if (info == null) {
            infoObj == [];
        }
        else {
            infoObj = x;
        }
        if (infoObj.length == 0) {
            infoObj.push({ name: name.value, password: password.value })
            localStorage.setItem('info', JSON.stringify(infoObj))
            let p = document.createElement('p');
            let text = document.createTextNode("SignUp successful")
            p.setAttribute('style', style = "color:blue;");
            p.appendChild(text);
            let message = document.querySelector('#warning');
            message.appendChild(p);
            setTimeout(() => { document.location.reload(); }, 3000);
        }
        if (infoObj.length >= 1) {
            for (let i = 0; i < x.length; i++) {
                if (x[i].name == name.value) {
                    let p = document.createElement('p');
                    let text = document.createTextNode("Name is alredy taken!! Try again")
                    p.setAttribute('style', style = "color:red;");
                    p.appendChild(text);
                    let message = document.querySelector('#warning');
                    message.appendChild(p);
                    setTimeout(() => { document.location.reload(); }, 3000);
                    return;
                }
            }
        }
        infoObj.push({ name: name.value, password: password.value })
        localStorage.setItem('info', JSON.stringify(infoObj))
        let p = document.createElement('p');
        let text = document.createTextNode("SignUp successful")
        p.setAttribute('style', style = "color:blue;");
        p.appendChild(text);
        let message = document.querySelector('#warning');
        message.appendChild(p);
        setTimeout(() => { document.location.reload(); }, 3000);

    }
});

logout.addEventListener('click', function () {
    sessionStorage.clear('login');
    setTimeout(() => { document.location.reload(); }, 500);
})

let AddNote = document.querySelector('#addBtn');
AddNote.addEventListener('click', function () {

    let title = document.querySelector('#title');
    console.log(title);
    let Description = document.querySelector('#desc')
    x = sessionStorage.getItem('login');
    let note = localStorage.getItem('notes');
    if (note == null) {
        noteObj = []
    }
    else {
        noteObj = JSON.parse(note);

    }
    noteObj.push({ name: x, Title: title.value, description: Description.value })
    localStorage.setItem('notes', JSON.stringify(noteObj))
    setTimeout(() => { document.location.reload(); }, 100);
})

let note = localStorage.getItem('notes');
let x = JSON.parse(note);
if (note == null) {
    noteObj = []
}
else {
    noteObj = x;
}
let html1 = '';
let htmlElm = document.querySelector('#notes');
    if (noteObj.length == []) {
        htmlElm.innerHTML =
            `<font face="Lobster", cursive size="5px" color="black">Nothing to show please add a note
        </font>`
    }

let username = sessionStorage.getItem('login');
for (let i = 0; i < noteObj.length; i++) {
    if (username == noteObj[i].name) {
        html1 += `
    <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${x[i].Title}</h5>
        <p class="card-text">${x[i].description}</p>
        <button id="${i}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
      </div>
    </div>`;

    }
}
if (noteObj.length != 0) {
    htmlElm.innerHTML = html1;
}

// for profile button
let profileBtn = document.querySelector('#profile');
let profileTxt = document.createTextNode(username);
profileBtn.appendChild(profileTxt)


// For delete button

function deleteNote(index){
    if (notes == null) {
        notesObj = [];
      }
      else{
        notesObj = x;
      }
    notesObj.splice(index,1);
    localStorage.setItem('notes',JSON.stringify(notesObj));
    setTimeout(() => { document.location.reload(); }, 100);
    
}