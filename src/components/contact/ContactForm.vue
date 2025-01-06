<!-- SCRIPTING & FUNCTIONS -->
<script setup lang="ts">
const fromFields = ["Name", "Email"];
</script>
<!-- BODY & STRUCTURE -->
<template>
  <form class="form-box">
    <h2 class="send-head">Send a Message</h2>
    <div class="form-group" v-for="f in fromFields">
      <label class="lbl-detail" :for="f.toLocaleLowerCase()">{{ f }}</label>
      <input
        class="txt-detail"
        type="text"
        :id="f.toLocaleLowerCase()"
        :name="f.toLocaleLowerCase()"
        required
      />
    </div>
    <div class="form-group" id="form-group-msg">
      <label for="message" class="lbl-detail">Message</label>
      <textarea id="message" name="message" rows="5" required></textarea>
    </div>
    <button class="btn-submit">
      Send Message <i class="send-icon pi pi-send"></i>
    </button>
  </form>
</template>
<!-- STYLING -->
<style>
.form-box {
  color: var(--color-light);
  border-radius: var(--radius-card);
  background-color: var(--color-dg);
  height: 100%;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.form-group {
  height: 15%;
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
#form-group-msg {
  height: 35%;
}
.send-head {
  width: fit-content;
  height: fit-content;
  color: var(--color-light);
}

.lbl-detail {
  width: 20%;
  height: 50%;
}

.txt-detail,
#message {
  width: 80%;
  background-color: var(--color-dark);
  border: 2px black solid;
  border-radius: var(--radius-card);
}

#message {
  color: var(--color-light);

}

.txt-detail {
  color: var(--color-light);
;
  height: 60%;

}

.btn-submit {
  padding: 2%;
  position: relative;
  height: fit-content;
  width: fit-content;
  font-size: 0.9em;
  font-weight: 400;

  color: var(--color-accent);
  border: solid 2px var(--color-accent);
  border-radius: 30px;
  background-color: transparent;

  z-index: 2;
  overflow: hidden;
  &:hover {
    color: var(--color-light);
    cursor: pointer;
  }

  &:hover:after {
    left: 0;
    width: 100%;
    border-radius: 30px;
    color: var(--color-light);
  }

  &:after {
    background-color: var(--color-accent);
    border-radius: 30px;
    overflow: hidden;
    position: absolute;
    content: "";
    width: 0;
    height: 100%;
    top: 0;
    right: 0;
    z-index: -1;

    transition: all 0.4s ease;
  }
}
</style>
