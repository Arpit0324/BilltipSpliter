const varObj = {
    tip: 0
  };
  
  window.onload = () => {
    document.querySelector('#calculate').onclick = calculateTip;
    document.querySelector('#reset').onclick = resetValues;
  
    const tips = document.querySelectorAll('.tip');
  
    tips.forEach(tip => {
      tip.addEventListener('click', handleTipClick);
    });
  };
  
  function handleTipClick(e) {
    varObj.tip = Number(e.target.textContent.split('%')[0]);
  }
  
  function calculateTip() {
    const amount = Number(document.querySelector('#amount').value);
    const people = Number(document.querySelector('#people').value);
    const tipAmountElement = document.querySelector('#tipamount');
    const totalAmountElement = document.querySelector('#totalamount');
  
    if (isNaN(amount) || isNaN(people) || amount <= 0 || people <= 0) {
      alert('Please enter valid values');
      return;
    }
  
    const tip = (amount * varObj.tip) / 100;
    const billPerPerson = (amount + tip) / people;
  
    tipAmountElement.innerText = formatCurrency(tip / people);
    totalAmountElement.innerText = formatCurrency(billPerPerson);
  
    // Clear input fields
    document.querySelector('#amount').value = '';
    document.querySelector('#people').value = '';
  }
  
  function resetValues() {
    const tipAmountElement = document.querySelector('#tipamount');
    const totalAmountElement = document.querySelector('#totalamount');
  
    tipAmountElement.innerText = '0';
    totalAmountElement.innerText = '0';
  
    // Clear input fields
    document.querySelector('#amount').value = '';
    document.querySelector('#people').value = '';
  }
  
  function formatCurrency(amount) {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    }).format(amount);
  }