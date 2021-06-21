// Descrizione: Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus: Aggiungere alla pagina un’immagine, presa anch’essa da un data.

const app = new Vue ({

    el : '#root',

    data : {
        messaggio : "Questo è un messaggio qualsiasi di un esempio qualsiasi di un esercizio qualsiasi.",

        img : "https://www.sinonimi-contrari.it/includes/images/sharers/sinonimi-di-qualsiasi.png",

        colore: "red"
    },

    methods : {
        // eventoInatteso(){
        //     this.colore = "blue";
        //     this.img = "https://picsum.photos/600/315";
        // }
        eventoInatteso(){

            this.colore = "blue";
            this.img = "https://picsum.photos/600/315";
            while (!this.img === this.img) {
                this.img = "https://picsum.photos/600/315";
            }
        }

    }

});