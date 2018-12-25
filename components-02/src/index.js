// 1. importing React
import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

// 2. creating the components
const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author={faker.name.firstName()}
          date={faker.date.recent().toDateString()}
          text={faker.lorem.sentence()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author={faker.name.firstName()}
          date={faker.date.recent().toDateString()}
          text={faker.lorem.sentence()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author={faker.name.firstName()}
          date={faker.date.recent().toDateString()}
          text={faker.lorem.sentence()}
        />
      </ApprovalCard>
    </div>
  );
};

// 3. render the components
ReactDOM.render(<App />, document.querySelector("#root"));
