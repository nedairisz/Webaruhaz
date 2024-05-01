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
