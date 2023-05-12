class MailSender {
    constructor() {
        this.mailEl = document.querySelector('.php-email-form')
        this.submitBtn = document.querySelector('.mail-submit')
        this.sendMail()

    }

    async sendMail() {
        // this.mailEl.addEventListener('submit', e => {
        //     e.preventDefault()

        //     console.log('calling')

        //     // this.submitBtn.setAttribute("disabled", true)
        //     // this.spinnerEl.style.display = "block"
        //     // this.formContainerEl.classList.add("opacity")

        //     // const formData = new FormData(this.mailEl)

        //     // let cellphoneHandledToStringNumber = "55" + formData.get("celphone").replace("(", "").replace(")", "").replace(" ", "").replace("-", "")

        //     // const templateParams = {
        //     //     from_name: formData.get("name"),
        //     //     email: formData.get("email"),
        //     //     celphone: cellphoneHandledToStringNumber
        //     // }

        //     // emailjs.send('service_0lhss64', "template_4ndxcal", templateParams, 'gQaGWN1YCHugVnOdV')
        //     //     .then(() => {
        //     //         this.successAlertHandler(templateParams.from_name)
        //     //         this.submitBtn.setAttribute("disabled", false)
        //     //         this.mailEl.reset()
        //     //     })
        //     //     .catch(err => {
        //     //         console.log(err)
        //     //     })
        // })

        $(document).on('submit', '.php-email-form', function (event) {
            event.preventDefault()

            console.log("calling")
        })
    }



    successAlertHandler(user) {
        Swal.fire({
            title: `Ficamos felizes pelo seu interesse ${user}!`,
            text: 'Recebemos o seu email e te responderemos em no máximo 1 minutinho!',
            icon: 'success',
            confirmButtonText: "ok"
        })
            .then(() => {
                this.submitBtn.removeAttribute("disabled")
            })
            .catch(err => {
                console.log(err)
            })
    }


}

window.app = new MailSender()