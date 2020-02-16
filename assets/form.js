$(document).ready(function () {
    $('#btndk').click(function () {
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
			$('#modalthanks').modal('show');
            $('#error_message').hide();
        }
        else
        {
            $('#error_message').show();       
        }
    }
});
