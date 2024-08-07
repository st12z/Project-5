import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "../../ulities";
import "./Result.scss";
function Result() {
  const params = useParams();
  const [dataResult, setDataResult] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const dataAnswer = await get(`answers?id=${params.id}`);
      const dataQuestion = await get(
        `questions?topicId=${dataAnswer[0].topicId}`
      );
      const resultFinal = [];
      for (let i = 0; i < dataQuestion.length; i++) {
        resultFinal.push({
          ...dataQuestion[i],
          ...dataAnswer[0].answers.find(
            (item) => item.questionId == dataQuestion[i].id
          ),
        });
      }
      setDataResult(resultFinal);
    };
    fetchApi();
  }, []);
  let countTrue=0;
  dataResult.map((item, index) =>{
    if(item.answer==item.correctAnswer) countTrue+=1;
  });
  return (
    <>
      <h2>Kết quả</h2>
      <div>
        <span>Số lượng câu đúng:{countTrue} | </span>
        <span>Số lượng câu sai:{dataResult.length-countTrue} </span>
      </div>
      {dataResult.map((item, index) => (
        <div key={item.id}>
          <h3>
            <span>{index + 1 + ". " + item.question}</span>
            {item.answer == item.correctAnswer ? (
              <span className="correct-answer">Đúng</span>
            ) : (
              <span className="wrong-answer">Sai</span>
            )}
          </h3>

          {item.answers.map((answerItem, indexAns) => {
            let className = "";
            let checked = false;
            if (item.answer === indexAns){
                checked = true;
                className+="result__answer--selected "
            }
            if (indexAns === item.correctAnswer) {
              className +="result__answer--true";
            }
            // else{
            //     className+="result-answer--false";
            // }
            return (
              <div key={indexAns}>
                <input
                  type="radio"
                  name={item.id} // Đảm bảo mỗi nhóm radio buttons có cùng name cho mỗi câu hỏi
                  value={indexAns}
                  id={`quiz-${item.id}-${indexAns}`}
                  defaultChecked={checked}
                />
                <label
                  htmlFor={`quiz-${item.id}-${indexAns}`}
                  className={className}
                >
                  {String.fromCharCode(65 + indexAns) + ". " + answerItem}
                </label>
              </div>
            );
          })}
        </div>
      ))}
    </>
  );
}
export default Result;
