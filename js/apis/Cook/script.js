const input_dish = document.querySelector(".input_dish")
const display_recipe = document.querySelector("display_recipe")

async function get_recipe(){
    try{
        const res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${input_dish}&apiKey=ec25546991ec419790aa4ad8022eb642`)
        if(!res.ok){
            throw new Error("Invalid Dish")
        }
        const data = await res.json()
        console.log(data)
    }
    catch(error){
        const errBox = document.createElement("div")
        errBox.textContent = `${error}`
    }
}

document.querySelector(".search").addEventListener("click",()=>{
    get_recipe()
})