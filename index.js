function findMatching(drivers, name) {
  return drivers.filter(driver => {
    return driver.toLowerCase() === name.toLowerCase()
  })
}

function fuzzyMatch(drivers, letters) {
return drivers.filter(driver => {
  return driver.startsWith(letters)
})
}

function matchName(drivers, name) {
  return drivers.filter(driver => {
    return driver.name === name
  })
}