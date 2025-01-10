<!-- SCRIPTING & FUNCTIONS -->
<script setup lang="ts">
import ContactList from "./ContactList.vue";

const fromFields = ["Name", "Email"];
</script>
<!-- BODY & STRUCTURE -->
<template>
  <form class="form-box card-hover center-col">
    <ContactList />

    <div class="name-mail-box">
      <div class="form-group" v-for="f in fromFields">
        <label class="lbl-detail fit-content" :for="f.toLocaleLowerCase()"
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
    <div class="form-group-msg center-col">
      <div class="center-msg center-col">
        <label for="message" class="lbl-msg fit-content"
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
  gap: 10px;
  background: linear-gradient(to bottom, var(--color-dg), var(--color-dark));
  height: 100%;
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
  height: 40%;
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
  color: var(--color-light);
}
.lbl-msg {
  align-self: flex-start;
}

.txt-detail,
#message {
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
.send-head {
  margin-top: 1em;
}
.btn-submit {
  padding: 1%;
}
</style>
