<template>


 <hot-table :data="csvData" :rowHeaders="true" :colHeaders="true"></hot-table>


  <div>
    <table>
      <thead>
        <tr>
          <th v-for="header in csvData[0]" :key="header">{{ header }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in csvData" :key="index">
          <td v-for="cell in row" :key="cell">{{ cell }}</td>
        </tr>
      </tbody>
    </table>
  </div>

  


</template>

<script>
import { HotTable } from '@handsontable/vue3';
import 'handsontable/dist/handsontable.full.css';

export default {

  components: {
      HotTable
    },


  data() {
    return {
      csvData: [],
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
        console.log('iris data get 성공');
        
        
        const lines = response.data.split('\n');
        if (lines.length > 0) {
          const headers = lines[0].split(',');
          console.log(headers);
          this.csvData.push(headers);

          for (let i = 1; i < lines.length; i++) {
            const values = lines[i].split(',');
            this.csvData.push(values);
          }
          console.log('csvData list haeder 형태 : ', this.csvData[0])
          console.log('csvData list data 형태 : ', this.csvData[1])
        }
      })
      .catch(error => {
        console.error('Error fetching CSV file:', error);
      });
  },
};
</script>

<style>
/* Add CSS styles here to make the table look beautiful */
.table {
  border-collapse: collapse;
  width: 100%;
}

.table th, .table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.table th {
  background-color: #f2f2f2;
}

.table tr:hover {
  background-color: #f5f5f5;
}
</style>