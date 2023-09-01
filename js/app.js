// Function to save code to localStorage
function saveCodeToLocalStorage() {
    const htmlCode = document.getElementById('htmlCode').value;
    const cssCode = document.getElementById('cssCode').value;
    const jsCode = document.getElementById('jsCode').value;
  
    localStorage.setItem('savedHtmlCode', htmlCode);
    localStorage.setItem('savedCssCode', cssCode);
    localStorage.setItem('savedJsCode', jsCode);
  }
  
  // Function to load code from localStorage
  function loadCodeFromLocalStorage() {
    const savedHtmlCode = localStorage.getItem('savedHtmlCode');
    const savedCssCode = localStorage.getItem('savedCssCode');
    const savedJsCode = localStorage.getItem('savedJsCode');
  
    if (savedHtmlCode) {
      document.getElementById('htmlCode').value = savedHtmlCode;
    }
  
    if (savedCssCode) {
      document.getElementById('cssCode').value = savedCssCode;
    }
  
    if (savedJsCode) {
      document.getElementById('jsCode').value = savedJsCode;
    }
  }
  
  // Function to update the preview
  function showPreview() {
    var htmlCode = document.getElementById('htmlCode').value;
    var cssCode = '' + document.getElementById('cssCode').value + '';
    var jsCode = '' + document.getElementById('jsCode').value + '';
    var frame = document.getElementById('preview-window').contentWindow.document;
    frame.open();
    frame.write(htmlCode + cssCode + jsCode);
    frame.close();
  
    // Save code to localStorage
    saveCodeToLocalStorage();
  }
  
  // Function to show/hide code sections
  function show(x) {
    document.getElementById('html').style.display = 'none';
    document.getElementById('css').style.display = 'none';
    document.getElementById('js').style.display = 'none';
    document.getElementById('result').style.display = 'none';
    document.getElementById(x).style.display = 'block';
  }
  
  // Function to show all code sections when the window is resized
  function show_all() {
    if (window.innerWidth >= 992) {
      document.getElementById('html').style.display = 'block';
      document.getElementById('css').style.display = 'block';
      document.getElementById('js').style.display = 'block';
      document.getElementById('result').style.display = 'block';
    }
    if (window.innerWidth < 992 && document.getElementById('html').style.display == 'block') {
      document.getElementById('css').style.display = 'none';
      document.getElementById('js').style.display = 'none';
      document.getElementById('result').style.display = 'none';
    }
  }
  
  // Add event listener to load code from localStorage and show the initial preview
  window.addEventListener('load', function () {
    loadCodeFromLocalStorage();
    showPreview();
  });
  
  // Add event listeners to the HTML, CSS, and JS code areas to continuously update the preview
  document.getElementById('htmlCode').addEventListener('input', showPreview);
  document.getElementById('cssCode').addEventListener('input', showPreview);
  document.getElementById('jsCode').addEventListener('input', showPreview);
  