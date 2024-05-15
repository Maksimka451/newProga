<template>
  <div class="min-h-screen bg-coffee-bean flex flex-col justify-center py-12">
    <div class="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <input type="file" @change="handleFilesUpload()" accept=".csv" class="w-full px-4 py-2 text-gray-700">
        <button @click="submitFiles()" class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Предсказать</button>
      </div>
      <div>
        <h2 class="text-2xl mb-4">Результаты предсказания:</h2>
        <ol class="list-none mb-4">
          <li v-for="(prediction, index) in predictions" :key="index" class="py-2">
            {{ index + 1 }}: {{ prediction }}
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      files: "",
      predictions: []
    }
  },

  methods:{
    submitFiles() {
      console.log(this.files);
      this.is_Loading = true;
      let formData = new FormData();
      for (var i = 0; i < this.files.length; i++) {
        let file = this.files[i];
        formData.append("file", file);
      }
      console.log(this.IP);
      axios
        .post(`http://${process.env.VUE_APP_MAKSIM_IP}/predict/`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log("SUCCESS!!");
          this.predictions = response.data
        })
        .catch(function (response) {
          console.log("FAILURE!!");
          if (response.statusCode == 400) {
            alert("Такой файл уже был загружен! Загрузите другой.");
          }
        })
        .finally(function () {
          this.is_Loading = false;
        });
    },
    handleFilesUpload() {
      this.files = this.$refs.files.files;
    },
  },

  components: {
   
  }
}
</script>

<style></style>
