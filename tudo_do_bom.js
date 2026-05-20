//role: Questionner le json
//parametre: le json
//retour : la repnse du json

fetch("tudo_do_bom.json")
    .then(rep => {
        return rep.json()
    })
    .then(data => {
        // a ce niveau on devrait avoir dans la console les données envoyé par l'API
        console.log(data)
        afficherPlats(data.plats)
        afficherService(data.services)
        afficherTemoignage(data.temoignages)
        afficherPromesse(data.promesses)
        afficherHiro(data)

    });


//FONCTION REPAS

//role: afficher les plats dans la section repas
//paramtre : tableau des plats
//retour : rien  car elle affiche

function afficherPlats(tableauPlats) {

    tableauPlats.forEach(plat => {

        let carteDesPlats = `
        
    
            <div class="carte-vert-foncé w-30">
                <img class=" border-img w-100"
                    src="${plat.image}"
                    alt="">
                <div>
                    <h3 class="pomme">${plat.nom}</h3>
                    <p class="blanc">${plat.desc}</p>
                </div>
            </div>

    
        `
        document.querySelector("#repas-container").innerHTML += carteDesPlats

    });

}


//FONCTION SERVICE

//role: afficher les service dans la section service
//paramtre : tableau des service
//retour : rien  car elle affiche

function afficherService(tableauServices) {

    tableauServices.forEach(service => {

        let carteDesServices = `

        <div class="carte-bleu w-30">
                <img class=" w-100 border-img" src=${service.image} alt="">
                <div>
                    <h3 class="blanc mt-16">${service.titre}</h3>
                    <p class="blanc ">${service.desc}</p>
                </div>
            </div>
        
        
        `
        document.querySelector("#service-container").innerHTML += carteDesServices


    });

}

//FONCTION TEMOIGNAGE

//role: afficher les temoignages dans la section temoignage
//paramtre : tableau des temoignages
//retour : rien  car elle affiche

function afficherTemoignage(tableauTemoignages) {

    tableauTemoignages.forEach(temoignage => {

        let carteDesTemoignages = `

                <div class="carte-vert mt-16 w-30">
                
                <div class="flex align-center gap-16">
                    <i class="ph ph-user-circle blanc user-bleu icon-size-50"></i>
                    <div class="pomme">
                        <h3>${temoignage.prenom}</h3>
                        <p>${temoignage.typeExperience}</p>
                        <p>Note : 5</p>
                    </div>

                </div>
                <p class="blanc mt-16">${temoignage.commentaire}</p>
  
        
        `
        document.querySelector("#temoignage-container").innerHTML += carteDesTemoignages


    });


}

//FONCTION PROMESSES

//role: afficher les promesse dans la section promesse
//paramtre : tableau des promesse
//retour : rien  car elle affiche

function afficherPromesse(tableauPromesses) {

    tableauPromesses.forEach(promesse => {

        let carteDesPromesses = `

        <div class="w-25 flex column space-around align-center gap-16">
                <p class="icon-size-100">${promesse.icone}</p>
                <p class="w-100 text-center">${promesse.phrase}</p>
            </div>

  
        
        `
        document.querySelector("#promesse-container").innerHTML += carteDesPromesses


    });


}


//FONCTION HiRO

//role: afficher le h1, h2, p 
//paramtre : tableau hiro
//retour : rien  car elle affiche

function afficherHiro(tableauHiro) {



    let carteDesTextes = `

       <h1 class="blanc">${tableauHiro.nomCommercial}</h1>
                <h2 class="blanc">${tableauHiro.sousNomCommercial}</h2>
                <p class="jaune mb-32">${tableauHiro.texteAccroche}</p>
                <a class="bouton-bleu mb-32" href="">${tableauHiro.texteBouton}</a>


        `
    document.querySelector("#hiro-container").innerHTML += carteDesTextes





}



//function étoile
//role : afficher le nombre d'étile qui correspond à la note donner dans le json
//parametre : la notes
//retour : la etoiles

function noteEtoiles(notes) {
        if (temoignage.note === 0) {
            temoignage.note = "☆☆☆☆☆"
        }else if (temoignage.note === 1 ){
            temoignage.note = "★☆☆☆☆"
        }else if (temoignage.note === 2){
            temoignage.note = "★★☆☆☆"
        }else if (temoignage.note === 3){
            temoignage.note = "★★★☆☆"
        }else if (temoignage.note === 4){
            temoignage.note = "★★★★☆"
        }else if (temoignage.note === 4){
            temoignage.note = "★★★★☆"
        }

        return `La note est de ${temoignage.note}`

  
}