const ctx = document.getElementById("myChart").getContext("2d");

document.getElementById("username").addEventListener("input", function () {
  let username = document.getElementById("username").value;
  let regex = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9]).{8,}$/;

  if (regex.test(username)) {
    document.getElementById("username").style.borderColor = "green";
  } else {
    document.getElementById("username").style.borderColor = "red";
  }
});

const myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Income",
        data: [],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Expenses",
        data: [],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

document.getElementById("chart-tab").addEventListener("click", function () {
  let incomeData = [];
  let expensesData = [];

  let months = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];

  months.forEach((month) => {
    let income = document.getElementById(`income-${month}`).value;
    let expenses = document.getElementById(`expenses-${month}`).value;

    incomeData.push(income);
    expensesData.push(expenses);
  });

  myChart.data.datasets[0].data = incomeData;
  myChart.data.datasets[1].data = expensesData;

  myChart.update();
});

document.getElementById("download").addEventListener("click", function () {
  let canvas = document.getElementById("myChart");
  let image = canvas.toDataURL("image/png");

  let link = document.createElement("a");
  link.href = image;
  link.download = "chart.png";
  link.click();
});
