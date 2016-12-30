var onReadyDeleteComment = function() {
	if (isShow(['moments', 'strategies', 'meetings'])) {
		$(document).on('click', '.delete_comment_button', function(event) {
			event.preventDefault();

			var comment_id = $(this).attr('id').replace('delete_comment_', '');
			var comment = '#comment_' + comment_id;
			$(comment).remove();

			if ($('.comment').length === 0) {
				$('.actions').addClass('no_margin_bottom');
			} else {
				$('.comment').first().addClass('no_margin_top');
			}

			//
			// var url;
			// if ($('body').hasClass('moments show')) {
			// 	url = "/moments/delete_comment?commentid=" + commentid;
			// } else if ($('body').hasClass('strategies show')) {
			// 	url = "/strategies/delete_comment?commentid=" + commentid;
			// } else {
			// 	url = "/meetings/delete_comment?commentid=" + commentid;
			// }

			$.ajax({
                url: '/comments',
                type: 'DELETE',
                data: { id: comment_id }
            });
		});
	}
};

$(document).on("page:load ready", onReadyDeleteComment);
