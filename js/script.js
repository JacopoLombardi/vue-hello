
// ottengo il metodo 'createApp' dentro l'oggetto Vue
const {createApp} = Vue;


// dentro il metodo createApp scriviamo i nostri codici 
createApp({

   // il metodo 'data' gestirà i nostri dati
   data(){
      return{
         messaggio: 'Primo messaggio con Data',

         saluto: 'ciao',
         salutoOut: '',

         indice: 0,

         indiceWithoutCounter: 0,

         isBold: false,
      };
   },


   

   // è un oggetto del metodo 'createApp'
   methods:{
      salutare(){
         this.salutoOut = this.saluto;
         console.log(this.salutoOut);    // stampo in console 'ciao' quando clicco il btn
      },

      contatore(){
         this.indice++;
         console.log('contatore ---- ',this.indice);     // stampo un contatore con una funzione quando clicco il btn
      }

   }

}).mount('#app');
