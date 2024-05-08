import { TERMEKEK } from "./adat.js";

function kartyaOsszeallit(TERMEKEK) {
    let kartyak = ""
    for (let i = 0; i < TERMEKEK.length; i++) {
        const termek = TERMEKEK[i]
        const kartya = `
            <div class="col">
                <div class="card">
                    <div class="card-header text-success"><strong>${termek.nev}</strong></div>
                    <div class="card-body">
                        <img src="${termek.kep}" class="img-thumbnail img-fluid" alt="" style="width: 100%; height: auto;">
                        <br> ${termek.leiras}
                    </div>
                    <div class="card-footer d-flex justify-content-between">
                        <span>Ár: ${termek.ar} Ft</span>
                        <button type="button" class="btn btn-success">Kosárba</button>
                    </div>
                </div>
            </div>`;
        kartyak += kartya 
    }
    return kartyak
}

function megjelenit(kartyak) {
    const kartyakContainer = $("article .row")
    kartyakContainer.html(kartyak)
}

const kartyak = kartyaOsszeallit(TERMEKEK)
megjelenit(kartyak) 





/* let kosar = [];


export function kosarOsszeallit(lista) {
  let txt = "<table class='table'>";
  txt += "<thead><tr><th>Termék neve</th><th>Ár</th><th>Törlés</th></tr></thead>";
  txt += "<tbody>";
  lista.forEach((element, index) => {
    txt += `<tr>`;
    txt += `<td>${element.nev}</td>`;
    txt += `<td>${element.ar}</td>`;
    txt += `<td><button id="${index}" type="button" class="gombTORLES">Törlés</button></td>`;
    txt += `</tr>`;
  });
  txt += "</tbody></table>";
  return txt;
}

function kosarMegjelenit() {
    const kosarHTML = kosarOsszeallit(kosar);
    $('#kosar').html(kosarHTML);
}


export function kosarbaRak(lista1, lista2, id) {
  const aktOBJ = {nev:lista1[id].nev, ar:lista1[id].ar+"ft"}
  lista2.push(aktOBJ);
  kosarMegjelenit(); 
}


export function torol(lista, id) {
  lista.splice(id, 1);
  kosarMegjelenit(); 
} */






function rendezes(lista, irany) {
    return lista.sort(function(a, b) {
        if (irany === 'novekvo') {
            return a.ar - b.ar
        } else if (irany === 'csokkeno') {
            return b.ar - a.ar
        }
    });
}

function kartyakatMegjelenit(rendezettTermekek) {
    const kartyak = kartyaOsszeallit(rendezettTermekek)
    megjelenit(kartyak);
}

const rendezesSzempontok = $(".rendezesSzempontok")
rendezesSzempontok.change(function() {
    const irany = $(this).val()
    const rendezettTermekek = rendezes(TERMEKEK, irany)
    kartyakatMegjelenit(rendezettTermekek)
});







export function tablazatLetrehoz(lista) {
    let txt = `<div class="table-responsive">
            <table class="table table-striped">
            <thead>
            <tr>
            <th>Név</th>
            <th>Leírás</th>
            <th>Ár</th>
            <th>Db</th>
            <th>Kép</th>
            <th></th>
            </tr>
            </thead>
            <tbody>`;
    lista.forEach((element, index) => {
        txt += `<tr>
                <td>${element.nev}</td>
                <td>${element.leiras}</td>
                <td>${element.ar}</td>
                <td>${element.db}</td>
                <td><img src='${element.kep}' alt='polo' style= 'width:100px'></td>
                <td id="torol${index}"><button>🗑️</button></td>
            </tr>`;
    });
    txt += "</tbody></table></div>";
    return txt;
}

export function megjelenitTabla() {
    const txt = tablazatLetrehoz(TERMEKEK); 
    const ELEM = $(".adatok");
    ELEM.html(txt);
}

$(document).ready(function() {
    megjelenitTabla(); 
});



