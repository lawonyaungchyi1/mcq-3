import nyanlin from "./../nyanlin.png";
import { Container, MessageBox } from "./MyPage-style";
import { Button } from "@mui/material";
import { useState } from "react";
import Header from "./../Header";
import Form from "./../Form";

const MyPage = () => {
  const [click, setClick] = useState(false);

  const showQuestions = () => {
    setClick(!click);
  };
  return (
    <>
      {click ? (
        <>
          <Header />
          <Form />
        </>
      ) : (
        <div style={Container}>
          <div>
            <Button variant="contained" color="error" onClick={showQuestions}>
              မေးခွန်းကြည့်ကြရအောင်
            </Button>
          </div>
          <MessageBox>
            "သယ်ရင်း ကိုဗစ်တေဖြစ်နေတယ်။ ကျန်းမာရေးဂရုစိုက်အူး😷"
          </MessageBox>
        </div>
      )}
    </>
  );
};

export default MyPage;
