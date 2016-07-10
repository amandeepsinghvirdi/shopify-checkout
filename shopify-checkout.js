/*
	Author: Amandeep Singh
	Description: Show a custom message on checkout pages and on country selection
	Website: http://www.byaman.com
*/
function countryCheck(country) {
	if(country != 'United States'){           
	   Checkout.$("#country-message").show(0);
	} else {
	   Checkout.$("#country-message").hide(0);
	}
}
if(typeof Checkout === 'object'){
	if(typeof Checkout.$ === 'function'){
		//Default Message will be visible where as country specific message will be hidden
		notificationMsg = '<p id="default-message" style="background-color:#eee; padding:10px; margin:10px 0;">This is a default message. It will appear on page load.</p><p id="country-message" style="background-color:#eee; padding:10px; margin:10px 0; display:none;">This message will appear when you select country other than US.</p>';
		
		//Country Selectbox Selectbox
		$countrySelectboxId = Checkout.$("#checkout_shipping_address_country");
		
		// Insert Default Message on Page Load above the shipping methode section
		Checkout.$(notificationMsg).insertBefore('.section--shipping-address');
		
		// Check Country on Page Load
		countryName = $countrySelectboxId.val();
		
		// Call Country Check function on Page Load
        countryCheck(countryName)

		// Call Country Check function on selectobox change
		$countrySelectboxId.on("change", function(){
			countryName = $countrySelectboxId.val();
			countryCheck(countryName)
		});
		
		
	} // if ends

} // if ends