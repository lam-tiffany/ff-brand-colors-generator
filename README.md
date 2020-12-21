# FFAI Brand Colors Generator v.1.0

A color modification tool for generating non-primary branded colors required in the FFAI app.\
App URL: https://ffbrandcolors.netlify.app/

## Purpose

Just for fun. 

Serves as a helper tool for devs while changing / testing brand primary colors. In v.1.0, there are 2 features:


**1) Brand colors generator:** 
- Preview and copy the hex code of `gradient-dark` simply by providing a `brand-primary-color`. 
- Devs can assign a `brand-primary-color` either from a selection of default colors or manually inputting the hex color. 

**2) Color contrast checker:** 
- Checks the auto-generated `gradient-dark` against our non-branded color variables (`ff-white`, `ff-light-grey`, `ff-alice-blue`, `ff-grey`, `ff-grey`, `ff-dark-grey`, `ff-black`) under 4 accessibility standard situations (levels "AA" and "AAA", font size "small" and "large"). 
- If the color contrast is not ideal, devs can use Sketch color picker to manually pick a lighter/darker shade of the `gradient-dark` color and check again until it meets the WCAG standards. 
- When devs manually pick a `gradient-dark` color, the `brand-primary-color` will be updated in **Brand colors generator** section. 

## Future improvements & Next steps
- [ ] Color contrast checker checks Pass/Fail grade of `brand-primary-color` as well
- [ ] Preview feature: Preview UI elements used in FFAI app with the geneated color combinations
- [ ] Advanced search feature: Find the most readable color for a given situation (levels, font size, backgroundColor)

## Credits

Made with [TinyColor](https://github.com/bgrins/TinyColor) and [React-Color](https://casesandberg.github.io/react-color/).\
Inspired by [LESS Colour Function Calculator](https://nicothin.pro/lessColourFunctionCalculator/) and my teammates' struggles.
