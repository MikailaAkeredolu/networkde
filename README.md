# communitycoders
 <form role="form" id="memberForm">
                <div class="form-group" >

                  <!--  <div id="changeShipOutputs"> -->
                        <label for="username">Userame:</label>
                        <input type="text" class="form-control"  id="username" name="username">

                        <label for="password">Password:</label>
                        <input type="password" class="form-control" id="password" name="password" value="Welcome123">
                  <!--  </div> -->

                    <!--
                    <div class="checkbox">
                        <label><input type="checkbox" id="changeShip"><p id="authlabel">Use Local Auth<p></p></label>
                    </div>
                    <div id="changeShipInputs">
                        <label for="partner_id">AHC Member ID</label>
                        <input type="text" class="form-control" id="partner_id" name="partner_id">
                    </div>
                    -->

                    <label for="external_id">AHC Member ID</label>
                    <input type="text" class="form-control" id="external_id" name="external_id">

                    <label for="email">Email address:</label>
                    <input type="email" class="form-control" id="email" name="email">

                    <label for="first_name">Firstname</label>
                    <input type="text" class="form-control" id="first_name" name="first_name">

                    <label for="last_name">Lastname</label>
                    <input type="text"  class="form-control" id="last_name" name="last_name">

                    <label for="address1">Address1</label>
                    <input type="text" class="form-control" id="address1" name="address1">

                    <label for="address2">Address2</label>
                    <input type="text" class="form-control" id="address2" name="address2">

                    <label for="city">City</label>
                    <input type="text" class="form-control" id="city" name="city">

                    <label for="state">State</label>
                    <input type="text" class="form-control" id="state" name="state">

                    <label for="zipcode">Zipcode</label>
                    <input type="text" class="form-control" id="zipcode" name="zipcode">

                    <!--<fieldset>-->
                    <label for="phones">Mobile</label>
                    <input type="text" class="form-control" id="mobile" name="phones[mobile]">

                    <label for="phones">Home</label>
                    <input type="text" class="form-control" id="home" name="phones[home]">

                    <label for="phones">Office</label>
                    <input type="text" class="form-control" id="office" name="phones[office]">
                    <!--</fieldset>-->

                    <label for="tenant_id" id="tenantidLabel">Tenant_ID (select one):</label>
                    <select class="form-control" id="tenant_id" name="tenant_id">
                        <option value="AHC">AHC</option>
                        <option value="KAISER">KAISER</option>
                    </select>

                    <!--<label for="role">Role</label>-->
                    <input type="hidden" class="form-control" id="role" name="role" value="MEMBER">

                    <label for="birthdate">Birth Date</label>
                    <input type="date" class="form-control" id="birthdate" name="birthdate">

                    <label for="caremanager_external_id">AHC Care Manager ID</label>
                    <input type="text" class="form-control" id="caremanager_external_id" name="caremanager_external_id">

                    <label for="status" id="statuslabel">Status (select one):</label>
                    <!-- <input type="text" class="form-control" id="status" name="status" value="active"> -->
                    <select class="form-control" id="status" name="status">
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                    </select>

                    <label for="effective_date">Effective Date</label>
                    <input type="date" class="form-control" id="effective_date" name="effective_date">

                    <label for="cch_id">CCH_ID</label>
                    <input type="text" class="form-control" id="cch_id" name="cch_id" disabled>

                    <!--<label for="ldap_id">LDAP ID</label>
                    <input type="text" class="form-control" id="ldap_id" name="ldap_id" disabled> -->

                </div>
                <button id="memberButton" type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
