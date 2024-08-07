import { Link, useParams } from "react-router-dom";
import { get } from "../../ulities";
import { useEffect, useState } from "react";
import { getCookie } from "../../helper/cookie";

function Answers() {
  const [dataAnswer,setAnswer]=useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const dataAnswer = await get(`answers?userId=${getCookie("userId")}`);
      const dataTopic = await get(`topics`);
      console.log(dataAnswer);
      console.log(dataTopic);
      const answerFinal=[];
      for (let i = 0; i < dataAnswer.length; i++) {
        const item =dataTopic.find((item) => item.id == dataAnswer[i].topicId);
        answerFinal.push({
          ...dataAnswer[i],
          name:item.name,
        });
      }
      setAnswer(answerFinal);
    };
    fetchApi();
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Chủ đề</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {dataAnswer.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>
                <Link to={"/Result/"+item.id}>Xem kết quả</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
export default Answers;
