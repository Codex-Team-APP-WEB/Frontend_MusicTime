<script>
import {MusicianApiService} from "../../profiles/services/musician-api.service.js";
import {CostumerApiService} from "../../profiles/services/costumer-api.service.js";
import {ContractApiService} from "../services/contract-api.service.js";

export default {
  name: "contract-creation",
  props: ['id'],
  components: {},
  data() {
    return {
      buttondisplay: null,
      icondisplay: null,
      templatedisplay: null,
      selectedMusician: null, // Nuevo dato para el músico seleccionado
      selectedMusicianId: null, // Nuevo dato para el ID del músico seleccionado

      musician: null,
      musicianService: new MusicianApiService(),

      costumer: null,
      costumerService: new CostumerApiService(),

      contractService: new ContractApiService(),
      contract: {
        id: 1,
        customerFullName: "",
        musicianFullName: "",
        eventDate: "",
        eventLocation: "",
        reason: ""
      }

    };
  },
  methods: {
    async loadMusician(id) {
      const service = new MusicianApiService();
      const musicianData = await service.getById(id);
      console.log(musicianData); // Agrega esta línea para imprimir los datos en la consola
      this.selectedMusician = musicianData;
    },

    async createContract() {
      try {
        const response = await this.contractService.create(this.contract);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    },

  },
  watch: {
    async selectedMusicianId(newId, oldId) {
      if (newId !== oldId) {
        await this.loadMusician(newId);
      }
    },
  },
  mounted() {
    const musicianId = this.$route.params.id;
    this.musicianService.getById(musicianId).then(response => {
      this.musician = response.data;
    }).catch(e => {
      console.error(e);
    });
    const costumerId = this.$route.params.id;

    this.costumerService.getById(costumerId).then(response => {
      this.costumer = response.data;
    }).catch(e => {
      console.error(e);
    });
  }
}
</script>
<template>
  <h1>Contract creation</h1>
  <p>Fill out all the information that will be used to create and send the contract to the musician.</p>
  <h3 style="text-align: center">MUSICAL PRESENTATION CONTRACT</h3>
  <div class="card">
    <pv-accordion :activeIndex="0">
      <pv-accordion-tab header="PARTES DEL CONTRATO">
        <div class="container">
          <div class="contract-section">

            <div v-if="costumer">
              <p><strong>Artista Musical:</strong></p>
              <p>Nombre del cliente: {{ costumer.fullName }}</p>
              <p>Direccion: {{ costumer.address }}</p>
            </div>

            <div v-if="musician">
              <p><strong>Artista Musical:</strong></p>
              <p>Nombre del manager: {{ musician.fullName }}</p>
              <p>Nombre musical: {{ musician.groupMusician }}</p>
            </div>
          </div>
        </div>
      </pv-accordion-tab>
      <pv-accordion-tab header="INFORMACION DEL EVENTO">
        <div class="event-section">
          <h4>Evento a participar:</h4>
          <div>
            <pv-input-group class="input-group">
              <pv-input-group-addon>
                <i class="pi pi-map"></i>
              </pv-input-group-addon>
              <pv-input-text placeholder="Direccion" />
            </pv-input-group>

            <pv-input-group class="input-group">
              <pv-input-group-addon>$</pv-input-group-addon>
              <pv-input-number placeholder="Monto" />
              <pv-input-group-addon>.00</pv-input-group-addon>
            </pv-input-group>

            <pv-input-group class="input-group">
              <pv-input-group-addon>
                <i class="pi pi-gift"></i>
              </pv-input-group-addon>
              <pv-input-text v-model="contract.reason" placeholder="Motivo del evento" />
            </pv-input-group>

            <pv-input-group class="input-group">
              <pv-input-group-addon>
                <i class="pi pi-pen-to-square"></i>
              </pv-input-group-addon>
              <pv-input-number placeholder="Tipo de contrato" />
            </pv-input-group>

            <pv-input-group class="input-group">
              <pv-input-group-addon>
                <i class="pi pi-clock"></i>
              </pv-input-group-addon>
              <pv-input-text placeholder="Horas" />
            </pv-input-group>

            <pv-input-group class="input-group">


              <div class="card flex flex-wrap gap-3 p-fluid">
                <div class="flex-auto">
                  <label for="icondisplay" class="font-bold block mb-2"> Fecha del evento </label>
                  <pv-calendar v-model="icondisplay" showIcon iconDisplay="input" inputId="icondisplay" />
                </div>
                <div class="flex-auto">
                  <label for="templatedisplay" class="font-bold block mb-2"> Hora del evento </label>
                  <pv-calendar v-model="templatedisplay" showIcon iconDisplay="input" timeOnly inputId="templatedisplay">
                    <template #inputicon="{ clickCallback }">
                      <pv-input-icon class="pi pi-clock cursor-pointer" @click="clickCallback" />
                    </template>
                  </pv-calendar>
                </div>
              </div>

            </pv-input-group>
          </div>
        </div>
      </pv-accordion-tab>

      <pv-accordion-tab header="DECLARACIONES">
        <p class="m-0">
          I. Victor Raul, en lo sucesivo denominado "El Cliente", declara que es una persona física con capacidad legal para contratar y obligarse en términos de este contrato.
        </p>
        <p>II. Juan Diego, en lo sucesivo denominada "El artista musical", declara que es una persona física con capacidad legal para recibir contratos y obligarse en términos de este contrato.</p>
      </pv-accordion-tab>
      <pv-accordion-tab header="OBJETO DEL CONTRATO">
        <p class="m-0">
          III. El Cliente contrata los servicios del Artista musical para la realización de los siguientes trabajos: Presentacion para evento musical. </p>

      </pv-accordion-tab>
      <pv-accordion-tab header="PLAZOS Y TÉRMINOS">
        <p class="m-0">
          IV. El presente contrato tendrá una vigencia de 1 mes, iniciando el dia de envio del contrato y terminando el dia despues de cumplir un mes (30 dias habiles) luego del inicio.</p>
        <p> V. El artista musical se compromete a presentarse al evento conforme a la fecha y hora del evento. </p>

      </pv-accordion-tab>
      <pv-accordion-tab header="COMPENSACIÓN Y PAGOS">
        <p class="m-0">
          VI. El Cliente pagará al artista musical, la cantidad total del monto colocado anteriormente para el contrato, que se realizará de la siguiente manera:</p>
        <ul>
          <li>50% al inicio del contrato.</li>
          <li>50% al finalizar y entregar los servicios acordados.</li>
        </ul>
      </pv-accordion-tab>
      <pv-accordion-tab header="DERECHOS Y OBLIGACIONES">
        <p class="m-0">
          VII. El Artista musical se compromete a prestar los servicios con la mayor diligencia y profesionalidad, cumpliendo con las especificaciones y requerimientos del Cliente.</p>
        <p>VIII. El Cliente se compromete a proporcionar toda la información y recursos necesarios para que el Artista pueda realizar su trabajo.</p>

      </pv-accordion-tab>
      <pv-accordion-tab header="CONFIDENCIALIDAD">
        <p class="m-0">
          IX. Ambas partes acuerdan mantener la confidencialidad de toda la información y documentación a la que tengan acceso en virtud de este contrato, tanto durante su vigencia como después de su terminación.</p>

      </pv-accordion-tab>
      <pv-accordion-tab header="RESOLUCIÓN DE DISPUTAS">
        <p class="m-0">
          X. En caso de controversias o disputas derivadas de este contrato, las partes se comprometen a resolverlas de manera amistosa. Si no es posible, se someterán a mediación o arbitraje conforme a las leyes aplicables establecidas por el gobierno peruano.</p>

      </pv-accordion-tab>
      <pv-accordion-tab header="TERMINACIÓN DEL CONTRATO">
        <p class="m-0">
          XI. Este contrato podrá ser terminado anticipadamente por cualquiera de las partes mediante notificación escrita con 7 dias de antelación.</p>
        <p>XII. En caso de incumplimiento de alguna de las partes, la parte afectada podrá dar por terminado el contrato de forma inmediata, previa notificación por escrito.</p>

      </pv-accordion-tab>
    </pv-accordion>
  </div>
  <pv-button @click="createContract">Send Contract</pv-button>
</template>

<style scoped>
.event-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.container {
  width: 50%;
  margin: 0 auto;
}
.contract-section {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.contract-section div {
  width: 45%;
}
.input-group {
  margin: 10px 0; /* Agrega un margen arriba y abajo para separar los campos de entrada */
}
.card {
  width: 100%;
  max-width: 1000px; /* Limita el ancho máximo del contenedor para mantener los campos de entrada centrados */
  margin: 0 auto; /* Centra el contenedor en la página */
}
</style>