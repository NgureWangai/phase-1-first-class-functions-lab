const driverNames = ['Antonia','Nuru','Amari','Mo']
function returnFirstTwoDrivers(driverNames) {
    const firstTwoDriverNames = driverNames.slice(0,2)
    return firstTwoDriverNames
}
function returnLastTwoDrivers(driverNames) {
    const lastTwoDriverNames = driverNames.slice(-2)
    return lastTwoDriverNames
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
function createFareMultiplier(integer) {
    return function(fare) {
        return fare * integer
    }
}
function fareDoubler(fare) {
    return fare * 2
}
function fareTripler(fare) {
    return fare * 3
}
function selectDifferentDrivers(drivers, selectingFunction) {
    return selectingFunction(drivers)
}
