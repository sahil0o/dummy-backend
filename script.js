document.getElementById('userForm').addEventListener('submit', async function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
  
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email })
      });
  
      if (response.ok) {
        const result = await response.json();
        alert('User created successfully');
        console.log(result);
      } else {
        const error = await response.json();
        alert(`Error: ${error.message}`);
      }
    } catch (error) {
      alert('An error occurred while submitting the form');
      console.error('Error:', error);
    }
  });
  