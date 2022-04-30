<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
	  
	  
        <div class="content-left-search">
          <label class="input">
            <input
              type="text"
              placeholder=""
              maxlength="35"
              data-role="team_name_input"
              v-model="contryName"
              class="search"
            />

            <div class="result-search">
              <div v-if="active">
                <ul class="list-group list-group-flush">
                  <li
                    @click="onchage(item)"
                    v-for="(item, key) in qSearch"
                    :key="key"
                    class="list-group-item"
                  >
                    {{ item }}
                  </li>
                </ul>
              </div>
              <p v-if="err">
                {{ err }}
              </p>
            </div>

            <button
              :class="getClass"
              data-action="set_team_name"
              @click="handleClick"
            ></button>
          </label>
        </div>
		
		<left-component :country="country"/>
	</div>

      <div class="col-md-6 content-right" style="background: #f7f7f7">
        <component :is="componentKeys[showScreen]" 
		:data="responseData"
		/>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
import componentKeys from "../data/componentKeys";
import ImgBlock from "./ImgBlock";
import ResultBlock from "./ResultBlock";
import LeftComponent from "./LeftComponent";
export default {
  name: "TeamName",
  components: {
	 ImgBlock,
	 ResultBlock,
	 LeftComponent
  },
  data() {
    return {
      active: false,//для скрытия и показа списка городов в поиске
      country: [],//хранит список городов
      contryName: "",//хранит введеное название из инпута
      err: false,//для вывода ошибок
      screen:'',
	  responseData:[],//сюда ложим json по запросу выбраного города
	  buttons_status:''//состояние кнопки
    };
  },
  mounted() {
	  
	this.screen = 'img_block';
	  
	  //получаем список городов
    axios
      .get(
        "https://raw.githubusercontent.com/David-Haim/CountriesToCitiesJSON/master/countriesToCities.json"
      )
      .then((response) => {
        this.country = response.data.Kazakhstan;
      });

    this.init();
  },
  watch: {
    contryName: function (val) {
      if (val == "") {
        this.active = false;
		this.buttons_status = '';
        this.err = false;
      }
      if (val) {
        this.active = true;
      }
    },
  },
  computed: {
    getClass() {
		//классы для изменения состояния кнопок
      return {
        buttons: this.buttons_status == '',//норм состояние
        buttons1: this.buttons_status == 'buttons1',//ошибка
		buttons2: this.buttons_status == 'buttons2',//очистить
		buttons3: this.buttons_status == 'buttons3',//загрузчик, loader
      };
    },
    qSearch() {
		//быстрый поиск
      let contryName = this.contryName;
      var regV = /[а-яА-Я]/;

      if (contryName.search(regV) != -1) {
        this.active = false;
		this.buttons_status = 'buttons1';
        this.err = "Нельзя вводить кирилицу";
        return false;
      }

      let result = this.country.filter((elem) => {
        return elem.toLowerCase().includes(contryName.toLowerCase());
      });

      if (result.length < 1 && contryName != "") {
        this.active = false;
		this.buttons_status = 'buttons1';
        this.err = "We didn’t found such city. Please check spelling";
      }

      if (result.length >= 1 && contryName != "") {
        //this.active=true;
        //document.querySelector('.result-search div').style.display='block';
        return result;
      } else {
      }
    },
	showScreen(){
		return this.screen;
	}
  },
  methods: {
    init() {
		
		
		
      document.addEventListener("click", () => {
		  //скрытие списка городов в поиске по экрану
        this.active = false;
      });
	  
	
	  
	  
    },
    onchage(value) {
		//метод для выбора города из списка
		
      this.contryName = value;
    },
    handleClick() {
		
	
	 var el = event.target;
		if (el.className == "buttons2") {
			//при состоянии выбор
		 this.contryName ='';
		 this.buttons_status = 'buttons1';//вернуть кнопку в первоначальное состояние
		 this.screen = 'img_block';
         return false;//если нужно вернуть экран в первый вид то запрс не нужен
	}
	
	 var el = event.target;
		if (el.className == "buttons1") {
			//при состоянии ошибка
		 this.contryName ='';
		 this.buttons_status = 'buttons1';//вернуть кнопку в первоначальное состояние
         return false;//если нужно очистить поле то не нужен запрос
	}
		
      var $this = this;
	  this.buttons_status = 'buttons3';//показываем загрузчик ожидания
	  
	  
//отпрвка запроса на получение информации по городу



      axios
        .get(
          "https://qvjgl.mocklab.io/delivery/check?search=" +
            this.contryName.toLowerCase()
        )
        .then((res) => {
         $this.screen = 'result_block';
		  $this.responseData=res.data;
          $this.buttons_status = 'buttons2'//меняем состояние кнопки
        })
        .catch((url) => {
			$this.buttons_status = 'buttons1';
          $this.err = "Запрос ничего не вернул";
        });
    },
  },
  setup(props) {
    return {
      componentKeys,
    };
  }
};
</script>
<style scope="less">

</style>
