import styles from "./CityRow.module.css";

function CityRow({ele}) {
  return (
    <tr data-testid="countries-container" className={styles.container}>
      <td> {ele.id} </td>
      <td> {ele.name} </td>
      <td> {ele.country} </td>
      <td> {ele.population} </td>
    </tr>
  );
}

export default CityRow;
