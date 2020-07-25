module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  plugins: ['stylelint-order'],
  rules: {
    'declaration-bang-space-before': null,
    'declaration-empty-line-before': null,
    'function-name-case': null,
    'function-whitespace-after': null,
    'order/properties-order': [
      {
        groupName: 'Positioning',
        order: 'flexible',
        properties: ['position', 'top', 'right', 'bottom', 'left', 'z-index'],
        noEmptyLineBetween: true
      },
      {
        groupName: 'Display',
        order: 'flexible',
        properties: [
          'display',
          'flex',
          'flex-direction',
          'flex-grow',
          'flex-shrink',
          'flex-basis',
          'justify-content',
          'align-items'
        ],
        noEmptyLineBetween: true
      },
      {
        groupName: 'Box model',
        order: 'flexible',
        properties: [
          'box-sizing',
          'margin',
          'margin-top',
          'margin-right',
          'margin-bottom',
          'margin-left',
          'padding',
          'padding-top',
          'padding-right',
          'padding-bottom',
          'padding-left',
          'width',
          'min-width',
          'max-width',
          'height',
          'min-height',
          'max-height'
        ],
        noEmptyLineBetween: true
      },
      {
        groupName: 'Borders',
        order: 'flexible',
        properties: [
          'border',
          'border-top',
          'border-right',
          'border-bottom',
          'border-left',
          'border-width',
          'border-top-width',
          'border-right-width',
          'border-bottom-width',
          'border-left-width',
          'border-style',
          'border-top-style',
          'border-right-style',
          'border-bottom-style',
          'border-left-style',
          'border-color',
          'border-top-color',
          'border-right-color',
          'border-bottom-color',
          'border-left-color',
          'border-radius',
          'border-radius',
          'border-top-right-radius',
          'border-top-left-radius',
          'border-bottom-right-radius',
          'border-bottom-left-radius',
          'border-collapse'
        ],
        noEmptyLineBetween: true
      },
      {
        groupName: 'Backgrounds',
        order: 'flexible',
        properties: [
          'background',
          'background-image',
          'background-position',
          'background-size',
          'background-repeat',
          'background-origin',
          'background-clip',
          'background-attachment',
          'background-color'
        ],
        noEmptyLineBetween: true
      },
      {
        groupName: 'Typography',
        order: 'flexible',
        properties: [
          'font',
          'font-family',
          'font-style',
          'font-variant',
          'font-weight',
          'line-height',
          'font-size',
          'color',
          'letter-spacing',
          'text-indent',
          'text-align',
          'text-decoration',
          'text-transform',
          'text-shadow',
          'text-overflow',
          'white-space',
          'word-spacing',
          'word-break'
        ],
        noEmptyLineBetween: true
      },
      {
        groupName: 'Others',
        order: 'flexible',
        properties: ['opacity', 'cursor'],
        unspecified: 'bottom'
      }
    ],
    'selector-pseudo-element-colon-notation': null,
    'unit-no-unknown': null,
    'value-keyword-case': null
  }
};
