const blockRules = [
    { selector: '.ad', action: 'hide' },
    { selector: '.advertisement', action: 'hide' },
    // Add more rules here
  ];
  

  const adSelectors = [
    '.ad', '.ad-container', '.advertisement', '.ad-banner',
    '.adsbygoogle', // Google AdSense ads
    '.taboola', // Taboola ads
    '.outbrain', // Outbrain ads
  ];
  

  function applyRules() {
    blockRules.forEach(rule => {
      const elements = document.querySelectorAll(rule.selector);
      elements.forEach(element => {
        if (rule.action === 'hide') {
          element.style.display = 'none';
        } else if (rule.action === 'remove') {
          element.remove();
        }
      });
    });
  }
  

  function applyClassNameBasedBlocking() {
    adSelectors.forEach(selector => {
      const adElements = document.querySelectorAll(selector);
      adElements.forEach(adElement => {
        adElement.style.display = 'none';
      });
    });
  }
  
  // Combine both methods
  applyRules();
  applyClassNameBasedBlocking();
  
