import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { get, post } from "../../ulities";
import { getTopic } from "./getTopic";
import { getQuestions } from "./getQuestions";
import { getCookie } from "../../helper/cookie";
function Quiz() {
  const params = useParams();

  const navigate = useNavigate();
  const [title, setTitle] = useState();
  const [listQuestion, setListQuestion] = useState([]);
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const questions = await getQuestions(params);
      const title = await getTopic(params);
      const userData = await get(`users?email=${getCookie("email")}`);
      setListQuestion(questions);
      setTitle(title);
      setUserData(userData);
    };
    fetchApi();
  }, []);

  let answers = [];
  const handleSubmit = async (e) => {
    e.preventDefault();
    for (let i = 0; i < e.target.elements.length; i++) {
      const name = e.target.elements[i].name;
      const value = e.target.elements[i].value;
      if (e.target.elements[i].checked) {
        answers.push({
          questionId: parseInt(name),
          answer: parseInt(value),
        });
      }
    }
    const result = {
      userId: userData[0].id,
      topicId: parseInt(params.id),
      answers: answers,
    };
    const response = await post("answers", result);
    navigate("/Result/"+response.id);
  };

  return (
    <>
      <h2>Danh sách câu hỏi {title && <>{title[0].name}</>} :</h2>
      <form onSubmit={handleSubmit}>
        {listQuestion.map((item, index) => (
          <div key={item.id}>
            <h3>{index + 1 + ". " + item.question}</h3>
            {item.answers.map((answerItem, indexAns) => (
              <div key={indexAns}>
                <input
                  type="radio"
                  name={item.id} // Đảm bảo mỗi nhóm radio buttons có cùng name cho mỗi câu hỏi
                  value={indexAns}
                  id={`quiz-${item.id}-${indexAns}`}
                />
                <label htmlFor={`quiz-${item.id}-${indexAns}`}>
                  {String.fromCharCode(65 + indexAns) + ". " + answerItem}
                </label>
              </div>
            ))}
          </div>
        ))}
        <button type="submit">Nộp bài</button>
      </form>
    </>
  );
}
export default Quiz;
