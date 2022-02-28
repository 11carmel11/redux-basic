//#region isJson
/**
 * Checks if a string is json string.
 *
 * @param str  String to check if JSON.
 * @returns Boolean, indicates if `str` is JSON.
 */
export const isJson = (str: string) => {
  try {
    JSON.parse(str);
    return true;
  } catch (error) {
    return false;
  }
};
//#endregion

//#region zip
/**
 * Zip two arrays into key-value pairs, into an object.
 *
 * @param arr1 Array of keys, String or Number.
 * @param arr2 Array of values, Unknown.
 * @returns Zipped Object -> {key : value}.
 */
export const zip = (arr1: Key[], arr2: unknown[]): GenericObj => {
  if (arr1.length !== arr2.length)
    throw new Error("Error: arrays must have equal length");

  arr1.forEach((Var) => {
    const varType = typeof Var;
    if (varType !== "string" && varType !== "number")
      throw new Error("Error: first array must ");
  });

  const zipped = {};

  for (let i = 0; i < arr1.length; i++) {
    zipped[arr1[i]] = arr2[i];
  }

  return zipped;
};
//#endregion

//#region range
/**
 * return range array between max and min.
 *
 *  For example-> range(5,3) => [3,4,5]
 *
 * @param max End point
 * @param min Start point. If omitted, range starts at 0.
 * @returns Range array.
 */
export const range: Converter<number, number[]> = (max, min = 0) => {
  if (max < min) throw new Error("Error : maximum must be bigger then minimum");
  const returnRange = [];

  for (let i = max; i >= min; i--) {
    returnRange.push(max + min - i);
  }

  return returnRange;
};
//#endregion

//#region objectLogger
/**
 * @param obj Object to convert.
 * @returns Converted Object.
 *
 * For example,
 * http errors can only be fully revealed this way.
 */
export const objectLogger: Logger<GenericObj> = (obj) => {
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  const loggedObj = {};
  for (let i = 0; i < keys.length; i++) {
    loggedObj[keys[i]] = values[i];
  }
  console.group("Logger");
  console.log(loggedObj);
  console.log(new Date());
  console.groupEnd();
  return loggedObj;
};
//#endregion

//#region dateString
/**
 * Date formatter.
 *
 * Converts date to YYYY-MM-DD format.
 *
 * @param date date to be converted. If omitted, assumed as today's date.
 * @returns date in YYYY-MM-DD format
 */
export const dateString: Converter<Date, string> = (date = new Date()) => {
  return date.toISOString().slice(0, 10);
};
//#endregion

//#region types

type Key = string | number;

interface GenericObj {
  [s: string]: unknown;
}

type Logger<T> = (p: T) => T;

type Converter<T, U> = (p1: T, p2?: T, p3?: T) => U;

//#endregion
