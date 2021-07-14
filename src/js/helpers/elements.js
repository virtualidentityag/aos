/**
 * Generate initial array with elements as objects
 * This array will be extended later with elements attributes values
 * like 'position'
 */
export default () => {
  var lightDOMElements = document.querySelectorAll("[data-aos]");
  var allDOMElements = Array.from(document.querySelectorAll("[data-animated-children]")).reduce((accumulator, currentValue) => {
    return [...accumulator, Array.from(currentValue.shadowRoot.querySelectorAll('[data-aos]'))]
  }, lightDOMElements).flat();
  return Array.prototype.map.call(allDOMElements, node => ({ node }));
};
