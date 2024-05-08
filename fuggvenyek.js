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







export function createTable() {
    const article = document.querySelector('.tablazat');
    const tableContainer = document.createElement('div');
    tableContainer.classList.add('mt-4'); 
    const table = document.createElement('table');
    table.classList.add('table', 'table-striped');
    const tbody = document.createElement('tbody');
    
    const headerRow = document.createElement('tr');
    headerRow.innerHTML = `
        <th>Megnevezés</th>
        <th>Leírás</th>
        <th>Ár</th>
        <th>Mennyiség</th>
        <th>Törlés</th>
    `;
    table.appendChild(headerRow);

    for (let i = 0; i < TERMEKEK.length; i++) {
        const termek = TERMEKEK[i];
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${termek.nev}</td>
            <td>${termek.leiras}</td>
            <td>${termek.ar}</td>
            <td>${termek.db}</td>
            <td><button onclick="deleteRow(${i})" class="btn btn-danger btn-sm">Törlés</button></td>
        `;
        tbody.appendChild(row);
    }

    table.appendChild(tbody);
    tableContainer.appendChild(table); 
    article.appendChild(tableContainer);
}




createTable();



function mentes() {
    var varos = document.getElementById("varos").value;
    var utca = document.getElementById("utca").value;
    var irszam = document.getElementById("irszam").value;
    var nev = document.getElementById("nev").value;
    var nem = document.querySelector('input[name="nem"]:checked').value;

    console.log("Város: " + varos);
    console.log("Utca: " + utca);
    console.log("Írányítószám: " + irszam);
    console.log("Név: " + nev);
    console.log("Nem: " + nem);
}
document.getElementById("submit").addEventListener("click", function(event){
    event.preventDefault();
    mentes(); 
});

mentes()
