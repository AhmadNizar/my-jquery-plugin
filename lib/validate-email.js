(function ($) {
	$.fn.emailValidator = function () {

		// your code here
		const regex = /^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
  		return regex.test(this.val());
	}
})(jQuery)
