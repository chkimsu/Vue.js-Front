<template>
<div>
        <h3> 겨우 성공했다. https://vuejsexamples.com/a-easy-to-use-data-table-component-made-with-vue-js-3-x/  이거 써라... </h3>

        <EasyDataTable buttons-pagination 
             :search-field="searchField"
             :search-value="searchValue"  
             table-class-name="customize-table"
             theme-color="#1d90ff"
             rows-per-page="10" 
             header-font-color="#BF4A31"
             header-background-color="#6D67D5"
             border-color="#FFFFFF"  
            :headers="csvData2_header"
            :items="csvData2_data"/>
</div>
</template>
   

<script>
   
export default {
     
     data() {
       return {
        // searchField : 'csb',  요건 찾을 수 있는것. 
        // searchValue : 'xxx',
         csvData2_header : [  { text: "sepal.length", value: "a", sortable: true },
                              { text: "sepal.width", value: "b", sortable: true },
                              { text: "top", value: "c", sortable: true },
                              { text: "bottom", value: "d", sortable: true },
                              {text : "label", value : 'e', sortable : true}],

        csvData2_data : [],
       };
     },
     mounted() {
       // local file을 할 수 있는 방법이 하나다. backend public folder에 놓고 경로로 가져오는것.. 아래처럼. 
       // 근데 build할때마다 public folder에 iris.csv가 없어진다.. 매번 업로드해줘야함. 
       // 프런트엔드 로그는 웹브라우저에서 확인해야함. 
   
       // Make an HTTP GET request to fetch the CSV file from your server.
       this.$http.get('http://localhost:3000/iris.csv')
         .then(response => {
           // Parse the CSV data using a library like papaparse.
           // For simplicity, you can use a basic split operation.        
           
           const lines = response.data.split('\n');
           if (lines.length > 0) {
             for (let i = 1; i < lines.length; i++) {
               const values = lines[i].split(',');
               const myObject =  { a: values[0], b: values[1] , c: values[2], d: values[3], e :values[4]}
               this.csvData2_data.push(myObject);
             }
      }
    }).catch(error => {
           console.error('Error fetching CSV file:', error);
         });
     },
   };
   </script>
   
   <style>
   .customize-table {
     --easy-table-border: 1px solid #8309db;
     --easy-table-row-border: 1px solid #c51d3e;
   
     --easy-table-header-font-size: 20px;
     --easy-table-header-height: 50px;
     --easy-table-header-font-color: #0fcbd9;
     --easy-table-header-background-color: #11de67;
   
     --easy-table-header-item-padding: 10px 15px;
   
     --easy-table-body-even-row-font-color: #09e3f3;
     --easy-table-body-even-row-background-color: #4c5d7a;
   
     --easy-table-body-row-font-color: #1cccf9;
     --easy-table-body-row-background-color: #d8e4f6;
     --easy-table-body-row-height: 50px;
     --easy-table-body-row-font-size: 18px;
   
     --easy-table-body-row-hover-font-color: #88b2f5;
     --easy-table-body-row-hover-background-color: #eee;
   
     --easy-table-body-item-padding: 10px 15px;
   
     --easy-table-footer-background-color: #c61cb5;
     --easy-table-footer-font-color: #af0dd7;
     --easy-table-footer-font-size: 14px;
     --easy-table-footer-padding: 0px 10px;
     --easy-table-footer-height: 50px;
   
     --easy-table-rows-per-page-selector-width: 70px;
     --easy-table-rows-per-page-selector-option-padding: 10px;
     --easy-table-rows-per-page-selector-z-index: 1;
   
   
     --easy-table-scrollbar-track-color: #2d3a4f;
     --easy-table-scrollbar-color: #2d3a4f;
     --easy-table-scrollbar-thumb-color: #0ed03b;;
     --easy-table-scrollbar-corner-color: #2d3a4f;
   
     --easy-table-loading-mask-background-color: #0ee869;
   }
   </style>