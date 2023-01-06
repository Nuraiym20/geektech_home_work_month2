let array1 = [5,4,1,20,0, -4, -8, 100,4,-74,-5,0,0,1,2,7]
console.log(array1)
array1 = array1.map(i => i * 5 ).filter(i => i > 0)
console.log(array1)
console.log(array1.reduce((a,b) => Math.max(a,b)))
console.log(array1.reduce((a,b) => Math.min(a,b)))

let names = ["алиса","ЖЕНЯ","артем","ПАВЕЛ","ЖАКШЫЛЫК","антон","айсулуу", "канаим"]
console.log(names)
names = names.map(a => {
    let n = a.toLowerCase()
    n = n[0].toUpperCase() + n.substring(1)
    return n 
})
console.log(names)

names = names.filter(name => name.startsWith('А'))


console.log(`names: ${names}`)

names = names.reduce((longest, current) => {
    return current.length > longest.length ? current : longest
  },)
console.log(names)




let cars = [
  {
    brand: "Toyota",
    model: "RAV4",
    country: "Japan",
    year: 2010,
    engineVolume: 2.4
  },
  {
    brand: "Toyota",
    model: "Camry",
    country: "Japan",
    year: 2010,
    engineVolume: 3.5
  },
  {
    brand: "BMW",
    model: "5 series",
    country: "Germany",
    year: 2020,
    engineVolume: 3.0
  },
  {
    brand: "Mercedes",
    model: "S class",
    country: "Germany",
    year: 2015,
    engineVolume: 5.5
  },
  {
    brand: "Lada",
    model: "Priora",
    country: "Russia",
    year: 2012,
    engineVolume: 1.6
  },
  {
    brand: "Lexus",
    model: "LX570",
    country: "Japan",
    year: 2018,
    engineVolume: 5.7
  }
]

let carsMap = cars.map( car => `${car.brand} ${car.model} ${car.engineVolume}L (${car.year})`)
console.log(carsMap)

let carFilter = cars.filter( value => value.country === "Japan" && value.engineVolume >= 3)

console.log(carFilter)

let carReduce = cars.reduce((carOld, carCurrent) => carCurrent.year < carOld.year ? carCurrent : carOld)
console.log(carReduce)

let carReduce2 = cars.reduce((carMin, carMax) => carMax.engineVolume > carMin.engineVolume ? carMax : carMin)
console.log(carReduce2)

let carReduce3 = cars.reduce((carMin, carMax) => carMax.year <= carMin.year ? carMax.engineVolume > carMin.engineVolume ? carMax : carMin : carMin ) 
console.log(carReduce3)







