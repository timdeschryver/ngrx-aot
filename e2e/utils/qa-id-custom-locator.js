const qaIdCustomLocator = (qaid, additionalSel) =>
  document.querySelectorAll(
    `[data-qa="${qaid}"]${additionalSel ? ' ' + additionalSel : ''}`,
  );

module.exports = { qaIdCustomLocator };
