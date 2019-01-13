---
layout: page
title: Contact
hideTitle: true
shorttitle: CONTACT
permalink: /contact/
show: true
contentFullWidth: true
---

<div class="outer-container">
    <div class="contact-container">
        <form method="POST" action="#">
            <div class="form-group">
                <p>
                    <label for="">Name*</label><br />
                    <input type="text" id="form-name" name='name' /> 
                </p>
            </div>
            <div class="form-group">
                <p>
                    <label for="">Email Address*</label><br />
                    <input type="text" id="form-email" name='email' /> 
                </p>
            </div>
            <div class="form-group">
                <p>
                    <label for="">Message*</label><br />
                    <textarea id="form-body" name="body" rows="10" cols="30"></textarea>
                </p>
            </div>
            <div class="form-group">
                <button class="submit">
                    <span class="button-text">
                        Send Message
                    </span>
                

                    <div class="loader-container hidden">
                        <div class="loader">
                            <img src="/images/loader2.gif" alt="" />
                        </div>
                    </div>

                </button>
            </div>
        </form>
        <div class="buttons">
            <div class="float-left button-container">
                <div class="float-left">
                    <a href="https://www.instagram.com/dave.albert/" target="_blank" class="float-left">
                        <img src="/images/Insta-button.png" alt="" class="float-left"/>
                    </a>
                    <a href="https://twitter.com/dave_albert" target="_blank" class="float-left">
                        <img src="/images/Twitter-button.png" alt="" class="float-left"/>
                    </a>
                </div>
                <div class="float-left">
                    <a href="https://www.linkedin.com/in/davewalbert/" target="_blank" class="float-left">
                        <img src="/images/LinkedIn-button.png" alt="" class="float-left"/>
                    </a>
                    <a href="mailto:email@dave-albert.com" target="_blank" class="float-left">
                        <img src="/images/Email-button.png" alt="" class="float-left"/>
                    </a>
                </div>
            </div>
        </div>
        <div class="clear subscribe right">
            <a href="#" class='open-modal'>
                <img src="/images/subscribe-button.png" alt="" />
            </a>
        </div>
    </div>
</div>

<script type="text/javascript">
    window.shouldrun = function() {
        $('form').on('submit', function(event) {
            event.preventDefault();

            var data = {
                email: encodeURIComponent($('#form-email').val()),
                name: encodeURIComponent($('#form-name').val()),
                body: encodeURIComponent($('#form-body').val()),
            };

            $('.button-text').hide();
            $('.loader-container').show();

            $.ajax({
                url: 'https://fimg8ufejg.execute-api.eu-west-1.amazonaws.com/default/dave-albert-lambda-mail-form',
                method: 'POST',
                data: data,
                dataType: 'json'
            }).done(function(result) {
                if (result.messageId) {
                    console.log(result.messageId);
                    $('.loader-container').hide();
                    $('.button-text').show();

                    $('#form-email').val("");
                    $('#form-name').val("");
                    $('#form-body').val("");

                    setTimeout(function() {
                        alert('Thank you for contacting us.');
                    }, 300);
                } else {
                    alert('Sorry, there was a problem.  Please check the form details, or you can email mail@dave-albert.com');
                }
            });
        });
    }

</script>
<style type="text/css">

.loader-container .loader img {
    height: 40px;
}

</style>
