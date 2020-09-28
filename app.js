const app = Vue.createApp({
  data() {
    return {
      newTask: "",
      tasks: [],
      taskListIsVisible: true,
    }
  },
  computed: {
    buttonCaption() {
      return this.taskListIsVisible ? "Hide List" : "ShowList"
    },
  },
  methods: {
    addTask() {
      this.tasks.push(this.newTask)
    },
    toggleList() {
      this.taskListIsVisible = !this.taskListIsVisible
    },
  },
})

app.mount("#assignment")
