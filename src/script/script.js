function show_info(info_type) {
    var info_box_id = info_type + "-box";
    var info_arrow_up = info_type + "-arrow-up";
    var info_arrow_down = info_type + "-arrow-down";

    var info_box_elmt = document.getElementById(info_box_id);
    var arrow_up_elmt = document.getElementById(info_arrow_up);
    var arrow_down_elmt = document.getElementById(info_arrow_down);

    if (info_box_elmt.style.display === "none") {
        info_box_elmt.style.display = "block";
        arrow_up_elmt.style.display = "inline";
        arrow_down_elmt.style.display = "none";
    }
    else {
        info_box_elmt.style.display = "none";
        arrow_up_elmt.style.display = "none";
        arrow_down_elmt.style.display = "inline";
    }
}