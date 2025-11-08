import { useEffect, useState } from 'react'

import './App.css'
import './index.css'

function App() {
  const [toppings, setToppings] = useState([]);
  const [base, setBase] = useState([]);
  const [extraToppings, setExtraToppings] = useState([]);
  const [superFood, setSuperFood] = useState([]);
  const [totalCal, setTotalCal]=useState(0);

  const calorieDataBase = { acai: 100, galaxy: 300, greekYogurt: 200, greenBase: 150 };
  const calorieDataToppings = { granola: 100, banana: 50, strawberry: 30 };
  const calorieExtraToppings = {agave: 40, almondButter:200}
  const calorieSuperFood = {beetPowder: 80};


  function handleCheck(e){
    const value = e.target.value;
    const checked = e.target.checked;
    const name = e.target.name;

    console.log(value,checked)

    if (name === "topping"){
      if (checked){
        //saves every check value
        setToppings([...toppings, value]);
          //add toppings
      } else {
        setToppings(toppings.filter(t=>t!== value))
        //remove toppings 
      }
    }
    if (name === "superFood"){
      if (checked){
        setSuperFood([...superFood, value]);

      }else{
        setSuperFood(superFood.filter(s=>s!=value));
      }
    }
    if (name==="base")
      if (checked){
      //saves every check value
      setBase([...base, value])
        //add toppings
    } else {
      setBase(base.filter(b=>b!==value))
      //remove toppings 
    }
    if (name ==="extraToppings"){
      if (checked){
        setExtraToppings([...extraToppings,value])
      }else{
        setExtraToppings(extraToppings.filter(et=>et!==value))
      }
        
      }
    

  }

    //runs whenever toppings are updated
    useEffect(()=>{
      console.log("Toppings ", toppings);
    }, [toppings])

    useEffect(()=>{
      console.log("Base",base);
    },[base]);

    useEffect(()=>{
      console.log("Extra toppings", extraToppings);
    },[extraToppings]);
    

  //total calories
  useEffect(()=>{
  const totalCalToppings = toppings.reduce((sum, item)=>sum+calorieDataToppings[item] || 0,0 )
  console.log("total cal in toppings: " + totalCalToppings);

  const totalCalBase=base.reduce((sum,item)=>sum+calorieDataBase[item] || 0,0)
  console.log("total base cal: ",totalCalBase)

  const totalExtraToppings=extraToppings.reduce((sum,item)=>sum+calorieExtraToppings[item]||0,0)
  console.log ("total extra toppings",totalExtraToppings)

  const totalSuperFood=superFood.reduce((sum,item)=>sum + calorieSuperFood[item]||0,0)

  setTotalCal(totalCalBase+totalCalToppings+totalExtraToppings+totalSuperFood);
  },[toppings,base, extraToppings, superFood]
  )

  return (
    <>
    <div id = "header">
      <h1>Build Your Acai Bowl🫐</h1>
      <h2>Select your base, toppings, extras & superfoods
         - watch the calories add up!</h2>
    </div>

     {/* optional base substitution */}
    <div class="card">
        <div id = "optionalBaseSub">
        <h2>Optional Base Substitution</h2>

          <label>
            < input type = "checkbox" value="acai" name = "base" onChange={handleCheck}/>
              <span class = "label-text">Acai</span>
              <span class = "calories">100 cal</span>
          </label>
          <label>
            < input type = "checkbox" value="galaxy" name = "base" onChange={handleCheck}/>
              <span class = "label-text">Galaxy</span>
              <span class = "calories">300 cal</span>
          </label>
          <label>
            < input type = "checkbox" value="greekYogurt" name = "base" onChange={handleCheck}/>
              <span class = "label-text">Greek Yogurt</span>
              <span class = "calories">200 cal</span>
          </label>
          <label>
            < input type = "checkbox" value="greenBase" name = "base" onChange={handleCheck}/>
              <span class = "label-text">Super Green Base</span>
              <span class = "calories">150 cal</span>
          </label>
        </div>
    </div>

    {/* toppings */}
    <div class = "card">
        <div id = "toppings">
          <h2>Pick your toppings </h2>

          {/* when input changes run the function handleCheck */}
          <label>
            <input type = 'checkbox' value="granola" name = "topping" onChange={handleCheck}/>
            <span class = "label-text">Granola</span>
            <span class = "calories">100 cal</span>
          </label>
          <label>
            <input type = 'checkbox' value="banana" name = "topping" onChange={handleCheck}/>
            <span class = "label-text">Banana</span>
            <span class = "calories">50 cal</span>
          </label>

          <label>
            <input type ='checkbox' value = "strawberry" name = "topping" onChange={handleCheck}/>
            <span class = "label-text">Strawberry</span>
            <span class = "calories">30 cal</span>
          </label>


        </div>

    </div>



    {/* extra toppings */}
    <div class = "card">
        <div id = "extraToppings">
          <h2>Extra toppings</h2>
          <label>
              < input type= "checkbox" value="agave" name ="extraToppings" onChange={handleCheck}/>
                <span class="label-text">Agave</span>
                <span class="calories">50 cal</span>
          </label>
          <label>
              <input type = "checkbox" value="almondButter" name ="extraToppings" onChange={handleCheck}/>
                <span class = "label-text">Almond Butter</span>
                <span class = "calories">200 cal</span>
          </label>


        </div>
    </div>
    {/* Superfood */}

    <div class = "card">
        <div id = "superFood">
            <h2>Super food</h2>
            <label>
                <input type="checkbox" value="beetPowder" name ="superFood" onChange={handleCheck}/>  
                  <span class = "label-text">Beet Powder</span>
                  <span class="calories">80 cal</span>
            </label>


        </div>
    </div>  

    <div id = "showCal">
      <h2>
        <span id = "calText">Calories: {totalCal}</span> </h2>
      </div>
       
    </>
  )
}

export default App
