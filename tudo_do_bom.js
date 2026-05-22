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

//Je crée une fonction qui va piocher les infos dans le json pour la section repas

//role: afficher les plats dans la section repas
//paramtre : tableau des plats
//retour : rien  car elle affiche

function afficherPlats(tableauPlats) {

    tableauPlats.forEach(plat => {

        let carteDesPlats = `
        
    
            <div class="carte-repas mt-32 w-30">
                <img class="border-repas w-100"
                    src="${plat.image}"
                    alt="">
                <div>
                    <h3 class="jaune mt-8">${plat.nom}</h3>
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

        <div class="w-30">
                <img class=" w-100 border-img-service mt-16" src=${service.image} alt="">
                <div>
                    <h3 class="jaune mt-16">${service.titre}</h3>
                    <p class="vert-fonce">${service.desc}</p>
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

                <div class="carte-temoignage mt-32 w-30">
                
                <div class="flex align-center gap-16">
                    <i class="ph ph-user-circle blanc user-bleu icon-size-50"></i>
                    <div class="vert-fonce">
                        <h3>${temoignage.prenom}</h3>
                        <p>${temoignage.typeExperience}</p>
                        <p> ${noteEtoiles(temoignage.note)}</p>
                    </div>

                </div>
                <p class="jaune mt-16">${temoignage.commentaire}</p>
  
        
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

        <div class="w-30 flex column align-center gap-16">
                <p class="icon-size-150 blanc">${promesse.icone}</p>
                
                <p class="text-center jaune">${promesse.phrase}</p>
                
            </div>

  
        
        `
        document.querySelector("#promesse-container").innerHTML += carteDesPromesses


    });


}


//FONCTION HERO

//role: afficher le h1, h2, p 
//paramtre : tableau hiro
//retour : rien  car elle affiche

function afficherHiro(tableauHiro) {



    let carteDesTextes = `

       <h1 class="jaune text-shadow pt-64">${tableauHiro.nomCommercial}</h1>
                <h2 class="blanc">${tableauHiro.sousNomCommercial}</h2>
                <p class="jaune mb-32 background-vert-fonce">${tableauHiro.texteAccroche}</p>
                <a class="bouton-bleu mb-32" href="">${tableauHiro.texteBouton}</a>


        `
    document.querySelector("#hiro-container").innerHTML += carteDesTextes





}



//function étoile
//role : afficher le nombre d'étile qui correspond à la note donner dans le json
//parametre : la notes
//retour : la etoiles

function noteEtoiles(note) {

    let etoileResultat=""

        if (note === 0) {
            etoileResultat = "☆☆☆☆☆"
        }else if (note === 1 ){
            etoileResultat = "★☆☆☆☆"
        }else if (note === 2){
            etoileResultat = "★★☆☆☆"
        }else if (note === 3){
            etoileResultat = "★★★☆☆"
        }else if (note === 4){
            etoileResultat = "★★★★☆"
        }else if (note === 5){
            etoileResultat = "★★★★★"
        }

   

        return etoileResultat

  
}


