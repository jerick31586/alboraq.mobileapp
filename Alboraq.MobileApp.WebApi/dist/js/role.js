!function(e,a){var d={appModal:e("#appModal"),appModalContent:e("#appModal .modal-content"),btnAddRoleDialog:e("#btnAddRoleDialog"),btnEditRoleDialog:e(".btnEditRoleDialog"),btnAddUserToRoleDialog:e(".btnAddUserToRoleDialog")};a.init=function(){t()};var l=function(e){e.modaltitle=e.modalTitle||void 0,e.modalSize=e.modalSize||void 0,void 0!==e.modaltitle&&d.appModal.find(".modal-title").text(e.modalTitle),void 0!==e.modalSize&&d.appModal.find(".modal-dialog").addClass(e.modalSize),d.appModal.find(".modal-footer").append('<button id="btnClose" type="button" class="btn btn-default">Close</button>')},o=function(e){e.button=e.button||void 0,e.innerHTML=e.innerHTML||void 0,e.disabled=e.disabled||!1;var a=d.appModal.find(e.button);void 0!==e.innerHTML&&a.length>0&&a.html(e.innerHTML),e.disabled&&a.length>0?(a.addClass("disabled"),d.appModal.find("#btnClose").addClass("disabled"),d.appModal.find(".close").removeClass("hidden")):(a.removeClass("disabled"),d.appModal.find("#btnClose").removeClass("disabled"),d.appModal.find(".close").removeClass("hidden"))},n=function(){var a;return(a=d.appModal.find("#alertMessage")).length>0?a.removeClass("alert-success alert-danger").empty():a=e('<div id="alertMessage" class="alert"></div>'),a},t=function(){d.appModal.modal({backdrop:"static",keyboard:!1,show:!1}),d.appModal.on("shown.bs.modal",function(){e("#RoleName")&&e("#RoleName").focus()}),d.btnAddRoleDialog.on("click",function(){l({modalTitle:"Add role",modalSize:"modal-sm"});var a=d.appModal.find(".modal-body");a.append('<p class="text-center"><i class="fa fa-spinner fa-pulse fa-2x"></i></p>'),a.load("/admin/NewRolePartialView",function(){d.frmAddRole=d.appModal.find("#frmAddRole"),d.frmAddRole.validate({rules:{RoleName:"required"},messages:{RoleName:"Please enter a role name"},submitHandler:function(a){var l=e(a);l.valid()&&l.submit(function(a){a.preventDefault();var l,t=e(a.currentTarget);o({button:"#btnAddRole",innerHTML:'Adding role..&nbsp; <i class="fa fa-spinner fa-pulse"></i>',disabled:!0}),l=n(),e.ajax({method:"post",url:"/admin/addrole",data:t.serialize(),success:function(a){t.valid()&&(a.isSuccess?(l.addClass("alert-success"),l.append('<p class="text-center">'+a.message+"</p>")):(l.addClass("alert-danger"),e.each(a.errors,function(e,a){l.append('<p class="text-center">'+a+"</p>")})),d.appModal.find(".modal-body").prepend(l),d.appModal.find("input").val("").focus()),o({button:"#btnAddRole",innerHTML:"Submit",disabled:!1})},error:function(e){l.addClass("alert-danger"),l.append('<p class="text-center">'+e.responseText+"</p>")}})}(event))}})}),d.appModal.modal("show")}),d.appModalContent.on("click","#btnClose",function(){d.appModal.modal("hide"),window.location.reload()}),d.btnEditRoleDialog.on("click",function(a){var t=e(a.currentTarget).data("roleid");l({modaltitle:"Edit role",modalSize:"modal-sm"});var i=d.appModal.find(".modal-body");i.append('<p class="text-center"><i class="fa fa-spinner fa-pulse fa-2x"></i></p>'),i.load("/admin/EditRolePartialView?roleID="+t,function(){d.frmUpdateRole=d.appModal.find("#frmUpdateRole"),d.frmUpdateRole.validate({rules:{RoleName:"required"},messages:{RoleName:"Please enter a role name"},submitHandler:function(a){var l=e(a);l.valid()&&l.submit(function(a){a.preventDefault();var l,t=e(a.currentTarget);o({button:"#btnUpdateRole",innerHTML:'Updating..&nbsp;<i class="fa fa-spinner fa-pulse"></i>',disabled:!0}),l=n(),e.ajax({method:"post",url:"/admin/updaterole",data:t.serialize(),success:function(a){a.isSuccess?l.addClass("alert-success").append('<p class="text-center">'+a.message+"</p>"):e.each(a.errors,function(e,a){l.addClass("alert-danger").append('<p class="text-center">'+a+"</p>")}),d.appModal.find(".modal-body").prepend(l),o({button:"#btnUpdateRole",innerHTML:"Update",disabled:!1})},error:function(e){l.addClass("alert-danger").append('<p class="text-center">'+e.responseText+"</p>")}})}(event))}})}),d.appModal.modal("show")})}}(jQuery,window.RoleWidget=window.RoleWidget||{}),RoleWidget.init();