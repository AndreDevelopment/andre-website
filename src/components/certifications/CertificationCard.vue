<!-- SCRIPTING & FUNCTIONS -->
<script setup lang="ts">
import type { CertificationInformation } from "../../data/dataCertification";

const props = defineProps({
  cert: {
    type: Object as () => CertificationInformation,
    required: true,
  },
});
</script>
<!-- BODY & STRUCTURE -->
<template>
  <div class="cert-card card-hover">
    <h3 class="cert-name fit-content">{{ props.cert.name }}</h3>
    <p class="cert-date fit-content">
      <i :class="props.cert.companyIcon" id="cert-icon fit-content"></i> |
      {{ props.cert.date }} •
      <a target="_blank" :href="props.cert.credentialLink"
        >Show Credential <i class="pi pi-arrow-up-right"></i>
      </a>
    </p>
    <p class="cert-desc fit-content">{{ props.cert.description }}</p>
    <div class="pill-box">
      <p class="pill fit-content" v-for="s in props.cert.skills">{{ s }}</p>
    </div>
  </div>
</template>
<!-- STYLING -->
<style>
.cert-card {
  padding: 2em;
  background: linear-gradient(to top, var(--color-dark), var(--color-dg));
  height: 60%;
  width: 40%;
  border-radius: var(--radius-card);

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px;

}

#cert-icon {
  color: var(--color-mg);
}

.pill-box {
  height: 2em;
  width: 100%;
  max-width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  gap: 7px;
}

.pill {
  color: var(--color-accent);
  padding: 1%;
  font-size: 0.8em;
  text-wrap: nowrap;
  border-radius: 30px;
  border: solid 2px var(--color-accent);
}

.cert-name,
.cert-date,
.cert-desc {
  color: var(--color-light);
  font-weight: 300;
}

.cert-name {
  font-size: 1.5em;
}

.cert-date {
  font-size: 0.9em;
  color: var(--color-mg);

  a {
    text-decoration: none;
    color: var(--color-mg);
    &:hover {
      color: var(--color-accent);
    }
    i {
      font-size: 0.8em;
    }
  }
}

.cert-desc {
  margin-top: 1em;
  font-size: 0.9em;
}
</style>
