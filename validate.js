function validate()
{ 
	var x=document.StudentRegistration.textnames.value;  
   var y= /^[A-z ]+$/.test(x);
   if( !y || x.length<5 )
   {
     alert( "Please provide your Name! with minimum 5 characters" );
     document.StudentRegistration.textnames.focus() ;
     return false;
   }
   var p=document.StudentRegistration.fathername.value;
   var q= /^[A-z ]+$/.test(x);
   if( !q || p.length<5 )
   {
     alert( "Please provide your Father Name! with minimum 5 characters" );
     document.StudentRegistration.fathername.focus() ;
     return false;
   }
   var letters = /^[0-9a-zA-Z]+$/;
   var address = document.StudentRegistration.paddress.value;
   var val= /^[0-9a-zA-Z]+$/.test(address);
   if( !val || (address.length <5 && address.length>=30))
   {
     alert( "Please provide your Postal Address! between 5-30 characters" );
     document.StudentRegistration.paddress.focus() ;
     return false;
   }
   if( val==false)
   {
     alert( "Please provide your Postal Address!" );
     document.StudentRegistration.paddress.focus() ;
     return false;
   }
     
   if( document.StudentRegistration.City.value == "-1" )
   {
     alert( "Please provide your City!" );
     document.StudentRegistration.City.focus() ;
     return false;
   }   
   if( document.StudentRegistration.State.value == "-1" )
   {
     alert( "Please provide your Select State!" );
     
     return false;
   }
   if( document.StudentRegistration.pincode.value == "" ||
           isNaN( document.StudentRegistration.pincode.value) ||
           document.StudentRegistration.pincode.value.length != 6 )
   {
     alert( "Please provide a pincode in the format ######." );
     document.StudentRegistration.pincode.focus() ;
     return false;
   }
   if( document.StudentRegistration.Course.value == "-1" )
   {
     alert( "Please provide your Course!" );
    
     return false;
   }   
   
   
 
  
   var email = document.StudentRegistration.emailid.value;
	  atpos = email.indexOf("@");
	  dotpos = email.lastIndexOf(".");
	 if (email == "" || atpos < 1 || ( dotpos - atpos < 2 )) 
	 {
		 alert("Please enter correct email ID")
		 document.StudentRegistration.emailid.focus() ;
		 return false;
	 }
  if( document.StudentRegistration.mobileno.value == "" ||
           isNaN( document.StudentRegistration.mobileno.value) ||
           document.StudentRegistration.mobileno.value.length != 10 )
   {
     alert( "Please provide a Mobile No in the format 123." );
     document.StudentRegistration.mobileno.focus() ;
     return false;
   }
   $.ajax("info.txt")
	.done(function(data){
		alert(data);
	})
	.fail(function(){
		alert("Sorry not submitted..");
	});
   return( true );
}
