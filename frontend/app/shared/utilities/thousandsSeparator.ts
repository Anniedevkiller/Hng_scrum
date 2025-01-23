/**
 *
 * @param num
 * @returns
 *
 * This function seperates a number with commas.
 *
 * Example:
 * - 100 => 100
 * - 1000 => 1,000
 * - 1000000 => 1,000,000
 */

const thousandsSeperator = (num: number | string): string => {
  if (typeof num === "string" && isNaN(parseInt(num))) return num

  return String(num).replace(/\B(?=(\d{3})+(?!\d)(?!.\d*)*)/g, ",")
}

export default thousandsSeperator
