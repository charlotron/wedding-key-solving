// ------ PROGRAM CONSTANTS

const HEX_RADIX = 16;
const HEX_COLORS = {
  RED: 'ff0000',
  BLUE: '0000ff',
}
const MS_IN_A_DAY = 1000 * 3600 * 24;
const DECIMAL_DIGITS = 4;

// ------ PROGRAM CONFIGURATION

const GROOM_FAVOURITE_COLOUR = HEX_COLORS.RED;
const BRIDE_FAVOURITE_COLOUR = HEX_COLORS.BLUE;

const BRIDE_COMMUNION_DATE = "1997/06/01";
const GROOM_COMMUNION_DATE = "1995/05/01";

const PARIS_HAND_REQUEST_DATE = "2019/12/13";
const WEDDING_SIGNING_DATE = "2021/07/01";
const WEDDING_CELEBRATION_DATE = "2022/05/21"

// ------ MAIN PROG

function main() {
  const dividend = calcDividend();
  const divisor = calcDivisor();
  const result = getMostWeightDigits(dividend / divisor);
  console.log("Result: ", result);
}

function calcDividend() {
  return getColorAsInteger(GROOM_FAVOURITE_COLOUR) +
    getColorAsInteger(BRIDE_FAVOURITE_COLOUR);
}

function calcDivisor() {
  const elapsedDaysFromSigningToCelebrationDate = getDaysBetweenDates(WEDDING_SIGNING_DATE, WEDDING_CELEBRATION_DATE);
  const elapsedDaysFromParisToCelebrationDate = getDaysBetweenDates(PARIS_HAND_REQUEST_DATE, WEDDING_CELEBRATION_DATE);
  const elapsedDaysFromCommunionDates = getDaysBetweenDates(GROOM_COMMUNION_DATE, BRIDE_COMMUNION_DATE);
  return (elapsedDaysFromSigningToCelebrationDate + elapsedDaysFromParisToCelebrationDate) / elapsedDaysFromCommunionDates;
}

//------ AUX FUNCTIONS

function getColorAsInteger(colourAsHex) {
  return parseInt(colourAsHex, HEX_RADIX);
}

function getDaysBetweenDates(fromDateStr, toDateStr) {
  const fromDate = new Date(fromDateStr);
  const toDate = new Date(toDateStr);
  const timeOffset = toDate.getTime() - fromDate.getTime();
  return Math.trunc(timeOffset / MS_IN_A_DAY);
}

function getMostWeightDigits(valueWithDecimals) {
  const decimalFactor = Math.pow(10, DECIMAL_DIGITS);
  const decimalPartOfValue = valueWithDecimals - Math.trunc(valueWithDecimals);
  return Math.trunc(decimalPartOfValue * decimalFactor);
}

//Run prog
main();
