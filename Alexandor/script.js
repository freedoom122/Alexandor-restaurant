let reservations = JSON.parse(localStorage.getItem("res")) || [];

function openModal(){
    document.getElementById("modal").style.display="flex";
}

function closeModal(e){
    if(e.target.id==="modal"){
        document.getElementById("modal").style.display="none";
    }
}

function reserve(){

    let name=document.getElementById("name").value;
    let date=document.getElementById("date").value;
    let from=document.getElementById("from").value;
    let to=document.getElementById("to").value;
    let people=document.getElementById("people").value;
    let reason=document.getElementById("reason").value;

    if(!name||!date||!from||!to){
        alert("Completează toate câmpurile");
        return;
    }

    let conflict = reservations.find(r =>
        r.date===date && r.from===from && r.to===to
    );

    if(conflict){
        alert("Interval deja rezervat");
        return;
    }

    reservations.push({name,date,from,to,people,reason});
    localStorage.setItem("res",JSON.stringify(reservations));

    alert("Rezervare confirmată");
    document.getElementById("modal").style.display="none";
}