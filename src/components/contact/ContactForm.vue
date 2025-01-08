<!-- SCRIPTING & FUNCTIONS -->
<script setup lang="ts">
import ContactList from './ContactList.vue';

const fromFields = ["Name", "Email"];
</script>
<!-- BODY & STRUCTURE -->
<template>
  <form class="form-box">
    <div class="head-box">
    <h2 class="send-head">Send a Message</h2>
    <ContactList/>
  </div>
    <div class="name-mail-box">
      <div class="form-group" v-for="f in fromFields">
        <label class="lbl-detail" :for="f.toLocaleLowerCase()"
          ><i :class="['pi', f === 'Name' ? 'pi-user' : 'pi-envelope']"></i>
          {{ f }}</label
        >
        <input
          class="txt-detail"
          type="text"
          :id="f.toLocaleLowerCase()"
          :name="f.toLocaleLowerCase()"
          required
        />
      </div>
    </div>
    <div class="form-group-msg">
      <div class="center-msg">
        <label for="message" class="lbl-msg"
          ><i class="pi pi-pen-to-square"></i> Message</label
        >
        <textarea id="message" name="message" rows="5" required></textarea>
      </div>
    </div>
    <button class="btn btn-submit">
      Send Message <i class="send-icon pi pi-send"></i>
    </button>
  </form>
</template>
<!-- STYLING -->
<style>
.form-box {
  color: var(--color-light);
  border-radius: var(--radius-card);
  gap:10px;
  background:linear-gradient(to bottom, var(--color-dg),var(--color-dark)) ;
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  
}
.head-box,.name-mail-box {
  height: 25%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
}
.head-box{
  flex-direction: column;
  height: 20%;
  gap: 5px;
}

.form-group-msg {
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

}
.center-msg{
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap:5px;
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
.lbl-detail,
.send-head {
  width: fit-content;
  height: fit-content;
  color: var(--color-light);
}
.lbl-msg{
  align-self: flex-start;
}

.txt-detail,
#message {
  /* border: var(--color-dark) 2px solid; */
  border: none;
  color: var(--color-light);
  background-color: var(--color-dg);
  border-radius: var(--radius-card);
}

#message {
  width: 100%;
}
.txt-detail {
  width: 100%;
  height: 30%;
}
.send-head{
  margin-top: 1em;
}
.btn-submit {

  padding: 1%;
 
}
</style>
