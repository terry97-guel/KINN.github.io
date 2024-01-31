$(document).ready(function() {
    var current_cmd_idxs = {
        "demo": 1,
        "fail": 1,
    }
    // demos
    $('select').on('change', function() {
        var sep_idx = this.value.indexOf('_');
        var domain_name = this.value.substring(0, sep_idx);
        var desired_cmd_idx = parseInt(this.value.substring(sep_idx + 1));
        var current_cmd_idx = current_cmd_idxs[domain_name];
        
        // hide current content
        var current_content = $('#content_' + domain_name + "_" + current_cmd_idx.toString());
        current_content.hide();

        // show desired content
        var desired_content = $('#content_' + domain_name + "_" + desired_cmd_idx.toString());
        desired_content.show();

        // switch videos
        var current_vid = $('#vid_' + domain_name + "_" + current_cmd_idx.toString()).get(0);
        var desired_vid = $('#vid_' + domain_name + "_" + desired_cmd_idx.toString()).get(0);
        current_vid.pause();
        desired_vid.play();

        // set current to desired
        current_cmd_idxs[domain_name] = desired_cmd_idx;
    });
});
