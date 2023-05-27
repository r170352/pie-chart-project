import React from 'react';
import './style.css';
import Chart from 'react-apexcharts';

export default function Main() {
  const [users, setUsers] = React.useState([]);
  const [genderCount, setGenderCount] = React.useState([]);

  React.useEffect(() => {
    fetch('https://dummyjson.com/users?limit=34')
      .then((res) => res.json())
      .then((json) => setUsers(json.users));
  }, []);
  const genderList = users.map((user) => user.gender);
  const tottalLength = genderList.length;
  const maleFiltered = genderList.filter((gender) => gender === 'male');
  const maleLength = maleFiltered.length;
  const femaleFiltered = genderList.filter((gender) => gender === 'female');
  const femaleLength = femaleFiltered.length;

  React.useEffect(() => {
    const chartData = {
      series: [maleLength, femaleLength],
    };
    setGenderCount(chartData.series);
  }, [users]);

  return (
    <div>
      <div>Total Count-{tottalLength}</div>
      <Chart
        options={{
          labels: [`Male-${maleLength}`, `Female-${femaleLength}`],
        }}
        series={genderCount}
        type="pie"
        width="380"
      />
    </div>
  );
}
