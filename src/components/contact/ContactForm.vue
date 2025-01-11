<!-- SCRIPTING & FUNCTIONS -->
<script setup lang="ts">
import ContactList from "./ContactList.vue";
import { sendEmail } from "../../data/email";
import { ref } from "vue";

const userName = ref("");
const userEmail = ref("");
const message = ref("");


const submitMessage = () => {
  sendEmail(userName.value, userEmail.value, message.value);
  userName.value = "";
  userEmail.value = "";
  message.value = "";
};
const handleSubmit = (event: Event) => {
  event.preventDefault();

  console.log("Form submitted!");
};

</script>
<!-- BODY & STRUCTURE -->
<template>
  <form class="form-box center-col" @submit.prevent="handleSubmit">
    <ContactList />

    <div class="name-mail-box">
      <div class="form-group">
        <label class="lbl-detail fit-content" for="name"
          ><i class="pi pi-user"></i> Name
        </label>
        <input
          class="txt-detail"
          type="text"
          id="name"
          name="name"
          v-model="userName"
          required
        />
      </div>
      <div class="form-group">
        <label class="lbl-detail fit-content" for="email"
          ><i class="pi pi-envelope"></i> Email
        </label>
        <input
          class="txt-detail"
          type="email"
          id="email"
          name="email"
          v-model="userEmail"
          required
        />
      </div>
    </div>
    <div class="form-group-msg center-col">
      <div class="center-msg center-col">
        <label for="message" class="lbl-msg fit-content"
          ><i class="pi pi-pen-to-square"></i> Message</label
        >
        <textarea
          id="message"
          name="message"
          rows="5"
          required
          v-model="message"
        ></textarea>
      </div>
    </div>
    <button class="btn" id="btn-submit" @click="submitMessage()" :disabled="userEmail.length <1 || userName.length <1 || message.length <1" >
      Send Message <i class="send-icon pi pi-send"></i>
    </button>
  </form>
</template>
<!-- STYLING -->
<style>
.form-box {
  color: var(--color-light);
  border-radius: var(--radius-card);
  font-size: larger;
  background: linear-gradient(to bottom, var(--color-dg), var(--color-dark));
  height: 80%;
  width: 50%;
}
.name-mail-box {
  height: 25%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
}

.form-group-msg {
  width: 100%;
  height: 30%;
  gap: 5px;
}
.center-msg {
  width: 60%;
  gap: 5px;
}
.form-group {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 5px;
  height: 100%;
  width: 40%;
}

.lbl-msg,
.lbl-detail {
  font-size: medium;
  color: var(--color-light);
}
.lbl-msg {
  align-self: flex-start;
}

.txt-detail,
#message {
  border: none;
  color: var(--color-light);
  background-color: var(--color-glass);
  border-radius: var(--radius-card);
}

#message {
  width: 100%;
  padding: 1em;
}
.txt-detail {
  padding-left: 1em;
  width: 100%;
  height: 30%;
}

#btn-submit {
  margin-top: 2em;
  padding: 1%;
  font-size: medium;
  &:disabled{
    border: solid var(--color-mg) 2px;
    border-radius: 30px;
    color: var(--color-mg);
    cursor:default;
    &::after{
      content: "";
      background-color: transparent;
    }
  }
}
</style>
