
//Member Form





//Care Manager Form

$(document).ready(function(){

    $('#caremanagerButton').click(function(e){

        e.preventDefault();
        $.ajax({
    url: "https://data.nationalservice.gov/resource/5vrv-88b8.json",
    type: "GET",
    data: {
      "$limit" : 5000,
      "$$app_token" : "NKgmQ8AX3YA3cIkP6N9r6D6dg"
    }
}).done(function(data) {
  alert("Retrieved " + data.length + " records from the dataset!");
  console.log(data);
            
        
});
        

        
        
//        $.ajax({
//            url: "https://data.nationalservice.gov/resource/y4m3-siyk.json",
//            type: "POST",
//            dataType: "json",
//            crossDomain: true,
//            contentType : "application/x-www-form-urlencoded; charset=UTF-8",
//            headers: {
//                Accept : "application/json; charset=utf-8",
//                Authorization:"Basic Y2xvdWRtaW5lOktRSGg2UEFBTUF2VnVuTzQ2V0tQNjJZNXhqN012ang2N3d0QzBpZ2J5eTdSVXk4bnhzRTBTd1AzTzU3M1UyVWk="
//            },
//            success: function (data) {
//                if(data != " "  || null){
//                    $.ajax({
//                        url: "https://api.secure.cloudmine.me/v1/app/96fc95210061884d1aab3e4204ff3a1e/run/user",
//                        type: "POST",
//                        data : $('#caremanagerForm').serializeJSON(),
//                        dataType: "json",
//                        crossDomain: true,
//                        headers : {
//                            'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
//                            'apikey' : 'QA4GWcKJeUCpS5chL26upMHmFyAy2s9bVhr2',
//                            'X-App-Token' : 'NKgmQ8AX3YA3cIkP6N9r6D6dg'
//                        },
//                        success: function (response) {
//                            alert('Result' +JSON.stringify(response));
//                           // $('#display4').html("RESULT ==>  " + (JSON.stringify(response.result.message)));
//                            console.log("The response is :  " + JSON.stringify(response));
//
//                        }
//
//                    });
//
//                }
//            },
//            error: function(error){
//                console.log(error);
//                alert(error);
//            }
        });
    });

//});


//Care Manager Search

$(document).ready(function(){

    $('#caremanagerSearchButton').click(function(e){

        e.preventDefault();
        $.ajax({
            url: "https://identity-qa.cch.healthcare:9031/as/token.oauth2?grant_type=password&scope=cloudmineProvisioning&username=csr&password=Unb0undID",
            type: "POST",
            dataType: "json",
            crossDomain: true,
            contentType : "application/x-www-form-urlencoded; charset=UTF-8",
            headers: {
                Accept : "application/json; charset=utf-8",
                Authorization:"Basic Y2xvdWRtaW5lOktRSGg2UEFBTUF2VnVuTzQ2V0tQNjJZNXhqN012ang2N3d0QzBpZ2J5eTdSVXk4bnhzRTBTd1AzTzU3M1UyVWk="
            },
            success: function (data) {

                if(data != " "  || null){
                    // $('#display1').html(data.access_token);
                    $.ajax({
                        url: "https://api.secure.cloudmine.me/v1/app/96fc95210061884d1aab3e4204ff3a1e/run/user",
                        type: "GET",
                        data : $('#caremanagerSearchForm').serializeJSON(),
                        dataType: "json",
                        crossDomain: true,
                        headers : {
                            'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
                            'x-cloudmine-apikey' : '0ac9bec7ea0a4d79a92a5e503f3c44b6',
                            'x-cloudmine-sessiontoken' : data.access_token
                        },
                        success: function (response) {

                           // $('#display5').html("SEARCH RESULT ==>  " + (JSON.stringify(response.result.message)));
                            console.log("The response is :  " + JSON.stringify(response));

                            for( x in response){
                                var result = response[x].message;
                                for(y in result){
                                    result[y]
                                    $('#cmusername').val(result[y].profile.username);
                                    $('#cmemail').val(result[y].profile.email);
                                    $('#cmpassword').val(result[y].profile.password);  //disable this
                                    $('#cmfirst_name').val(result[y].profile.first_name);
                                    $('#cmlast_name').val(result[y].profile.last_name);
                                    $('#cmzipcode').val(result[y].profile.zipcode);
                                    $('#cmoffice').val(result[y].profile.phones["office"]);
                                    $('#cmmobile').val(result[y].profile.phones["mobile"]);
                                    $('#cmtenant_id').val(result[y].profile.tenant_id);
                                    $('#cmexternal_id').val(result[y].profile.external_id);
                                    $('#cmrole').val(result[y].profile.role);
                                    $('#cmstatus').val(result[y].profile.status);
                                    $('#cmeffective_date').val(result[y].profile.effective_date);
                                    $('#cmcch_id').val(result[y].profile.cch_id);
                                    //$('#cmldap_id').val(result[y].profile.ldap_id);


                                }
                            }

                        }

                    });

                }
            },
            error: function(error){
                console.log(error);
                alert(error);
            }
        });
    });

});





