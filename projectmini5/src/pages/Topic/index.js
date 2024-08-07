import { Link } from "react-router-dom";
import "./Topic.scss";
import { useEffect, useState } from "react";
import { get } from "../../ulities";
function Topic() {
  const [dataTopic, setDataTopic] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const response = await get("topics");
      setDataTopic(response);
    };
    fetchApi();
  }, []);
  return (
    <>
      <h2>Danh sách chủ đề</h2>
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Tên chủ đề</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {dataTopic.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>
                <Link to={"/QuizQuestion/" + item.id}>Làm bài</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
export default Topic;
