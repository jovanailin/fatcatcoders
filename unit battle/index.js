class Unit {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.rechargeTime = 1000 * this.health/100;
    this.damage = this.health/100
    this.criticalChance = 10 - this.health/10
  }
  attack(unit){
    if(this.criticalChance>=Math.random()*101) unit.health = unit.health - this.damage*2
    else unit.health = unit.health - this.damage
    unit.rechargeTime = 1000 * unit.health/100
    unit.damage = unit.health/100
    unit.criticalChance = 10 - unit.health/10
  }
}

const units = []

const unit1 = new Unit("firstUnit")
const unit2 = new Unit("secondUnit")
const unit3 = new Unit("thirdUnit")
const unit4 = new Unit("fourthUnit")
const unit5 = new Unit("fifthUnit")

units.push(unit1,unit2,unit3,unit4,unit5)

const getUnit = (n) => {
  let result = Math.floor(Math.random()*(units.length))
  if(result==n || units[result].health<0) return getUnit(n)
  else return units[result]
}

const fight = (n) => {
  let fighter = units[n]
  let target = getUnit(n)
  fighter.attack(target)
  console.log(units)
}

let count = units.length


  let i0 = setInterval(()=>{
    if(units[0].health<=0 || count==1){
      count--
      clearInterval(i0)
    }
    else fight(0)
  },units[0].rechargeTime)

  let i1 = setInterval(()=>{
    if(units[1].health<=0 || count==1){
      count--
      clearInterval(i1)
    }
    else fight(1)
  },units[1].rechargeTime)

  let i2 = setInterval(()=>{
    if(units[2].health<=0 || count==1){
      count--
      clearInterval(i2)
    }
    else fight(2)
  },units[2].rechargeTime)

  let i3 = setInterval(()=>{
    if(units[3].health<=0 || count==1){
      count--
      clearInterval(i3)
    }
    else fight(3)
  },units[3].rechargeTime)

  let i4 = setInterval(()=>{
    if(units[4].health<=0 || count==1){
      count--
      clearInterval(i4)
    }
    else fight(4)
  },units[4].rechargeTime)
