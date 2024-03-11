
// ottengo il metodo 'createApp' dentro l'oggetto Vue
const {createApp} = Vue;


// dentro il metodo createApp scriviamo i nostri codici 
createApp({

   // il metodo 'data' gestirà i nostri dati
   data(){
      return{
         messaggio: 'Primo messaggio con Data'
      };
   },

   // è un oggetto del metodo 'createApp'
   methods:{



   }


}).mount('#app');
