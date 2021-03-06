<div class="dashboard-box background-white border-color-1 border-left-2"<?php if (isset($dismissid)) { echo " id=\"$dismissid\""; } ?>>
	<div class="title uppercase border-bottom border-color-1 text-large">
		<a href="<?php echo $url ?>" class="fore-color-inherit" title="<?php echo $title ?>">
			<?php if (isset($image)): ?>
			<img src="<?php echo $image ?>" alt="" />
			<?php endif; ?>
			<span class="underline_onhover "><?php echo $title ?></span>
			<?php if (isset($dismissid) && strlen($dismissid)): ?>
			<span class="fa fa-close icon-small dismiss no-phone" onclick="$('#<?php echo $dismissid ?>').fadeOut(250); localStorage.setItem('<?php echo $dismissid ?>', 'ok');"></span>
			<script>
				$(document).ready(function () {
					if ( !!localStorage.getItem('<?php echo $dismissid ?>') ) {
						$('#<?php echo $dismissid ?>').hide(0);
					}
				});
			</script>
			<?php endif; ?>
		</a>
	</div>
	<div class="content"><?php echo $content ?></div>
	<?php if (isset($bottom)): ?>
	<div class="bottom"><?php echo $bottom ?></div>
	<?php endif; ?>
</div>
