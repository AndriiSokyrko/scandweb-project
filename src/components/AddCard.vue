<template >
<div>
  <form class="m-5" id="product_form">
    <div class = "container" >
      <div class = "row" >
        <div class = "col-10 text-start">
          <h1>Product add</h1>
        </div >
        <!-- /.col -->
        <div class="col-2 d-flex justify-content-between mb-3">
          <button id="addCard" class="" @click="addCard">Save</button >
          <button id="cancel" class="" @click="goBack">Cancel</button >
        </div>
      </div >
      <!-- /.row -->
        <hr size="3px">
      <!-- block form ID -->
      <div class="row" >
        <div class = "col-9 text-start p-2 border border-primary border-1">ID:{{ getlastId }}</div>
      </div >
      <!-- block SKU -->
      <div class="row ">
          <div class="col-9 p-2 d-flex align-middle justify-content-between">
            <h3 >SKU</h3>
            <input id="sku" type = "text" v-model="sku" v-on="handlers" placeholder="Please, provide sku">
          </div>
        </div>
      <div class="row justify-content-end" :class = "{'visible': errors[0].id==='sku' && !errors[0].check}">
        <div class="col-9" >{{errors[0].type}}</div>
      </div >

      <!-- block NAME -->
      <div class="row">
          <div  class="col-9 p-2 d-flex align-middle justify-content-between">
            <h3 >NAME</h3>
            <input id="name" type = "text" v-model="name" placeholder="Please, provide name" v-on="handlers">
          </div>
        </div><!-- row -->
      <div class="row justify-content-end" :class = "{'visible': errors[1].id==='name' && !errors[1].check}">
        <div class="col-9" >{{errors[1].type}}</div>
      </div >
      <!-- block PRICE -->
      <div class="row">
          <div class="col-9 p-2 d-flex align-middle justify-content-between">
            <h3 >PRICE</h3>
            <input id="price" type = "text" v-model="price" placeholder="Please, provide price" v-on="handlers">
          </div>
        </div><!-- row -->
      <div class="row justify-content-end" :class = "{'visible': errors[2].id==='price' && !errors[2].check}">
        <div class="col-9" >{{errors[2].type}}</div>
      </div >

      <!-- block choose TYPE PRODUCT -->
      <div class="row" >
        <div class = "col-9  mb-3 d-flex justify-content-between" >
          <label class = "input-group-text" for = "inputGroupSelect01" >Type switcher</label >
          <select  id="productType" v-model="productType" @change="changTypeProduct">
            <option selected >Choose...</option >
            <option  v-for="item in getTypeProduct" :key="item.id"
                     :value = "item.name">{{item.name}}</option >
          </select >
        </div >
      </div >

      <!-- block SIZE DVD -->
      <div id="DVD" class="row" :class="{'d-none': !checkTypeProduct['DVD']}">
          <div class="col-9 d-flex align-middle justify-content-between">
            <h3>Size (MB)</h3>
            <input id="size" type = "text"   v-model="size" placeholder="Please, provide size" v-on="handlers">
          </div>
        </div>
      <div class="row justify-content-end" :class = "{'visible': errors[3].id==='size' && !errors[3].check}">
        <div class="col-9" >{{errors[3].type}}</div>
      </div >

      <!-- block FURNITURE -->
      <div id="furniture" :class="{'d-none': !checkTypeProduct['Furniture']}">
        <!-- HEIGHT -->
        <div class="row" >
            <div class = "col-9 p-2 d-flex align-middle justify-content-between" >
              <h3 >Height (CM)</h3>
              <input id = "height" type = "text" v-model="height" placeholder="Please, provide height"  v-on="handlers">
            </div >
          </div>
          <div class="row justify-content-end" :class = "{'visible': errors[5].id==='height' && !errors[5].check}">
            <div class="col-9" >{{errors[5].type}}</div>
          </div >
        <!-- WIDTH -->
        <div class="row" >
            <div class = "col-9 p-2 d-flex align-middle justify-content-between" >
              <h3 >Width (CM)</h3>
              <input id = "width" type = "text" v-model="width" placeholder="Please, provide width"  v-on="handlers">
            </div >
          </div >
          <div class="row justify-content-end" :class = "{'visible': errors[6].id==='width' && !errors[6].check}">
            <div class="col-9" >{{errors[6].type}}</div>
          </div >
        <!-- LENGTH -->
        <div class="row">
            <div class = "col-9 p-2 d-flex align-middle justify-content-between" >
              <h3 >Length (CM)</h3 >
              <input id = "length" type = "text" v-model="length" placeholder="Please, provide length"  v-on="handlers">
            </div>
          </div >
          <div class="row justify-content-end" :class = "{'visible': errors[7].id==='length' && !errors[7].check}">
            <div class="col-9" >{{errors[7].type}}</div>
          </div >
        </div><!-- // furniture-->

      <!-- block BOOK -->
      <div id="Book" class="row" :class="{'d-none': !checkTypeProduct['Book']}">
        <div class="col-9 p-2 d-flex align-middle justify-content-between">
          <h3>Weight (KG)</h3>
          <input id="weight" type = "text" v-model="weight" placeholder="Please, provide weight"  v-on="handlers">
        </div>
      </div><!-- row -->
      <div class="row justify-content-end" :class = "{'visible': errors[8].id==='weight' && !errors[8].check}">
        <div class="col-9" >{{errors[8].type}}</div>
      </div >

      <!-- /.row -->
    </div >
    <!-- /.conatiner -->
  </form >
</div>
</template >

<script >
export default {
  name: "AddCard",
  data(){
    return {
      handlers: {
        keyup: e =>this.checkData(e),
        touchstart: e =>this.checkData(e)
      },
      valid:false,
      id: '',
      sku:'',
      name: '',
      price: '',
      size: '',
      height: '',
      width: '',
      length: '',
      weight: '',
      productType:'',
      checkTypeProduct: {
        Furniture: false,
        Dvd: false,
        Book: false
      },
      errors: [
        {id: 'sku', check: '', type: '', correct: true, checkTypeProduct:''},
        {id: 'name', check: '', type: '', correct: true, checkTypeProduct:''},
        {id: 'price', check: '', type: '', correct: true, checkTypeProduct:''},
        {id: 'furniture', check: '', type: '', correct: true, checkTypeProduct:''},
        {id: 'size', check: '', type: '', correct: false, checkTypeProduct:'DVD'},
        {id: 'height', check: '', type: '', correct: false, checkTypeProduct: 'Furniture'},
        {id: 'width', check: '', type: '', correct: false,checkTypeProduct: 'Furniture'},
        {id: 'length', check: '', type: '', correct: false,checkTypeProduct: 'Furniture'},
        {id: 'weight', check: '', type: '', correct: false,checkTypeProduct: 'Book'},
      ]
    }
  },
  computed:{
    getlastId(){
      return this.$store.getters.getLastId;
    },
    getTypeProduct(){
      return this.$store.getters.getTypeProducts;
    },
    getAllCards() {
      return this.$store.getters.getCardAll;
    }
  },
  methods:{
    checkFurniture() {
      let allCards = this.getAllCards;
      let h = document.getElementById('height').value
      let w = document.getElementById('width').value
      let l = document.getElementById('length').value
      this.errors[3].type='';
      this.errors[3].check = false;
      for(let i =0; i<allCards.length;i++){
        let elm = allCards[i];
        if(elm.productType === 'Furniture'){
          if(elm.height === Number(h)  && elm.width===Number(w) && elm.length ===Number(l)){
            this.errors[3].type='Please, provide Firniture';
            this.errors[3].check = true;
            break;
          }
        }
      }
    },
    checkName(e){
      let elm = this.errors[1];
      elm.check = false;
      elm.type = '';
        let data = e.target.value;
        let result = this.getAllCards.filter( elm => {
          if(elm.name === data){
            return elm;
          }
        })
        if(result.length || data===''){
          elm.check = true;
          elm.type = 'Please, provide name';
        }
        console.log(this.errors);
    },
    checkChars(elm, id, data){
      if(elm.id === id && !isNaN(data)===true ) {
        elm.check = false;
        elm.type = '';
      }
      if(elm.id === id && !isNaN(data)===false && !data.match('/.*[a-zA-Zа-яФА-Я]+.*/g')){
        elm.check = true;
        elm.type = 'Please, provide the data of indicated type';

      } else {
        if(elm.id === id && data===''){
          elm.check = true;
          elm.type = 'Please, submit required data';
        }
      }
    },
    checkData(e){
      this.checkFurniture();
      document.getElementById('addCard').disabled = true;
      let id = e.target.id;
      let data = e.target.value;

      this.errors.forEach(elm =>{
        if(id ==='name'){
          this.checkName(e)
        }
       else {
          this.checkChars(elm, id, data);
        }
      })
      let countCorrectElm = this.errors.filter(elm=>{
        return elm.correct === true;
      })
      let acc = countCorrectElm.reduce((acc, elm) =>{
            if(elm.check===false){
              acc++;
            }
        return acc;
      },0)

      if(countCorrectElm.length === acc ){
        // let l = countCorrectElm.length
        // for (let i = 0; i<l;i++){
        //  if(countCorrectElm[i].check===true){
        //    break;
        //  }
        document.getElementById('addCard').disabled = false;
        // }
        // if(acc === 3){
        //   document.getElementById('addCard').disabled = true;
        // }
      }
     },
    addCard(e){
      e.preventDefault();
      let payload = {
        id:this.getlastId,
        name: this.name,
        productType: this.productType,
        sku: this.sku,
        price: this.price,
        size: this.size,
        width: this.width,
        height: this.height,
        length: this.length,
        weight: this.weight,
      }
      this.$store.dispatch('addCard',payload);
      this.$router.push('/');
    },
    changTypeProduct(){
      document.getElementById('addCard').disabled = true;
      let param = this.productType;
      Object.keys(this.checkTypeProduct).forEach(key => this.checkTypeProduct[key]=false)
      this.checkTypeProduct[param] =true;
      this.errors.forEach((elm) => {
        if(elm.checkTypeProduct === param){
          elm.correct = true;
        }
      })
    },
    goBack(e){
      e.preventDefault;
       this.$router.push('/');
    }
  },
  mounted() {
    document.getElementById('addCard').disabled = true;

  }


}
</script >

<style scoped >
h3{
  display: inline-block;
}

</style >