function autocomplete() {
  document.addEventListener("DOMContentLoaded", function() {
    var inputAddressAdd = document.getElementById('employee_address_add');
    var inputAddressEdit = document.getElementById('employee_address_edit');
    var inputAdressSign = document.getElementById('user_address');

    if (inputAddressAdd) {
      var autocomplete = new google.maps.places.Autocomplete(inputAddressAdd, { types: [ 'geocode' ] });
      google.maps.event.addDomListener(inputAddressAdd, 'keydown', function(e) {
        if (e.key === "Enter") {
          e.preventDefault(); // Do not submit the form on Enter.
        }
      });
    }

    if (inputAddressEdit) {
      var autocomplete = new google.maps.places.Autocomplete(inputAddressEdit, { types: [ 'geocode' ] });
      google.maps.event.addDomListener(inputAddressEdit, 'keydown', function(e) {
        if (e.key === "Enter") {
          e.preventDefault(); // Do not submit the form on Enter.
        }
      });
    }

    if (inputAdressSign) {
      var autocomplete = new google.maps.places.Autocomplete(inputAdressSign, { types: [ 'geocode' ] });
      google.maps.event.addDomListener(inputAdressSign, 'keydown', function(e) {
        if (e.key === "Enter") {
          e.preventDefault(); // Do not submit the form on Enter.
        }
      });
    }
  });
}

export { autocomplete };
