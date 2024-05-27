<script>
import html2pdf from 'html2pdf.js'
export default {
  name: "contract-view",
  components: {},
  methods: {
    exportToPdf() {
      let element = document.getElementById('contract-content');
      let opt = {
        margin: 1,
        filename: 'contract.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
      };
      html2pdf().set(opt).from(element).save();
    }
  }
}
</script>

<template>

  <h2>Contract creation</h2>
  <p>Fill out all the information that will be used to create and send the contract to the musician.</p>
<div id="contract-content">
  <h3>CONTRACT FOR MUSICAL PRESENTATION</h3>
  <pv-divider />
  <div class="card">
    <h5>DECLARACIONES</h5>
    <p class="m-0">
      I. Victor Raul, en lo sucesivo denominado "El Cliente", declara que es una persona física con capacidad legal para contratar y obligarse en términos de este contrato.
    </p>
    <p>II. Juan Diego, en lo sucesivo denominada "El artista musical", declara que es una persona física con capacidad legal para recibir contratos y obligarse en términos de este contrato.</p>

    <pv-divider />
    <h5>OBJETO DEL CONTRATO</h5>
    <p class="m-0">
      III. El Cliente contrata los servicios del Artista musical para la realización de los siguientes trabajos: Presentacion para evento musical. </p>

    <pv-divider />
    <h5>PLAZOS Y TÉRMINOS</h5>
    <p class="m-0">
      IV. El presente contrato tendrá una vigencia de 1 mes, iniciando el dia de envio del contrato y terminando el dia despues de cumplir un mes (30 dias habiles) luego del inicio.</p>
      <p> V. El artista musical se compromete a presentarse al evento conforme a la fecha y hora del evento. </p>
    <pv-divider />
    <h5>COMPENSACIÓN Y PAGOS</h5>
    <p class="m-0">
      VI. El Cliente pagará al artista musical, la cantidad total del monto colocado anteriormente para el contrato, que se realizará de la siguiente manera:</p>
    <ul>
      <li>50% al inicio del contrato.</li>
      <li>50% al finalizar y entregar los servicios acordados.</li>
    </ul>
    <pv-divider />
    <h5>DERECHOS Y OBLIGACIONES</h5>
    <p class="m-0">
      VII. El Artista musical se compromete a prestar los servicios con la mayor diligencia y profesionalidad, cumpliendo con las especificaciones y requerimientos del Cliente.</p>
    <p>VIII. El Cliente se compromete a proporcionar toda la información y recursos necesarios para que el Artista pueda realizar su trabajo.</p>
    <pv-divider />
    <h5>CONFIDENCIALIDAD</h5>
    <p class="m-0">
      IX. Ambas partes acuerdan mantener la confidencialidad de toda la información y documentación a la que tengan acceso en virtud de este contrato, tanto durante su vigencia como después de su terminación.</p>

    <pv-divider />
    <h5>RESOLUCIÓN DE DISPUTAS</h5>
    <p class="m-0">
      X. En caso de controversias o disputas derivadas de este contrato, las partes se comprometen a resolverlas de manera amistosa. Si no es posible, se someterán a mediación o arbitraje conforme a las leyes aplicables establecidas por el gobierno peruano.</p>

    <pv-divider />
    <h5>TERMINACIÓN DEL CONTRATO</h5>
    <p class="m-0">
      XI. Este contrato podrá ser terminado anticipadamente por cualquiera de las partes mediante notificación escrita con 7 dias de antelación.</p>
    <p>XII. En caso de incumplimiento de alguna de las partes, la parte afectada podrá dar por terminado el contrato de forma inmediata, previa notificación por escrito.</p>
  </div>
</div>
<pv-button @click="exportToPdf" label="Export to PDF" />

  <div>
    <p><strong>Nota:</strong> Para validez legal se solicita la firma de ambas partes frente al documento generado por la plataforma MusicTime.</p>
  </div>
</template>

<style scoped>

</style>