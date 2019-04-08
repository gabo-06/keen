"use strict";var KTDefaultDatatableDemo={init:function(){var t,a;t={data:{type:"remote",source:{read:{url:"https://keenthemes.com/keen/themes/themes/keen/dist/preview/inc/api/datatables/demos/default.php"}},pageSize:20,serverPaging:!0,serverFiltering:!0,serverSorting:!0},layout:{theme:"default",class:"",scroll:!0,height:550,footer:!1},sortable:!0,pagination:!0,search:{input:$("#generalSearch")},columns:[{field:"id",title:"#",sortable:!1,width:30,type:"number",selector:{class:"kt-checkbox--solid"},textAlign:"center"},{field:"employee_id",title:"Employee ID"},{field:"name",title:"Name",sortable:"asc",template:function(t){return t.first_name+" "+t.last_name}},{field:"hire_date",title:"Hire Date",type:"date",format:"MM/DD/YYYY"},{field:"email",title:"Email"},{field:"status",title:"Status",template:function(t){var a={1:{title:"Pending",class:"kt-badge--brand"},2:{title:"Delivered",class:" kt-badge--metal"},3:{title:"Canceled",class:" kt-badge--primary"},4:{title:"Success",class:" kt-badge--success"},5:{title:"Info",class:" kt-badge--info"},6:{title:"Danger",class:" kt-badge--danger"},7:{title:"Warning",class:" kt-badge--warning"}};return'<span class="kt-badge '+a[t.status].class+' kt-badge--inline kt-badge--pill">'+a[t.status].title+"</span>"}},{field:"type",title:"Type",autoHide:!1,template:function(t){var a={1:{title:"Online",state:"danger"},2:{title:"Retail",state:"primary"},3:{title:"Direct",state:"accent"}};return'<span class="kt-badge kt-badge--'+a[t.type].state+' kt-badge--dot"></span>&nbsp;<span class="kt-font-bold kt-font-'+a[t.type].state+'">'+a[t.type].title+"</span>"}},{field:"Actions",title:"Actions",sortable:!1,width:110,overflow:"visible",autoHide:!1,template:function(){return'\t\t\t\t\t\t<div class="dropdown">\t\t\t\t\t\t\t<a href="javascript:;" class="btn btn-sm btn-clean btn-icon btn-icon-md" data-toggle="dropdown">                                <i class="la la-ellipsis-h"></i>                            </a>\t\t\t\t\t\t  \t<div class="dropdown-menu dropdown-menu-right">\t\t\t\t\t\t    \t<a class="dropdown-item" href="#"><i class="la la-edit"></i> Edit Details</a>\t\t\t\t\t\t    \t<a class="dropdown-item" href="#"><i class="la la-leaf"></i> Update Status</a>\t\t\t\t\t\t    \t<a class="dropdown-item" href="#"><i class="la la-print"></i> Generate Report</a>\t\t\t\t\t\t  \t</div>\t\t\t\t\t\t</div>\t\t\t\t\t\t<a href="javascript:;" class="btn btn-sm btn-clean btn-icon btn-icon-md" title="Edit details">\t\t\t\t\t\t\t<i class="la la-edit"></i>\t\t\t\t\t\t</a>\t\t\t\t\t\t<a href="javascript:;" class="btn btn-sm btn-clean btn-icon btn-icon-md" title="Delete">\t\t\t\t\t\t\t<i class="la la-trash"></i>\t\t\t\t\t\t</a>\t\t\t\t\t'}}]},a=$(".kt_datatable").KTDatatable(t),$("#kt_datatable_destroy").on("click",function(){$(".kt_datatable").KTDatatable("destroy")}),$("#kt_datatable_init").on("click",function(){a=$(".kt_datatable").KTDatatable(t)}),$("#kt_datatable_reload").on("click",function(){$(".kt_datatable").KTDatatable("reload")}),$("#kt_datatable_sort_asc").on("click",function(){a.sort("name","asc")}),$("#kt_datatable_sort_desc").on("click",function(){a.sort("name","desc")}),$("#kt_datatable_get").on("click",function(){if(a.rows(".kt-datatable__row--active"),a.nodes().length>0){var t=a.columns("name").nodes().text();$("#datatable_value").html(t)}}),$("#kt_datatable_check").on("click",function(){var t=$("#kt_datatable_check_input").val();a.setActive(t)}),$("#kt_datatable_check_all").on("click",function(){$(".kt_datatable").KTDatatable("setActiveAll",!0)}),$("#kt_datatable_uncheck_all").on("click",function(){$(".kt_datatable").KTDatatable("setActiveAll",!1)}),$("#kt_datatable_hide_column").on("click",function(){a.columns("email").visible(!1)}),$("#kt_datatable_show_column").on("click",function(){a.columns("email").visible(!0)}),$("#kt_datatable_remove_row").on("click",function(){a.rows(".kt-datatable__row--active").remove()}),$("#kt_form_status").on("change",function(){a.search($(this).val().toLowerCase(),"status")}),$("#kt_form_type").on("change",function(){a.search($(this).val().toLowerCase(),"type")}),$("#kt_form_status,#kt_form_type").selectpicker()}};jQuery(document).ready(function(){KTDefaultDatatableDemo.init()});