
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

         indiceMultiple: 0,
         multiple3: false,
         multiple4: false,
         multiple3and4: false,

         isBold: false,

         img: 'https://cdn-7.motorsport.com/images/amp/6b7aKVE0/s6/teemu-suninen-mikko-markkula-h.jpg'
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
      },

      isMultiple3or4(){
         this.multiple3 = false;
         this.multiple4 = false;
         this.multiple3and4 = false;
         this.indiceMultiple++;

         if(this.indiceMultiple % 3 === 0  &&  this.indiceMultiple % 4 === 0){     // confronto se il numero del contatore è multiplo di 3, 4 o di entrambi
            this.multiple3and4 = true;
         }else if(this.indiceMultiple % 3 === 0){
            this.multiple3 = true;
         }else if(this.indiceMultiple % 4 === 0){
            this.multiple4 = true;
         }
      }
   }

}).mount('#app');