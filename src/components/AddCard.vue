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
            <h3 >NAME</h3><input id="name" type = "check" v-model="name" placeholder="Please, provide name">
          </div>
        </div><!-- row -->

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
      <div id="DVD" class="row" :class="{'d-none': !checkTypeProduct['Dvd']}">
          <div class="col-9 d-flex align-middle justify-content-between">
            <h3>Size (MB)</h3>
            <input id="size" type = "text"   v-model="size" placeholder="Please, provide size" v-on="handlers">
          </div>
        </div>
      <div class="row justify-content-end" :class = "{'visible': errors[3].id==='cise' && !errors[3].check}">
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
          <div class="row justify-content-end" :class = "{'visible': errors[4].id==='height' && !errors[4].check}">
            <div class="col-9" >{{errors[4].type}}</div>
          </div >
        <!-- WIDTH -->
        <div class="row" >
            <div class = "col-9 p-2 d-flex align-middle justify-content-between" >
              <h3 >Width (CM)</h3>
              <input id = "width" type = "text" v-model="width" placeholder="Please, provide width"  v-on="handlers">
            </div >
          </div >
          <div class="row justify-content-end" :class = "{'visible': errors[5].id==='width' && !errors[5].check}">
            <div class="col-9" >{{errors[5].type}}</div>
          </div >
        <!-- LENGTH -->
        <div class="row">
            <div class = "col-9 p-2 d-flex align-middle justify-content-between" >
              <h3 >Length (CM)</h3 >
              <input id = "length" type = "text" v-model="length" placeholder="Please, provide length"  v-on="handlers">
            </div>
          </div >
          <div class="row justify-content-end" :class = "{'visible': errors[6].id==='length' && !errors[6].check}">
            <div class="col-9" >{{errors[6].type}}</div>
          </div >
        </div><!-- // furniture-->

      <!-- block BOOK -->
      <div id="Book" class="row" :class="{'d-none': !checkTypeProduct['Book']}">
        <div class="col-9 p-2 d-flex align-middle justify-content-between">
          <h3>Weight (KG)</h3>
          <input id="weight" type = "text" v-model="weight" placeholder="Please, provide weight"  v-on="handlers">
        </div>
      </div><!-- row -->
      <div class="row justify-content-end" :class = "{'visible': errors[7].id==='weight' && !errors[7].check}">
        <div class="col-9" >{{errors[7].type}}</div>
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
        {id: 'name', check: '', type: '', correct: false, checkTypeProduct:''},
        {id: 'price', check: '', type: '', correct: true, checkTypeProduct:''},
        {id: 'size', check: '', type: '', correct: false, checkTypeProduct:'Dvd'},
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
  },
  methods:{
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
      document.getElementById('addCard').disabled = true;
      let id = e.target.id;
      let data = e.target.value;
      this.errors.forEach(elm =>{
        this.checkChars(elm,id,data);
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
        let l = countCorrectElm.length
        for (let i = 0; i<l;i++){
         if(countCorrectElm[i].check===true){
           break;
         }
        }
        if(acc === 2){
          document.getElementById('addCard').disabled = true;

        } else {

          document.getElementById('addCard').disabled = false;
        }
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
      this.errors.forEach((elm, ind) =>{
        if(ind>2){
          elm.correct = false;
        }
        if(elm.checkTypeProduct=== param){
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