var i,tablist,vertical,panels,tabs,cb_types,cc_types,cc_hards,keys={end:35,home:36,left:37,right:39},direction={37:-1,39:1};function str_admin_init(){tablist=document.querySelectorAll("[role=\"tablist\"]"),vertical="getAttribute"in tablist&&"vertical"==tablist.getAttribute("aria-orientation"),panels=document.querySelectorAll("[role=\"tabpanel\"]"),tabs=document.querySelectorAll("[role=\"tab\"]"),cb_types=document.getElementsByName("st_cb_type"),cc_types=document.getElementsByName("st_cc_type"),cc_hards=document.getElementsByName("st_cc_hard");for(var a=0;a<tabs.length;++a)tabs[a].addEventListener("click",clickEventListener),tabs[a].addEventListener("keydown",keydownEventListener),tabs[a].addEventListener("keyup",keyupEventListener),tabs[a].index=a}function clickEventListener(a){var b=a.target;activateTab(b,!1)}function keydownEventListener(a){var b=a.keyCode;b===keys.end?(a.preventDefault(),activateTab(tabs[tabs.length-1])):b===keys.home?(a.preventDefault(),activateTab(tabs[0])):void 0}function keyupEventListener(a){var b=a.keyCode;if(b===keys.left||b===keys.right){for(var c=0;c<tabs.length;++c)tabs[c].addEventListener("focus",focusEventHandler);if(direction[b]){var d=a.target;d.index!==void 0&&(tabs[d.index+direction[b]]?tabs[d.index+direction[b]].focus():b===keys.left?tabs[tabs.length-1].focus():b===keys.right&&tabs[0].focus())}}}function activateTab(a,b){b=b||!0,deactivateTabs(),a.removeAttribute("tabindex"),a.setAttribute("aria-selected","true");var c=a.getAttribute("aria-controls");if(document.getElementById(c).classList.remove("is-hidden"),"adm_filter"==c){var d=document.getElementById("hierarchical").value;document.getElementById("st_adm_hier").disabled=0==d,document.getElementById("st_adm_depth").disabled=0==d}b&&a.focus()}function deactivateTabs(){for(var a=0;a<tabs.length;a++)tabs[a].setAttribute("tabindex","-1"),tabs[a].setAttribute("aria-selected","false"),tabs[a].removeEventListener("focus",focusEventHandler);for(var b=0;b<panels.length;b++)panels[b].classList.add("is-hidden")}function focusEventHandler(a){var b=a.target;setTimeout(checkTabFocus,250,b)}function checkTabFocus(a){var b=document.activeElement;a===b&&activateTab(a,!1)}function openTab(a,b){for(c=0;c<panels.length;c++)panels[c].style.display="none";for(c=0;c<tabs.length;c++)tabs[c].setAttribute("aria-selected","false");if(document.getElementById(b).style.display="block","adm_filter"==b){var c=document.getElementById("hierarchical").value;document.getElementById("st_adm_hier").disabled=0==c,document.getElementById("st_adm_depth").disabled=0==c}a.currentTarget.setAttribute("aria-selected","true"),a.stopPropagation()}function checkNameSet(a){document.getElementById("submit").disabled=0===a.currentTarget.value.length,a.stopPropagation()}function linkAdm(a,b){a.currentTarget.setAttribute("aria-checked",a.currentTarget.checked),document.getElementById("admlist"+b).disabled=!1===a.currentTarget.checked,!1===a.currentTarget.checked&&(document.getElementById("admlist"+b).checked=!1,document.getElementById("admlist"+b).setAttribute("aria-checked","false"),document.getElementById("admlist"+b).removeAttribute("checked")),a.stopPropagation()}function ariaChk(a){a.currentTarget.setAttribute("aria-checked",a.currentTarget.checked),a.currentTarget.checked?a.currentTarget.setAttribute("checked","checked"):a.currentTarget.removeAttribute("checked")}function linkH(a,b){document.getElementById("st_adm_hier").disabled=0===b,document.getElementById("st_adm_depth").disabled=0===b,0===b&&(document.getElementById("st_adm_hier").value=0,document.getElementById("st_adm_depth").value=0),a.stopPropagation()}function hideCnt(a){var b=0==document.getElementById("st_update_count_callback").value.length;b?(document.getElementById("count_tab_0").classList.add("is-hidden"),document.getElementById("count_tab_1").classList.remove("is-hidden")):(document.getElementById("count_tab_0").classList.remove("is-hidden"),document.getElementById("count_tab_1").classList.add("is-hidden"),document.getElementById("cb_sel").checked=!1,document.getElementById("cb_sel").setAttribute("aria-selected","false"),document.getElementById("cb_any").checked=!1,document.getElementById("cb_any").setAttribute("aria-selected","false"),document.getElementById("cb_std").checked=!0,document.getElementById("cb_std").setAttribute("aria-selected","false"),hideSel(a,0)),a.stopPropagation()}function hideSel(a,b){for(var c=0;c<cb_types.length;c++)cb_types[c].setAttribute("tabindex","-1"),cb_types[c].setAttribute("aria-selected","false"),cb_types[c].removeAttribute("checked");cb_types[b].setAttribute("tabindex","0"),cb_types[b].setAttribute("aria-selected","true"),cb_types[b].setAttribute("checked","checked"),2===b?(document.getElementById("count_sel_0").classList.add("is-hidden"),document.getElementById("count_sel_1").classList.remove("is-hidden")):(document.getElementById("count_sel_0").classList.remove("is-hidden"),document.getElementById("count_sel_1").classList.add("is-hidden")),a.stopPropagation()}function ccSel(a,b){0===b?(document.getElementById("control_tab_0").classList.remove("is-hidden"),document.getElementById("control_tab_1").classList.add("is-hidden")):(document.getElementById("control_tab_0").classList.add("is-hidden"),document.getElementById("control_tab_1").classList.remove("is-hidden"));for(var c=0;c<cc_types.length;c++)cc_types[c].setAttribute("tabindex","-1"),cc_types[c].removeAttribute("checked");cc_types[b].setAttribute("tabindex","0"),cc_types[b].setAttribute("checked","checked"),a.stopPropagation()}function cchSel(a,b){for(var c=0;c<cc_hards.length;c++)cc_hards[c].setAttribute("tabindex","-1"),cc_hards[c].removeAttribute("checked");cc_hards[b].setAttribute("tabindex","0"),cc_hards[b].setAttribute("checked","checked"),a.stopPropagation()}function switchMinMax(a){var b=0==document.getElementById("st_cc_umin").value,c=0==document.getElementById("st_cc_umax").value;document.getElementById("st_cc_min").disabled=b,document.getElementById("st_cc_max").disabled=c,a.stopPropagation()}function checkMinMax(a){var b=document.getElementById("st_cc_min").value,c=document.getElementById("st_cc_max").value;b>c&&"st_cc_min"===a.currentTarget.id&&(document.getElementById("st_cc_max").value=b),b>c&&"st_cc_max"===a.currentTarget.id&&(document.getElementById("st_cc_min").value=c),a.stopPropagation()}
