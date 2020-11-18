class Unit {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.rechargeTime = 1000 * this.health/100;
    this.damage = this.health/100
    this.criticalChance = 10 - this.health/10
  }
  attack(unit){
    unit.health = unit.health - this.damage
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

  if(result==n) return getUnit(n)
  else return units[result]
}

const fight = (n) => {
  let fighter = units[n]
  let target = getUnit(n)
  fighter.attack(target)
  console.log(fighter.name + " has attacked " + target.name)
  console.log(units)
}

for(let i=0;;i++){
  if(i==units.length) i=0
  if(units.length==1) break;
  if(units[i].health<=0) units.splice(i,1)
  else fight(i)
}

console.log(units)
