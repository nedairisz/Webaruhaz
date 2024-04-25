import {TERMEK} from "./adat.js";

function kartyaOsszeallit(lista) {
    const kartyaELEMEK = $("article")
    lista.forEach(function(termek) {
        let kartya=`
        <div class="card col-lg-4">
            <div class="card-header text-success"><strong>Retro Gamer férfi póló</strong></div>
            <div class="card-body">
                <img src="kepek/polo1.jpg" class="img-thumbnail" alt="">
            
                <br> feugiat mauris sit amet orci hendrerit, vitae luctus odio iaculis. In volutpat turpis sit amet tellus ullamcorper luctus.
            </div>
            <div class="card-footer row">
                <span class="col-lg-8">${termek.ar}</span>
                <button type="button" class="btn btn-success col-lg-4">Kosárba</button>
            </div>
        </div>
        `
    });
}

/* const tablazat=document.getElementById("feladat_1")
    let table = "<table>";
        for (let i = 0; i < GYUMOLCSOK.length; i++) {
            let sorok = "<tr>"
            for (const key in GYUMOLCSOK[i]) {
                sorok+= `<td>${GYUMOLCSOK[i][key]} </td>`
            }
            sorok+="</tr>";  
            table+=sorok
        }
    table +="</table>"
    tablazat.innerHTML=table */

/*              <div class="card col-lg-4">
                <div class="card-header text-success"><strong>Retro Gamer férfi póló</strong></div>
                <div class="card-body">
                    <img src="kepek/polo1.jpg" class="img-thumbnail" alt="">
                
                    <br> feugiat mauris sit amet orci hendrerit, vitae luctus odio iaculis. In volutpat turpis sit amet tellus ullamcorper luctus.
                </div>
                <div class="card-footer row">
                    <span class="col-lg-8">Ár: 6990 Ft</span>
                    <button type="button" class="btn btn-success col-lg-4">Kosárba</button>
                </div>
                </div>*/