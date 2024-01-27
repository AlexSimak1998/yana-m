<template>
    <div class="form">
        <div class="form__title text-center">
            <h4>Напишите мне</h4>
            <p>Для покупки или уточнения деталей свяжитесьсо мной наиболее удобным способом</p>
        </div>

        <MyBtn class="my-btn-form flex justify-center items-center" @click="whatsup">WHATS UP</MyBtn>
        <MyBtn class="my-btn-form flex justify-center items-center" @click="insta">INSTAGRAM</MyBtn>

        <Transition name="bounce">
            <div class="form__email" v-if="showForm">
                <div class="form__email-fio">
                    <input type="name" placeholder="ФИО" v-model="fio" :class="{'invalid-input': !fioValid}">
                </div>
                <div class="form__email-contacts flex justify-between">
                    <input type="email " placeholder="Email" v-model="email" :class="{'invalid-input': !emailValid}">
                    <input type="tel" placeholder="Телефон" v-model="tel" :class="{'invalid-input': !telValid}">
                </div>
                <div class="form__email-info flex justify-between">
                    <input type="text" :value="title" disabled="true" >
                    <textarea placeholder="Текст сообщения" v-model="textarea" :class="{'invalid-input': !textareaValid}"></textarea>
                </div>
                <MyBtn class="my-btn-form-sumbmit flex justify-center items-center" @click="submitForm">ОТПРАВИТЬ</MyBtn>
            </div>   
        </Transition>

        <MyBtn class="my-btn-form flex justify-center items-center" @click="showForm = true" v-show="!showForm">EMAIL
        </MyBtn>

        <router-link :to="`/CardPages`" class="self-end my-btn-form-end flex justify-center items-center">
            <MyBtn>НАЗАД</MyBtn>
        </router-link>

    </div>
</template>

<script>
import MyBtn from '../elements/MyBtn.vue';
export default {
    data() {
        return {
            showForm: false,
            title: 'Лот' + " " + this.$route.params.title,
            fio: '',
            email: '',
            tel: '',
            textarea: '',
            fioValid: true,
            emailValid: true,
            telValid: true,
            textareaValid: true
        }
    },
    methods: {
        submitForm() {
            let isFormValid = true;

            this.fioValid = this.fio !== '';
            this.emailValid = this.email !== '';
            this.telValid = this.tel !== '';
            this.textareaValid = this.textarea !== '';

            isFormValid = this.fioValid && this.emailValid && this.telValid && this.textareaValid;

            if (!isFormValid) {
   
            } else {
                console.log(`
                Заголовок: ${this.title} 
                ФИО: ${this.fio} 
                Email: ${this.email}
                Телефон: ${this.tel} 
                Сообщение: ${this.textarea}
            `);

                // Очищаем поля формы после отправки
                this.fio = '';
                this.email = '';
                this.tel = '';
                this.textarea = '';
            }
        },
        insta() {
            window.location.href = 'https://www.figma.com/file/wLXPYuSqGBN1oGasLvncOe/YANA.M?node-id=1%3A59&mode=dev'
        },
        whatsup() {
            window.location.href = 'https://www.figma.com/file/wLXPYuSqGBN1oGasLvncOe/YANA.M?node-id=1%3A59&mode=dev'
        },
    },
    components: {
        MyBtn
    }
}
</script>

<style scoped>
.bounce-enter-active {
  animation: bounce-in 1s;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
.invalid-input {
    border: 1px solid red;
}
.my-btn-form-sumbmit {
    color: #F1F1EF;
    border-radius: 10px;
    background: #55524D;
    max-width: 500px;
    width: 100%;
    height: 50px;
    margin-top: 25px;
    font-size: 18px;
}

.form__email-fio input {
    max-width: 500px;
    width: 100%;
}

.form__email-contacts input {
    max-width: 238px;
    width: 100%;
}

.form__email-info textarea {
    max-width: 500px;
    width: 100%;
    height: 150px;
    margin-top: 25px;
    padding: 24px 18px;
    color: #AFAFAF;
    font-size: 15px;
    border-radius: 10px;
    border: 1px solid #383838;
    background: rgba(40, 40, 40, 0.00);
    resize: none;
    overflow: auto;
}

.form__email-info input {
    padding: 0;
    max-width: 99px;
    width: 100%;    
    height: 22px;
    color: #6B6B6B;
    border: none;
    background: none;
    position: absolute;
    top: 8px;
    right: 20px;
}

.form__email-info {
    position: relative;
}

input {
    margin-top: 25px;
    padding: 14px 20px;
    color: #AFAFAF;
    font-size: 15px;
    border-radius: 10px;
    border: 1px solid #383838;
    background: rgba(40, 40, 40, 0.00);
}

.form {
    padding: 40px 0;
    font-family: "Zen Antique Soft";
    display: flex;
    flex-direction: column;
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
    min-height: 100vh;
    justify-content: center;
}

h4 {
    color: #383838;
    font-size: 40px;
    font-style: normal;
    letter-spacing: 1.2px;
    margin-top: 52px;
}

.my-btn-form {
    margin-top: 25px;
    border-radius: 10px;
    background: #383838;
    max-width: 500px;
    width: 100%;
    height: 50px;
    color: #F1F1EF;
    font-size: 18px;
    cursor: pointer;
}

.my-btn-form-end {
    border-radius: 10px;
    border: 1px solid #383838;
    max-width: 500px;
    width: 100%;
    height: 50px;
    background: rgba(56, 56, 56, 0.00);
    margin-top: 25px;
    cursor: pointer;
    margin-bottom: 25px;
}

p {
    margin: 5px 0 27px;
    color: #6B6B6B;
    font-size: 18px;
}



@media (max-width: 767.98px) {
    .form {
    padding: 30px 28px;
}

h4{
    font-size: 20px;
    letter-spacing: 0.6px;
    margin: 20px 0 0;
}

p {
    margin: 5px 0 5px;
    color: #6B6B6B;
    font-size: 11px;

}
input{
    margin-top: 15px;
    padding: 10px;
    font-size: 10px;
    height: 37px;
}

.my-btn-form,
.my-btn-form-end,
.my-btn-form-sumbmit {
    height: 37px;
    font-size: 12px;
    margin-top: 15px;
}
.form__email-contacts,
.form__email-contacts input
{
    flex-direction: column;
    max-width:500px ;
}

.form__email-info textarea {
    max-width: 500px;
    width: 100%;
    height: 150px;
    margin-top: 15px;
    padding: 20px 10px;
    color: #AFAFAF;
    font-size: 10px;
  
}
.form__email-info input {
    max-width: 66px;
    height: 14px;
    top: 6px;
    right: 10px;
    font-size: 10px;
}

}

</style>