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
    compareFat (otherofood){
     
      return this.fat > otherofood.fat;
    }
   
    compareCarb(otherofood){
         
        return this.carb > otherofood.carb;
    }
    CompareProtein(otherofood){
 return this.protein > otherofood.protein;
          
        
    }
  

}
const foods =[];

submit.addEventListener("submit", function(e){
    e.preventDefault();
    const fname = foodName.value;
      const fatname = Number(fat.value);
        const carbname = Number(carb.value);
          const proteinname = Number(protein.value);
    
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