$(document).ready(function () {
    $('#btndk1').click(function () {
        $('#modalstep1').modal('show');
        return false;
    });
});
$(document).ready(function () {
    $('#btndk2').click(function () {
        $('#modalstep1').modal('show');
        return false;
    });
});

function resendbtn() {
	// Set the date we're counting down to
	var countDownDate = new Date(Date.now() + 21000).getTime();
	// Update the count down every 1 second
	var x = setInterval(function() {
	// Get todays date and time
	var now = new Date().getTime();
	// Find the distance between now and the count down date
	var distance = countDownDate - now;

	 // Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	document.getElementById("reotp").innerHTML = "Bạn có thể gửi lại mã xác nhận OTP sau " + seconds + "s";

	 // If the count down is over, write some text 
	if (distance < 0) {
		clearInterval(x);
		document.getElementById("reotp").innerHTML = '<p onclick="resendbtn()">Gửi lại mã OTP</p>';
	}
	}, 100);
}

$(document).ready(function () {
    $('#resendbtndt').click(function () {
        $('#modalstep1').modal('show');
        return false;
    });
});
$(function()
{
	$('#vtfstep1').submit(function(e)
    {
		e.preventDefault();
        $form = $(this);
        //show some response on the button
        $('button[type="submit"]', $form).each(function()
        {
            //$btn = $(this);
            //$btn.prop('type','button' ); 
            //$btn.prop('orig_label',$btn.text());
            //$btn.text('Sending ...');
			$('#divMsg').show();
        });
        $.ajax({
            type: "POST",
            url: 'assets//handler.php',
            data: $form.serialize(),
            success: after_form_submitted_1,
            dataType: 'json' 
        }); 
		return false;
    });	
	function after_form_submitted_1(data) 
    {
        if(data.result == 'success')
        {
			document.getElementById("vtfstep1").reset();
			$('#divMsg').hide();
			$('#modalstep1').modal('hide');
			$('#modalstep2').modal('show');
            $('#error_message').hide();
			
			// Set the date we're counting down to
			var countDownDate = new Date(Date.now() + 22000).getTime();
			// Update the count down every 1 second
			var x = setInterval(function() {
			// Get todays date and time
			var now = new Date().getTime();
			// Find the distance between now and the count down date
			var distance = countDownDate - now;

			  // Time calculations for days, hours, minutes and seconds
			  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
			  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
				document.getElementById("reotp").innerHTML = "Bạn có thể gửi lại mã xác nhận OTP sau " + seconds + "s";

			  // If the count down is over, write some text 
			  if (distance < 0) {
				clearInterval(x);
				document.getElementById("reotp").innerHTML = '<p onclick="resendbtn()">Gửi lại mã OTP</p>';
			  }
			}, 1000);
        }
        else
        {
            $('#error_message').show();       
        }
    }
});

$(function()
{
	$('#vtfstep2').submit(function(e)
    {
		e.preventDefault();
        $form = $(this);
        //show some response on the button
        $('button[type="submit"]', $form).each(function()
        {
            //btn = $(this);
            //$btn.prop('type','button' ); 
            //$btn.prop('orig_label',$btn.text());
            //$btn.text('Sending ...');
			$('#divMsg').show();
        });
        $.ajax({
            type: "POST",
            url: 'assets//handler2.php',
            data: $form.serialize(),
            success: after_form_submitted_2,
            dataType: 'json' 
        });
		return false;        
    });	
	function after_form_submitted_2(data) 
    {
        if(data.result == 'success')
        {
			document.getElementById("vtfstep2").reset();
			$('#divMsg').hide();
			$('#modalstep2').modal('hide');
			$('#modalstep3').modal('show');
            $('#error_message').hide();
        }
        else
        {
            $('#error_message').show();       
        }
    }
});


$(function()
{
	$('#vtfstep3').submit(function(e)
    {
		e.preventDefault();
        $form = $(this);
        //show some response on the button
        $('button[type="submit"]', $form).each(function()
        {
            //btn = $(this);
            //$btn.prop('type','button' ); 
            //$btn.prop('orig_label',$btn.text());
            //$btn.text('Sending ...');
			$('#divMsg').show();
        });
        $.ajax({
            type: "POST",
            url: 'assets//handler3.php',
            data: $form.serialize(),
            success: after_form_submitted_3,
            dataType: 'json' 
        });
		return false;        
    });	
	function after_form_submitted_3(data) 
    {
        if(data.result == 'success')
        {
			document.getElementById("vtfstep3").reset();
			$('#divMsg').hide();
			$('#modalstep3').modal('hide');
			$('#modalstep4').modal('show');
            $('#error_message').hide();
        }
        else
        {
            $('#error_message').show();       
        }
    }
});

$(function()
{
	$('#vtfstep4').submit(function(e)
    {
		e.preventDefault();
        $form = $(this);
        //show some response on the button
        $('button[type="submit"]', $form).each(function()
        {
            //$btn = $(this);
            //$btn.prop('type','button' ); 
            //$btn.prop('orig_label',$btn.text());
            //$btn.text('Sending ...');
			$('#divMsg').show();
        });
        $.ajax({
            type: "POST",
            url: 'assets//handler4.php',
            data: $form.serialize(),
            success: after_form_submitted_4,
            dataType: 'json' 
        }); 
		return false;
    });	
	function after_form_submitted_4(data) 
    {
        if(data.result == 'success')
        {
			document.getElementById("vtfstep4").reset();
			$('#divMsg').hide();
			$('#modalstep4').modal('hide');
			$('#modalthanks').modal('show');
            $('#error_message').hide();
        }
        else
        {
            $('#error_message').show();       
        }
    }
});
