const now = new Date()

console.log(dateFns.isToday(now))

console.log(dateFns.format(now, "YYYY"))
console.log(dateFns.format(now, "MMMM"))
console.log(dateFns.format(now, "dddd"))
console.log(dateFns.format(now, "HH"))

const before = new Date('Feb 1 2020 7:30:49')

console.log(dateFns.distanceInWords(now,before,{addSuffix:true}))