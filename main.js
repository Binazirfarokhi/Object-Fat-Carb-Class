const foodName = document.getElementById("foodName");
const fat = document.getElementById("fat");
const carb = document.getElementById("carb");
const protein = document.getElementById("protein");
const submit = document.getElementById("submit");
const list = document.getElementById("list");


class Food {
    constructor(foodName,fat,carb,protein){
        this.foodName = foodName;
        this.fat = fat;
        this.carb = carb; 
        this.protein = protein
    }
    compareFat (myObject){
     
        const maxFat = this.fat
          
        if ( myObject.fatname = maxFat){

            return `this is the highest : ${this.fat}`
        }


    }
    compareCarb(){

    }
    CompareProtein(){

    }
    getDetails (){
        return `this is food name is ${this.foodName} and it has fat:${this.fat} and it has carb:${this.carb} and it has protein:${this.protein}`

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
    console.log(myObject)
    foods.push(myObject)
    console.log(foods)
   
    console.log(myObject.getDetails())
})

