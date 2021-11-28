let fname = $('#name'),
  email = $('#email'),
  message = $('#message')

const MY_NAME = 'اوس رضا'

$('.final_box').hide(0)

function _(el) {
  return document.getElementById(el)
}

function mailValidation(el) {
  let e = el.val()
  let pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i
  return pattern.test(e)
}

function trim(el) {
  return el.value.replace(/^\s+/, '').replace(/\s+$/, '') // Removes spaces after newlines
}

;(function () {
  emailjs.init('user_Ck06zRIiUGokUmyrfj39a')
})()

function sendMail() {
  let newMail = {
    to_name: MY_NAME,
    from_name: fname.val(),
    reply_to: email.val(),
    message: message.val()
  }

  emailjs
    .send('service_zm62pdh', 'template_o3vsz2e', newMail)
    .then(result => {
      Swal.fire({
        icon: 'success',
        title: 'موفق!',
        text: 'پیغام شما با موفقیت ارسال شد.',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true
      })
      $('.final_box').find('b').html(fname.val())
      $('.basic_text').fadeOut(0)
      $('.form').fadeOut(0)
      $('.wrapper').addClass('form-success')
      $('.final_box').fadeIn(5000)
    })
    .catch(err => {
      Swal.fire({
        icon: 'error',
        title: 'ناموفق!',
        text: 'ارسال پیغام با خطا مواجه شد، لطفاً دوباره تلاش کنید.',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true
      })
    })
}

$('.form').submit(function (e) {
  e.preventDefault()

  fname.val(trim(_('name')))
  email.val(trim(_('email')))
  message.val(trim(_('message')))

  if (!fname.val()) {
    Swal.fire({
      icon: 'error',
      title: 'خطا!',
      text: 'نام و نام خانوادگی نمی‌تواند خالی باشد.',
      showConfirmButton: false,
      timer: 5000,
      timerProgressBar: true
    })
    return 0
  } else if (!email.val()) {
    Swal.fire({
      icon: 'error',
      title: 'خطا!',
      text: 'ایمیل نمی‌تواند خالی باشد.',
      showConfirmButton: false,
      timer: 5000,
      timerProgressBar: true
    })
    return 0
  } else if (!mailValidation(email)) {
    Swal.fire({
      icon: 'error',
      title: 'خطا!',
      text: 'فرمت ایمیل نامعتبر است.',
      showConfirmButton: false,
      timer: 5000,
      timerProgressBar: true
    })
    return 0
  } else if (!message.val()) {
    Swal.fire({
      icon: 'error',
      title: 'خطا!',
      text: 'متن پیغام نمی‌تواند خالی باشد.',
      showConfirmButton: false,
      timer: 5000,
      timerProgressBar: true
    })
    return 0
  }

  Swal.fire({
    text: 'در حال ارسال اطلاعات',
    didOpen: () => {
      Swal.showLoading()
    }
  })

  sendMail()
})

var developer = Boolean(localStorage.getItem('developer'))

function developerMode(event) {
  let key = event.which || event.keyCode
  if (!developer) {
    if (
      (event.ctrlKey && event.shiftKey && key == 73) ||
      (event.ctrlKey && event.shiftKey && key == 74) ||
      (event.ctrlKey && event.shiftKey && key == 67) ||
      key == 123 ||
      (event.ctrlKey && key == 85)
    ) {
      event.preventDefault()
      return false
    }
  }

  if (event.ctrlKey && event.altKey && event.shiftKey && key == 69) {
    localStorage.setItem('developer', true)
    alert('شما هم اکنون یک توسعه دهنده هستید')
    location.reload()
  }
}

$(document).keydown(function (e) {
  developerMode(e)
})

document.addEventListener('contextmenu', function (event) {
  if (!developer) event.preventDefault()
})

const options = {
  bottom: '64px', // default: '32px'
  right: 'unset', // default: '32px'
  left: '32px', // default: 'unset'
  time: '0.5s', // default: '0.3s'
  mixColor:
    'linear-gradient(to bottom left, #2c0f2b 0%, #150f2c 50%, #100f2c 100%)', // default: '#fff'
  backgroundColor:
    '#50a3a2 linear-gradient(to bottom right, #50a3a2 0%, #53e3a6 100%)', // default: '#fff'
  buttonColorDark: '#100f2c', // default: '#100f2c'
  buttonColorLight: '#fff', // default: '#fff'
  saveInCookies: true, // default: true,
  label: '🌓', // default: ''
  autoMatchOsTheme: false // default: true
}

const darkmode = new Darkmode(options)
window.addEventListener('load', () => darkmode.showWidget())
