

<script>
import {Doughnut} from 'vue-chartjs'

export default {
  extends: Doughnut,
  name: "ChartDoughnut",
  props: {assetList: null},
  data: () => ({
    dataChart: {
      code: [],
      amount: [],
      color: []
    },
    color: [
      '#3A36BF',
      '#555BD9',
      '#4E8AD9',
      '#04B2D9',
      '#A0F2F2',
      '#183940',
      '#118C76',
      '#26BFA3',
      '#0CF2B1',
      '#402D22'
      ]
  }),
  created() {
    this.assetList.forEach(element => {
      this.dataChart.code.push(element.code);
      this.dataChart.amount.push(element.amount);
      let color = this.color[Math.floor(Math.random() * this.color.length)]
      this.dataChart.color.push(color)
    });
  },
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: this.dataChart.code,
      datasets: [
        {
          label: 'GitHub Commits',
          backgroundColor: this.dataChart.color,
          data: this.dataChart.amount
        }
      ]
    })
  }
}
</script>