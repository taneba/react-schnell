/**
 * get color name from https://www.colorhexa.com/
 * in case of deprecation, simply add a number at the end (e.g. RED_2)
 */

const PALETTE = {
  WHITE: '#FFFFFF',
  MODERATE_BLUE: '#598ad2',
} as const

const BRAND = {
  PRIMARY: PALETTE.MODERATE_BLUE,
} as const

export default {
  ...PALETTE,
  BRAND,
}
