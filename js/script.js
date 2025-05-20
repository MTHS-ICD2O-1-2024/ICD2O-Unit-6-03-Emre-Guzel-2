// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Emre Guzel
// Created on: May 20 2025
// This file contains the JS functions for index.html

"use strict"

// Setting the functoin 
async function wheaterAppBtn(){

  try {
    const url ='https://api.openweathermap.org/data/2.5/weather?lat=45.4211435&lon=-75.6900574&appid=fe1d80e1e103cff8c6afd190cad23fa5'
    const result= await fetch(url)
    const jsonData = await result.json()
    const temp = jsonData.main.temp
    //console.log(temp)
    document.getElementById("result").innerHTML =(temp - 273.15).toFixed(0) + "" +"°C"

  } catch (error) {
    
  }

}
