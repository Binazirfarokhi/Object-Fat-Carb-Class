const foodName = document.getElementById("foodName");
const fat = document.getElementById("fat");
const carb = document.getElementById("carb");
const protein = document.getElementById("protein");
const submit = document.getElementById("submit");
const list = document.getElementById("list");
const compare = document.getElementById("compare");

class Food {
    constructor(foodName,fat,carb,protein){
        this.foodName = foodName;
        this.fat = fat;
        this.carb = carb; 
        this.protein = protein
    }
    compareFat (myObject){
     
        const maxFat = this.fat
          
        if ( myObject[fat] > maxFat){

            return `this is the highest fat : ${this.fat}`
        }
    }
   
    compareCarb(myObject){
          const maxCarb = this.carb
          
        if ( myObject[carb] > maxCarb){

            return `this is the highest fat : ${this.carb}`
        }

    }
    CompareProtein(myObject){
  const maxprotein = this.protein
          
        if ( myObject[protein] > maxprotein){

            return `this is the highest fat : ${this.protein}`
        }
    }
    getDetails (){
        return `this is food name is ${foodName} and it has fat:${this.fat} and it has carb:${this.carb} and it has protein:${this.protein}`

    }

}
const foods =[];

submit.addEventListener("submit", function(e){
    e.preventDefault();
    const fname = foodName.value;
      const fatname = fat.value;
        const carbname = carb.value;
          const proteinname = protein.value;
    
    const myObject = new Food(fname,fatname,carbname,proteinname)
    for (const key in myObject) {
      console.log(`${key} and the ${myObject[key]}`)

            
        
    }
    console.log(myObject.CompareProtein())
    foods.push(myObject)
    console.log(foods)
   
    console.log(myObject.getDetails())
})

compare.addEventListener("click", function(){
for (const objects of foods) {
    objects
    
}
})