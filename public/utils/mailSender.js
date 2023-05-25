class MailSender {
    constructor() {
        this.sendMail()
    }

    sendMail() {
        //  this.form.addEventListener('submit', e => {
        //      e.preventDefault()

        //      console.log('calling')

        //     //   this.submitBtn.setAttribute("disabled", true)
        //     //   this.spinnerEl.style.display = "block"
        //     //   this.formContainerEl.classList.add("opacity")

        //       const formData = new FormData(this.form)

        //       let cellphoneHandledToStringNumber = "55" + formData.get("cellphone").replace("(", "").replace(")", "").replace(" ", "").replace("-", "")

        //       const templateParams = {
        //           from_name: formData.get("name"),
        //           email: formData.get("email"),
        //           celphone: cellphoneHandledToStringNumber
        //       }

        //       emailjs.send('service_i886f7l', "template_o70ftqt", templateParams, 'hyMMZ8mvv0Jzyp0UL')
        //           .then(() => {
        //               this.successAlertHandler(templateParams.from_name)
        //               this.submitBtn.setAttribute("disabled", false)
        //               this.form.reset()
        //           })
        //           .catch(err => {
        //               console.log(err)
        //           })
        //  })

        $(document).on('submit', '.php-email-form', '.mail-submit', async function (event) {
            event.preventDefault()

            const submitBtn = document.querySelector('.mail-submit')
            const form = document.querySelector('.php-email-form')
            const formData = new FormData(form)

            submitBtn.setAttribute("disabled", true)

            const cellphoneHandledToStringNumber = "55" + formData.get("cellphone").replace("(", "").replace(")", "").replace(" ", "").replace("-", "")

            const templateParams = {
                name: formData.get("name"),
                email: formData.get("email"),
                age: formData.get("age"),
                cellphone: cellphoneHandledToStringNumber
            }

            await emailjs.send('service_i886f7l', "template_o70ftqt", templateParams, 'hyMMZ8mvv0Jzyp0UL')
            await Swal.fire({
                title: `Ficamos felizes pelo seu interesse ${templateParams.name}!`,
                text: 'Recebemos o seu email e te responderemos em no máximo 1 minutinho!',
                icon: 'success',
                confirmButtonText: "ok"
            })

            form.reset()
            submitBtn.removeAttribute("disabled")
        })

        $(document).on('submit', '.php-email-form-modal', '.mail-submit-modal', async function (event) {
            event.preventDefault()

            const submitBtn = document.querySelector('.mail-submit-modal')
            const form = document.querySelector('.php-email-form-modal')
            const formData = new FormData(form)

            submitBtn.setAttribute("disabled", true)

            const cellphoneHandledToStringNumber = "55" + formData.get("cellphone").replace("(", "").replace(")", "").replace(" ", "").replace("-", "")

            const templateParams = {
                name: formData.get("name"),
                email: formData.get("email"),
                age: formData.get("age"),
                cellphone: cellphoneHandledToStringNumber
            }

            await emailjs.send('service_i886f7l', "template_o70ftqt", templateParams, 'hyMMZ8mvv0Jzyp0UL')
            await Swal.fire({
                title: `Ficamos felizes pelo seu interesse ${templateParams.name}!`,
                text: 'Recebemos o seu email e te responderemos em no máximo 1 minutinho!',
                icon: 'success',
                confirmButtonText: "ok"
            })

            form.reset()
            submitBtn.removeAttribute("disabled")
            $('#exampleModal').modal('hide');

        })
    }



    // successAlertHandler(user) {
    //     Swal.fire({
    //         title: `Ficamos felizes pelo seu interesse ${user}!`,
    //         text: 'Recebemos o seu email e te responderemos em no máximo 1 minutinho!',
    //         icon: 'success',
    //         confirmButtonText: "ok"
    //     })
    //         .then(() => {
    //             // this.submitBtn.removeAttribute("disabled")
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    // }


}

window.app = new MailSender()