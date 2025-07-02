// import { load } from '@fingerprintjs/botd'

// Initialize bot detection
// const botdPromise = load()

// Form submission handler
function initForm () {
  const form = document.getElementById('download-form')
  if (!form) return

  const inputs = form.querySelectorAll('input, button')

  form.addEventListener('submit', async (e) => {
    e.preventDefault()
    
    inputs.forEach(input => { input.disabled = true })
    
    try {
      // const botd = await botdPromise.then(botd => botd.detect())
      const response = await fetch('https://lists.superstruct.tech/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: form.email.value,
          listId: '588595',
          // botd
        })
      })
      
      if (!response.ok) throw new Error('Network response was not ok')
      setTimeout(() => {
        window.location.href = '/nocode/thanks'
      }, 25)
    } catch (error) {
      console.error('Error:', error)
      inputs.forEach(input => { input.disabled = false })
    }
  })
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initForm()
}) 