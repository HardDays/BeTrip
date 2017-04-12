/* <![CDATA[ */

// Jquery validate form booking form
jQuery(document).ready(function(){

	$('#check_avail_form').submit(function(){
		var action = $(this).attr('action');

		$("#message-booking").slideUp(750,function() {
		$('#message-booking').hide();

 		$('#submit-booking')
			.after('<i class="icon-spin4 animate-spin loader"></i>')
			.attr('disabled','disabled');
			
		$.post(action, {
			sender_name: $('#sender_name').val(),
			check_in: $('#check_in').val(),
			check_out: $('#check_out').val(),
			room_type: $('#room_type').val(),
			adults: $('#adults').val(),
			children: $('#children').val(),
			name_booking: $('#name_booking').val(),
			email_booking: $('#email_booking').val(),
			telephone_booking: $('#telephone_booking').val(),
			verify_booking: $('#verify_booking').val()
		},
			function(data){
				document.getElementById('message-booking').innerHTML = data;
				$('#message-booking').slideDown('slow');
				$('#check_avail_form .loader').fadeOut('slow',function(){$(this).remove()});
				$('#submit-booking').removeAttr('disabled');
				if(data.match('success') != null) $('#check_avail_form').slideUp('slow');

			}
		);

		});

		return false;

	});
});

// Jquery validate form detail page contact
jQuery(document).ready(function(){

	$('#contactform_detail').submit(function(){

		var action = $(this).attr('action');

		$("#message-contact-detail").slideUp(750,function() {
		$('#message-contact-detail').hide();

 		$('#submit-contact')
			.after('<i class="icon-spin4 animate-spin loader"></i>')
			.attr('disabled','disabled');
			
		$.post(action, {
			sender_name: $('#sender_name').val(),
			name_contact: $('#name_contact').val(),
			lastname_contact: $('#lastname_contact').val(),
			email_contact: $('#email_contact').val(),
			phone_contact: $('#phone_contact').val(),
			message_contact: $('#message_contact').val(),
			verify_contact: $('#verify_contact').val()
		},
			function(data){
				document.getElementById('message-contact-detail').innerHTML = data;
				$('#message-contact-detail').slideDown('slow');
				$('#contactform_detail .loader').fadeOut('slow',function(){$(this).remove()});
				$('#submit-contact').removeAttr('disabled');
				if(data.match('success') != null) $('#contactform_detail').slideUp('slow');

			}
		);

		});

		return false;

	});
});

/// Jquery validate newsletter
jQuery(document).ready(function(){

	$('#newsletter_2').submit(function(){

		var action = $(this).attr('action');

		$("#message-newsletter_2").slideUp(750,function() {
		$('#message-newsletter_2').hide();
		
		$('#submit-newsletter_2')
			.after('<i class="icon-spin4 animate-spin loader"></i>')
			.attr('disabled','disabled');

		$.post(action, {
			email_newsletter: $('#email_newsletter_2').val()
		},
			function(data){
				document.getElementById('message-newsletter_2').innerHTML = data;
				$('#message-newsletter_2').slideDown('slow');
				$('#newsletter_2 .loader').fadeOut('slow',function(){$(this).remove()});
				$('#submit-newsletter_2').removeAttr('disabled');
				if(data.match('success') != null) $('#newsletter_2').slideUp('slow');

			}
		);

		});

		return false;

	});

});



// Jquery validate form contact
jQuery(document).ready(function(){

	$('#contactform').submit(function(){

		var action = $(this).attr('action');

		$("#message-contact").slideUp(750,function() {
		$('#message-contact').hide();

 		$('#submit-contact')
			.after('<i class="icon-spin4 animate-spin loader"></i>')
			.attr('disabled','disabled');
			
		$.post(action, {
			name_contact: $('#name_contact').val(),
			lastname_contact: $('#lastname_contact').val(),
			email_contact: $('#email_contact').val(),
			phone_contact: $('#phone_contact').val(),
			message_contact: $('#message_contact').val(),
			verify_contact: $('#verify_contact').val()
		},
			function(data){
				document.getElementById('message-contact').innerHTML = data;
				$('#message-contact').slideDown('slow');
				$('#contactform .loader').fadeOut('slow',function(){$(this).remove()});
				$('#submit-contact').removeAttr('disabled');
				if(data.match('success') != null) $('#contactform').slideUp('slow');

			}
		);

		});

		return false;

	});
});

// Jquery validate form subscribe plan
jQuery(document).ready(function(){

	$('#subscribe-plan').submit(function(){

		var action = $(this).attr('action');

		$("#message-subscribe").slideUp(750,function() {
		$('#message-subscribe').hide();

 		$('#submit-plan')
			.after('<i class="icon-spin4 animate-spin loader"></i>')
			.attr('disabled','disabled');
			
		$.post(action, {
			firstname: $('#firstname').val(),
			lastname: $('#lastname').val(),
			email: $('#email').val(),
			phone: $('#phone').val(),
			plan: $('#plan').val(),
			payment_mode: $('#payment_mode').val(),
			verify_plan: $('#verify_plan').val()
		},
			function(data){
				document.getElementById('message-subscribe').innerHTML = data;
				$('#message-subscribe').slideDown('slow');
				$('#subscribe-plan .loader').fadeOut('slow',function(){$(this).remove()});
				$('#submit-plan').removeAttr('disabled');
			}
		);

		});

		return false;

	});
});


  /* ]]> */