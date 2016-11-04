jQuery(document).ready(function () {

    createTable("input_10.json", "table_10_id" );
    createTable("input_100.json", "table_100_id" );
    createTable("input_1000.json", "table_1000_id" );
    createTable("input_10000.json", "table_10000_id" );

//DG szellemi tulajdona és szar is amúgy 
    // $("#table_10_id thead input[type='text']").on('keyup change', function () {
    //     oTable
    //         .column($(this).parent().index() + ':visible')
    //         .search(this.value)
    //         .draw();
    // });
    //
    // $("#table_10_id thead input[type='checkbox']").on('click', function () {
    //     if (this.checked) {
    //         oTable
    //             .column($(this).parent().index() + ':visible')
    //             .search('true')
    //             .draw();
    //     } else {
    //         oTable
    //             .column($(this).parent().index() + ':visible')
    //             .search('')
    //             .draw();
    //     }
    // });
})
;

function createTable(input, tableID){

    $.getJSON(input, function (data) {
        var oTable = $('#'+tableID).DataTable({
            'data': data,
            "fixedHeader": {
                "header": true,
                "footer": false
            },
            "stateSave": true, // ez a visszatöltés
            "pagingType": "full_numbers",
            "processing": true,
            "paging": true,
            "deferRender": true,
            "columns": [
                {"data": "_id"}, //, "visible": false, "searchable": false, "orderable": false, "search": false},
                {"data": "index"},
                {"data": "guid"},
                {"data": "isActive"},
                {"data": "balance"},
                {"data": "picture"}
                // {
                //     "data": "IsActive", "search": false, "render": function (data, type, row) {
                //     //alert(data);
                //     if (data == true) {
                //         return '<input checked="checked" class="check-box" disabled="disabled" type="checkbox">';
                //     } else {
                //         return '<input class="check-box" disabled="disabled" type="checkbox">';
                //     }
                //     return data;
                // }
                // },
                // {
                //     "searchable": false, "orderable": false, "search": false,
                //     "render": function (data, type, row) {
                //         //alert(data);
                //
                //         var editbtn = '<a class="btn btn-warning" href="/Customer/Edit/' + row["CustomerId"] + '"><i class="fa fa-pencil-square-o"></i> ' + '@(SiteLanguage.edit)' + '</a>'
                //         var detailsbtn = '<a class="btn btn-info" href="/Customer/Details/' + row["CustomerId"] + '"><i class="fa fa-info-circle"></i> ' + '@(SiteLanguage.details)' + '</a>'
                //         var deletebtn = '<a class="btn btn-danger" href="/Customer/Delete/' + row["CustomerId"] + '"><i class="fa fa-trash-o fa-lg"></i> ' + '@(SiteLanguage.delete)' + '</a>'
                //
                //         if (isadmin || row["IsActive"]) {
                //             return editbtn + detailsbtn + deletebtn;
                //         }
                //         else {
                //             return detailsbtn;
                //         }
                //     }
                // }
            ],
            "order": [0, "asc"],
            //"dom": 'frtiS',
            //"scrollY": 500,
            //"scrollX": true,
            //"scrollX": false,
            //"responsive": false,
            //"scrollCollapse": true,
            //"scroller": {
            //    loadingIndicator: false
            //},
            //"width":"100%",
            //"responsive": false,
        });
    })

}


