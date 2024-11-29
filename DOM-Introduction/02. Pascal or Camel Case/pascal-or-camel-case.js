function solve() {
  let text = document.getElementById('text').value.toLowerCase();
  let caseParameter = document.getElementById('naming-convention').value;

  let result = '';
  switch (caseParameter) {
      case 'Camel Case':
            result = text
                .split(' ')
                .map((word, index) =>
                        index === 0 ? word : word.charAt(0).toUpperCase() + word.substring(1))
                .join('');
          break;
      case 'Pascal Case':
          result = text
              .split(' ')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join('');
          break;
      default:
          result = 'Error!';
          break;
  }

  document.getElementById('result').innerHTML = result;
}