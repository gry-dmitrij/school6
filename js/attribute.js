"use strict";
(function($){
$.fn.extend({
	attributesSubMenu:function(options) {
		let defaults = {
			className: ".nav",
			menuPath: "/",
		}
		let settings = $.extend(defaults, options);


		let monitorSettings = {
			className: settings.className,
			elemAdded: elemAdded,
		};

		let menu = null;
		let path = $.getPath() + settings.menuPath;
		$.ajax({
			url: path,
			success: function(html) {
				menu = html;
				$().monitorTag(monitorSettings);
			},
		})

		function elemAdded(elem){
			if (menu && elem)
				$(elem).append(menu);
		}
	}
});
})(jQuery);
