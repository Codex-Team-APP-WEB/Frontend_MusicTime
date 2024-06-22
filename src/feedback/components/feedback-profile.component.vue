<template>
  <div class="card">
    <h1>Feedback</h1>
    <form @submit.prevent="submitFeedback">
      <div class="feedback-inputs" style="display: flex; justify-content: space-between;">
        <div>
          <p>Name:</p>
          <pv-input-text id="name" v-model="newFeedback.name" required class="long-input" />
          <div>
            <p>comment:</p>
            <pv-textarea id="comment" v-model="newFeedback.comment" required class="long-input tall-input"></pv-textarea>
          </div>
        </div>
        <div class="points-input">
          <p>Qualification:</p>
          <div>
            <pv-rating v-model="starRating" :stars="5" :cancel="false"></pv-rating>
            <span class="average-rating">({{ calculateAverageRating() }})</span>
          </div>
        </div>
      </div>
      <pv-button type="submit" label="Submit" />
    </form>
    <pv-accordion :multiple="true" expandIcon="pi pi-plus" collapseIcon="pi pi-minus">
      <pv-accordion-tab v-for="feedback in feedbackData" :key="feedback.id">
        <template #header>
          <span class="flex align-items-center gap-2 w-full">
            <pv-avatar :image="feedback.image" shape="circle" />
            <span class="font-bold white-space-nowrap">{{ feedback.name }} {{ feedback.surname }}</span>
            <div>
              <pv-rating :modelValue="feedback.points" :stars="5" :readonly="true"></pv-rating>
            </div>
            <pv-badge :value="feedback.points" class="ml-auto mr-2" />
            <pv-button class="p-button-rounded p-button-danger p-button-outlined" @click="deleteFeedback(feedback.id)">
              <i class="pi pi-trash"></i>
            </pv-button>
          </span>
        </template>
        <p class="m-0">
          {{ feedback.comment }}
        </p>

        <div class="justify-end items-center">
          <pv-button icon="pi pi-thumbs-up" class="p-button-rounded p-button-success p-button-outlined" @click="likeFeedback(feedback)" />
          <pv-badge :value="feedback.likes" />
          <pv-button icon="pi pi-thumbs-down" class="p-button-rounded p-button-danger p-button-outlined" @click="dislikeFeedback(feedback)" />
          <pv-badge :value="feedback.dislikes" />
        </div>

      </pv-accordion-tab>
    </pv-accordion>
  </div>
</template>

<script>
import {FeedbackApiService} from '../services/feedback-api.service';

export default {
  data() {
    return {
      feedbackData: [],
      feedbackService: new FeedbackApiService(),
      newFeedback: {
        name: '',
        comment: '',
        points: 0
      },
      starRating: 0
    };
  },
  methods: {
    fetchFeedback() {
      this.feedbackService.getAll()
          .then(response => {
            this.feedbackData = response.data;
          })
          .catch(error => {
            console.log(error);
          });
    },
    submitFeedback() {
      if (this.starRating > 5) {
        alert('Points cannot exceed 5');
        return;
      }

      this.newFeedback.points = this.starRating;

      this.feedbackService.create(this.newFeedback)
          .then(response => {
            this.feedbackData.push(response.data);
            this.newFeedback = {name: '', comment: '', points: 0};
            this.starRating = 0;
          })
          .catch(error => {
            console.log(error);
          });
    },
    deleteFeedback(id) {
      this.feedbackService.delete(id)
          .then(() => {
            this.feedbackData = this.feedbackData.filter(feedback => feedback.id !== id);
          })
          .catch(error => {
            console.log(error);
          });
    },
    likeFeedback(feedback) {
      feedback.likes = 1;
      this.updateFeedback(feedback);
    },
    dislikeFeedback(feedback) {
      feedback.dislikes = 1;
      this.updateFeedback(feedback);
    },
    updateFeedback(feedback) {
      this.feedbackService.update(feedback.id, feedback)
          .catch(error => {
            console.log(error);
          });
    },
    calculateAverageRating() {
      if (this.feedbackData.length === 0) {
        return 0;
      }
      const total = this.feedbackData.reduce((sum, feedback) => sum + Number(feedback.points), 0);
      return (total / this.feedbackData.length).toFixed(2);
    }
  },
  created() {
    this.fetchFeedback();
  },
};
</script>

<style scoped>


.long-input {
  width: 800px;
}

.tall-input {
  height: 100px;
}

.points-input {
  margin-right: 400px;
}

textarea {
  width: 800px;
  height: 100px;
  resize: none;
}

</style>