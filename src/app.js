window.onload = function() {
    let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
    let action = ['ate', 'peed on', 'crushed', 'broke'];
    let what = ['my homework', 'my phone', 'the car', 'the internet'];
    let when = [
      'before the class',
      'when I was sleeping',
      'while I was exercising',
      'during my lunch',
      'while I was praying'
    ];
  
    function generateExcuse() {
      let randomWho = who[Math.floor(Math.random() * who.length)];
      let randomAction = action[Math.floor(Math.random() * action.length)];
      let randomWhat = what[Math.floor(Math.random() * what.length)];
      let randomWhen = when[Math.floor(Math.random() * when.length)];
      return `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;
    }
  
    document.getElementById('excuse').innerHTML = generateExcuse();
  };
  