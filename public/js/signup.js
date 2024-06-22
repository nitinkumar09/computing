
// SIGN UP PAGE  JS START

// THIS JS FOR SIGNUP PAGE START 

// this js for show error message only for dropdown start
document.addEventListener('DOMContentLoaded', function () {
    const selectBox = document.getElementById('select-box');
    const selectOptions = document.getElementById('select-options');
    const icon = selectBox.querySelector('i');

    selectBox.addEventListener('click', function () {
        selectOptions.classList.toggle('select-hide');
        icon.classList.toggle('select-arrow-active');
    });

    selectOptions.addEventListener('click', function (e) {
        if (e.target.tagName === 'DIV') {
            selectBox.querySelector('span').textContent = e.target.textContent;
            selectOptions.classList.add('select-hide');
            icon.classList.remove('select-arrow-active');

            // Hide error message when an option is selected
            const errorElement = document.querySelector('.custom-select .error-message');
            errorElement.classList.add('hidden');
        }
    });

    document.addEventListener('click', function (e) {
        if (!selectBox.contains(e.target)) {
            selectOptions.classList.add('select-hide');
            icon.classList.remove('select-arrow-active');

            // Show error message if the user clicks outside without selecting an option
            const selectBoxText = selectBox.querySelector('span').textContent.trim();
            const errorElement = document.querySelector('.custom-select .error-message');
            if (selectBoxText === 'Select an option') {
                errorElement.classList.remove('hidden');
            }
        }
    });
    // this js for show error message only for dropdown end


    document.getElementById('signup-form').addEventListener('submit', function (event) {
        event.preventDefault();

        let isValid = true;

        // Full Name validation
        const fullName = document.getElementById('full-name').value.trim();
        const fullNameError = document.getElementById('full-name-error');
        if (!fullName) {
            fullNameError.classList.remove('hidden');
            isValid = false;
        } else {
            fullNameError.classList.add('hidden');
        }

        // Company validation
        const company = document.getElementById('company').value.trim();
        const companyError = document.getElementById('company-error');
        if (!company) {
            companyError.classList.remove('hidden');
            isValid = false;
        } else {
            companyError.classList.add('hidden');
        }






        // Email validation
        const email = document.getElementById('email').value.trim();
        const emailerror = document.getElementById('email-error');
        if (!email) {
            emailerror.classList.remove('hidden');
            isValid = false;
        } else {
            emailerror.classList.add('hidden');
        }

        // Phone Number validation
        const phoneNumber = document.getElementById('phone-number').value.trim();
        const phoneNumberError = document.getElementById('phone-number-error');
        if (!phoneNumber) {
            phoneNumberError.classList.remove('hidden');
            isValid = false;
        } else {
            phoneNumberError.classList.add('hidden');
        }
    });

    //  start js this js for select option
    document.addEventListener('DOMContentLoaded', function () {
        const selectBox = document.getElementById('select-box');
        const selectOptions = document.getElementById('select-options');
        const icon = selectBox.querySelector('i');

        selectBox.addEventListener('click', function () {
            selectOptions.classList.toggle('select-hide');
            icon.classList.toggle('select-arrow-active');
        });

        selectOptions.addEventListener('click', function (e) {
            if (e.target.tagName === 'DIV') {
                selectBox.querySelector('span').textContent = e.target.textContent;
                selectOptions.classList.add('select-hide');
                icon.classList.remove('select-arrow-active');
            }
        });

        document.addEventListener('click', function (e) {
            if (!selectBox.contains(e.target)) {
                selectOptions.classList.add('select-hide');
                icon.classList.remove('select-arrow-active');
            }
        });
    });
});

// RECAPTCHA START
// JavaScript for simulating captcha functionality
const captchaCheckbox = document.getElementById('captcha-checkbox');
const checkboxContainer = document.getElementById('checkbox-container');
const spinner = document.getElementById('spinner');
const checkmarkIcon = document.getElementById('checkmark-icon');

checkboxContainer.addEventListener('click', () => {
    if (!captchaCheckbox.checked) {
        setTimeout(() => {
            spinner.classList.remove('hidden');
            checkboxContainer.classList.add('border-transparent');

            setTimeout(() => {
                spinner.classList.add('hidden');
                captchaCheckbox.checked = true;
                checkmarkIcon.classList.remove('hidden');
                checkboxContainer.classList.remove('border-transparent');
                checkboxContainer.classList.add('border-green-500');
            }, 2000); // 2 seconds spinner
        }, 500); // 0.5 seconds delay before spinner starts
    }
});
//RECAPTCHA END

// this js start for if click any fielf of form than show yellow border with transition
// Function to handle focus and blur events

//  only textarea
const messageInput = document.getElementById('message');
messageInput.addEventListener('focus', handleFocus);
messageInput.addEventListener('blur', handleBlur);
//only textarea

function handleFocus(event) {
    event.target.classList.add('border-yellow-500');
}

function handleBlur(event) {
    event.target.classList.remove('border-yellow-500');
}

// Get all input elements
const inputs = document.querySelectorAll('input[type="text"]');

// Add event listeners to all input elements
inputs.forEach(input => {
    input.addEventListener('focus', handleFocus);
    input.addEventListener('blur', handleBlur);
});
// this js end for if click any fielf of form than show yellow border with transition


//  end js this js for select option