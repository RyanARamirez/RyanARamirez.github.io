$(document).ready(function () {

  // TESTING
  const whoop = document.querySelector("#whoop")
  const whoop1 = document.querySelector("#whoop1")

  // VARIABLES

  // hero section
  const line1 = document.querySelector(".line1")
  const line2 = document.querySelector(".line2")
  const line3 = document.querySelector(".line3")
  const INTRO = document.querySelector(".intro-div")
  intro_elements = [INTRO, [line1, 1.4], [line2, 1.4], [line3, 1]]

  // AT FIRST OPENING
  similarFirstOpenAndResize()

  // RESIZE PROCEDURE
  window.onresize = scale;

  function scale() {
    similarFirstOpenAndResize()
  }

  // SIMILAR FIRST OPENING AND RESIZE PROCEDURES
  function similarFirstOpenAndResize() {
    resizeText(intro_elements)
  }

  FUNCTIONS
  function customHeroStyling() {
    const HERO = document.querySelector(".hero")
    const HEADSHOT = document.querySelector(".headshot")
    const INTRO = document.querySelector(".intro-div")

    const HERO_HEIGHT = getHeight(HERO)
    const HERO_WIDTH = getWidth(HERO)
    const HERO_RATIO = HERO_WIDTH/HERO_HEIGHT
    const VIEWPORT = $(window).height()

    // resize headshot when under smaller than min width

    // resize headshot and intro div
    if (HERO_RATIO < 1/3) {

    } else if (HERO_RATIO >= 1/3 && HERO_RATIO < 2/3) {

    } else if (HERO_RATIO >= 2/3 && HERO_RATIO < 1/1) {

    }
  }

  // resize an element
  function resizeElement(element, height, width) {
    // pass -1 for height or width to keep it unchanged
    if (height !== -1) {
      element.style.height = height
    }
    if (width !== -1) {
      element.style.width = width
    }
  }

  // change height of text to fill element it is in
  function resizeText(inputs) {
    // input = [main-div, [text-div, multiplier (no multiplier = 1)], ...]
    const OUTER_HEIGHT = getHeight(inputs[0])
    const INTERVAL = 0.25

    var text_divs = []
    for (var i = 1; i < inputs.length; i++) {
      text_divs.push(inputs[i][0])
    }

    var font_size = 1

    while (true) {
      for (var i = 1; i < inputs.length; i++) {
        font_multiplied = font_size * inputs[i][1]
        inputs[i][0].style.fontSize = font_multiplied + "vh"
      }
      if (getTotalTextHeight(text_divs) > OUTER_HEIGHT) {
        for (var i = 1; i < inputs.length; i++) {
          font_multiplied = (font_size - INTERVAL) * inputs[i][1]
          inputs[i][0].style.fontSize = font_multiplied + "vh"
        }
        break
      }
      font_size = font_size + INTERVAL
    }
  }

  // calculated the height of the all text elements combined
  function getTotalTextHeight(text_elements) {
    var total_height = 0;
    for (var i = 0; i < text_elements.length; i++) {
      total_height += getHeight(text_elements[i])
    }
    return total_height
  }

  // height includes content, padding, border, margin
  function getHeight(element) {
    style = getComputedStyle(element)
    margin = parseInt(style.marginBottom) + parseInt(style.marginTop)
    return element.offsetHeight + margin
  }

  // width includes content, padding, border, margin
  function getWidth(element) {
    style = getComputedStyle(element)
    margin = parseInt(style.marginLeft) + parseInt(style.marginRight)
    return element.offsetWidth + margin
  }

});
