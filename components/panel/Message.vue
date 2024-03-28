<template>
  <div>
    <div @click="hideMessage" class="backdrop" v-if="message || loading"></div>
    <div class="loading" v-if="loading">
      <img class="w-25" src="~/assets/pictures/loading.gif" alt="loading">
    </div>
    <div
      class="message"
      v-if="message"
      :class="{ success: isSuccess, fail: !isSuccess }">
      <p class="theMessage">
      {{ message.data.message }}
      </p>
      <p dir="rtl">
      پیام بعد از {{ countdown }}  ثانیه بسته می شود.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timer: null,
      message: null,
      isSuccess: false,
      loading: false,
      countdown: 10, // Countdown initial value
    };
  },
  methods: {
    theLoading(status) {
      this.loading = status
    }, 
    showMessage(message) {
      this.message = message;
      this.startCountdown(); // Start countdown
      if(message.status == 201) {
        this.isSuccess = true
      }
      if(message.status == 402) {
        this.isSuccess = false
      }
    },
    startCountdown() {
      this.timer = setInterval(() => {
        if (this.countdown > 0) {
          this.countdown--;
        } else {
          clearInterval(this.timer);
          this.hideMessage();
        }
      }, 1000); // Update countdown every second
    },
    hideMessage() {
      this.message = null;
      this.isSuccess = false;
      this.countdown = 10; // Reset countdown
      clearInterval(this.timer);
    },
  },
};
</script>

<style scoped>
.message {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  z-index: 1000; /* Ensure it's on top of other content */
}

.loading {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  z-index: 999; /* Ensure it's on top of other content */
}

.theMessage{
  font-size: 12pt;
  font-weight: bold;
}

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  backdrop-filter: blur(5px); /* Apply blur effect */
}
.success {
  background-color: #dff0d8; /* Green color for success */
}

.fail {
  background-color: #f2dede; /* Red color for fail */
}
</style>


